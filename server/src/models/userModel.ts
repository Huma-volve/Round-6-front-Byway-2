import db from "../config/db";
import { User } from "../types/types";

export const getAllUsers = (): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    db.all(
      "SELECT * FROM users",
      [],
      (err: Error | null, rows: User[] | null) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows || []);
        }
      }
    );
  });
};
