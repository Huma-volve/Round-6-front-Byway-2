import { Request, Response } from "express";
import db from "../config/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../types/types";

const JWT_SECRET = "SUPER_SECRET_KEY"; // TODO: move to .env later

// ✅ Signup
export const signup = async (req: Request, res: Response) => {
  const { name, username, email, password, role } = req.body; // role: "student" | "instructor"

  const hashedPassword = await bcrypt.hash(password, 10);

  db.run(
    `INSERT INTO users (name, username, email, password, role) VALUES (?, ?, ?, ?, ?)`,
    [name, username, email, hashedPassword, role],
    (err: Error | null) => {
      if (err)
        return res
          .status(400)
          .json({ error: "User already exists or DB error." });
      res.json({ message: "User registered successfully" });
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

      res.json({
        token,
        user: sanitizedUser, // Return all user data except password
      });
    }
  );
};
