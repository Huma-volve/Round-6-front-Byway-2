import app from "./app";
import { initDB } from "./config/initDB";

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await initDB(); // <--- ensure tables exist
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Server failed to start due to DB init error:", err);
    process.exit(1);
  }
}

start();
