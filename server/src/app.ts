import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";

const app = express();

app.use(cors({ origin: "http://localhost:5173" })); // Allow Vite frontend
app.use(express.json());
app.use("/users", userRoutes);
app.use("/api/auth", authRoutes);

export default app;
