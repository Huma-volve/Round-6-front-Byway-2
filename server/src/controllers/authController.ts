import { Request, Response } from "express";
import db from "../config/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../types/types";
import { JWT_SECRET } from "../config/secrets";

// // ✅ Signup
// export const signup = (req: Request, res: Response) => {
//   const { first_name, last_name, username, email, password, role } = req.body;

//   // Hash the password
//   const hashedPassword = bcrypt.hashSync(password, 10);

//   // Insert user
//   db.run(
//     "INSERT INTO users (first_name, last_name, username, email, password, role) VALUES (?, ?, ?, ?, ?, ?)",
//     [first_name, last_name, username, email, hashedPassword, role || "student"],
//     function (this: { lastID: number }, err: Error | null) {
//       if (err) {
//         console.log(
//           res.status(400).json({ error: "User already exists or DB error" })
//         );
//         return res
//           .status(400)
//           .json({ error: "User already exists or DB error" });
//       }

//       // ✅ Generate a token immediately after signup
//       const token = jwt.sign(
//         { id: this.lastID, email, role },
//         process.env.JWT_SECRET || "secret123",
//         { expiresIn: "7d" }
//       );

//       // ✅ Return full user info + token
//       res.json({
//         message: "User created successfully",
//         token,
//       });
//     }
//   );
// };

export const signup = (req: Request, res: Response) => {
  const { first_name, last_name, username, email, password, role } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  db.run(
    "INSERT INTO users (first_name, last_name, username, email, password, role, is_verified) VALUES (?, ?, ?, ?, ?, ?, 0)",
    [first_name, last_name, username, email, hashedPassword, role || "student"],
    function (this: { lastID: number }, err: Error | null) {
      if (err) {
        return res
          .status(400)
          .json({ error: "User already exists or DB error" });
      }

      const userId = this.lastID;
      const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
      const expiresAt = Date.now() + 5 * 60 * 1000; // 5 mins expiry

      db.run(
        "INSERT INTO email_verification (user_id, otp, expires_at) VALUES (?, ?, ?)",
        [userId, otp, expiresAt],
        (err: Error | null) => {
          if (err) {
            return res.status(400).json({ error: "Failed to store OTP" });
          }

          // ✅ Return OTP only for testing — later you can send by email instead
          res.json({
            message: "User created, please verify your email",
            otp, // ⚠ Send only during testing!
            userId,
            email,
          });
        }
      );
    }
  );
};

// export const verifyEmail = (req: Request, res: Response) => {
//   const { email, otp } = req.body;

//   db.get(
//     "SELECT id FROM users WHERE email = ?",
//     [email],
//     (err: Error | null, user: User) => {
//       if (err || !user) {
//         return res.status(404).json({ error: "User not found" });
//       }

//       db.get(
//         "SELECT * FROM email_verification WHERE user_id = ? AND otp = ?",
//         [user.id, otp],
//         (err: Error | null, verification: any) => {
//           if (err || !verification) {
//             return res.status(400).json({ error: "Invalid OTP" });
//           }

//           if (Date.now() > verification.expires_at) {
//             return res.status(400).json({ error: "OTP expired" });
//           }

//           // ✅ Mark user as verified
//           db.run("UPDATE users SET is_verified = 1 WHERE id = ?", [user.id]);

//           // ✅ Generate token and return full user data
//           const token = jwt.sign({ id: user.id, email }, JWT_SECRET, {
//             expiresIn: "7d",
//           });

//           db.get(
//             "SELECT * FROM users WHERE id = ?",
//             [user.id],
//             (err: Error | null, fullUser: User) => {
//               if (err) {
//                 return res.status(500).json({ error: "DB error" });
//               }

//               res.json({
//                 message: "Email verified successfully",
//                 token,
//                 user: fullUser,
//               });
//             }
//           );
//         }
//       );
//     }
//   );
// };

export const resendOtp = (req: Request, res: Response) => {
  const { user_id } = req.body;
  const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = Date.now() + 5 * 60 * 1000; // 5 mins

  db.run(
    "UPDATE email_verification SET otp = ?, expires_at = ? WHERE user_id = ?",
    [newOtp, expiresAt, user_id],
    (err: Error | null) => {
      if (err) {
        return res.status(500).json({ error: "Failed to resend OTP" });
      }

      return res.json({
        message: "New OTP generated",
        otp: newOtp, // later you will send by email
      });
    }
  );
};

export const verifyOtp = (req: Request, res: Response) => {
  const { user_id, otp } = req.body;

  db.get(
    "SELECT * FROM email_verification WHERE user_id = ? AND otp = ?",
    [user_id, otp],
    (err: Error | null, verification: any) => {
      if (err || !verification) {
        return res.status(400).json({ error: "Invalid OTP" });
      }

      // ✅ Check Expiration
      if (Date.now() > verification.expires_at) {
        return res.status(410).json({ error: "OTP expired" }); // Frontend should trigger resendOtp()
      }

      // ✅ Fetch user details to include in JWT
      db.get(
        "SELECT id, email, role, first_name, last_name, username FROM users WHERE id = ?",
        [user_id],
        (err: Error | null, user: any) => {
          if (err || !user) {
            return res.status(404).json({ error: "User not found" });
          }

          // ✅ Generate JWT Token
          const token = jwt.sign(
            {
              id: user.id,
              email: user.email,
              role: user.role,
            },
            JWT_SECRET,
            { expiresIn: "7d" }
          );

          // ✅ Delete OTP after success
          db.run("DELETE FROM email_verification WHERE user_id = ?", [user_id]);

          // ✅ Return token + user data so frontend logs user in
          return res.json({
            message: "OTP verified successfully",
            token,
            user, // frontend will store this in context/state
          });
        }
      );
    }
  );
};

// ✅ Login
export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;

  db.get(
    `SELECT * FROM users WHERE email = ?`,
    [email],
    async (err: Error | null, user: User) => {
      if (!user) return res.status(404).json({ error: "User not found" });

      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(401).json({ error: "Invalid credentials" });

      const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
        expiresIn: "7d",
      });

      // Remove password before responding
      const { password: _, ...sanitizedUser } = user;
      console.log({ token, sanitizedUser });
      res.json({
        token,
        user: sanitizedUser, // Return all user data except password
      });
    }
  );
};

export const getMe = (req: Request, res: Response) => {
  const userData = (req as any).user;

  db.get(
    "SELECT id, first_name, last_name, username, email, profile_picture, headline, about, x_link,linkedin_link, youtube_link, facebook_link, is_instructor, website, created_at, role FROM users WHERE id = ?",
    [userData.id],
    (err: Error | null, user: any) => {
      if (err || !user) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.json({ user });
    }
  );
};
