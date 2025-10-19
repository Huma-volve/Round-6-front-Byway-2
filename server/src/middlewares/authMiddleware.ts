import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { JWT_SECRET } from "../config/secrets";

dotenv.config();

// const JWT_SECRET = process.env.JWT_SECRET || "SUPER_SECRET_KEY";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: number;
      role: string;
    };
    (req as any).user = decoded; // Attach user data to request object
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};
