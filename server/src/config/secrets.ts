// src/config/secrets.ts
import dotenv from "dotenv";
dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET as string;
if (!JWT_SECRET) {
  console.error("Missing JWT_SECRET env variable — aborting.");
  process.exit(1);
}
