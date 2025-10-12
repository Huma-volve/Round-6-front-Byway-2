import db from "./db";

const INIT_SQL = `
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  username TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  profile_picture TEXT,
  headline TEXT,
  about TEXT,
  x_link TEXT,
  linkedin_link TEXT,
  youtube_link TEXT,
  facebook_link TEXT,
  is_instructor INTEGER DEFAULT 0,
  website TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS experiences (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  instructor_id TEXT NOT NULL,
  job_title TEXT,
  company TEXT,
  start_date TEXT,
  end_date TEXT,
  FOREIGN KEY (instructor_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS courses (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  author_name TEXT NOT NULL,
  average_rating REAL DEFAULT 0,
  instructor_id TEXT NOT NULL,
  category TEXT,
  description TEXT,
  level TEXT,
  price REAL DEFAULT 0,
  hours INTEGER DEFAULT 0,
  lectures INTEGER DEFAULT 0,
  duration TEXT,
  is_bestseller INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (instructor_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS course_videos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  course_id TEXT NOT NULL,
  title TEXT,
  url TEXT,
  duration_seconds INTEGER,
  position INTEGER DEFAULT 0,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS enrollments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  course_id TEXT NOT NULL,
  enrolled_at TEXT DEFAULT (datetime('now')),
  UNIQUE(user_id, course_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS favorites (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  target_type TEXT NOT NULL CHECK(target_type IN ('course','instructor')),
  target_id TEXT NOT NULL,
  added_at TEXT DEFAULT (datetime('now')),
  UNIQUE(user_id, target_type, target_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  course_id TEXT NOT NULL,
  student_id TEXT,
  student_name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 0 AND rating <= 5),
  date TEXT DEFAULT (datetime('now')),
  body TEXT,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
  FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS notifications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  type TEXT,
  title TEXT,
  body TEXT,
  is_read INTEGER DEFAULT 0,
  data TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS payments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  course_id TEXT,
  instructor_id TEXT,
  amount REAL NOT NULL,
  payment_method TEXT,
  paid_at TEXT DEFAULT (datetime('now')),
  transaction_id TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE SET NULL,
  FOREIGN KEY (instructor_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TRIGGER IF NOT EXISTS trg_reviews_after_insert
AFTER INSERT ON reviews
BEGIN
  UPDATE courses
  SET average_rating =
    (SELECT ROUND(AVG(rating), 2) FROM reviews WHERE course_id = NEW.course_id)
  WHERE id = NEW.course_id;

  UPDATE courses
  SET is_bestseller = CASE
    WHEN EXISTS(SELECT 1 FROM reviews r WHERE r.course_id = NEW.course_id AND r.rating = 5) THEN 1
    ELSE 0
  END
  WHERE id = NEW.course_id;
END;

CREATE TRIGGER IF NOT EXISTS trg_reviews_after_delete
AFTER DELETE ON reviews
BEGIN
  UPDATE courses
  SET average_rating =
    COALESCE((SELECT ROUND(AVG(rating), 2) FROM reviews WHERE course_id = OLD.course_id), 0)
  WHERE id = OLD.course_id;

  UPDATE courses
  SET is_bestseller = CASE
    WHEN EXISTS(SELECT 1 FROM reviews r WHERE r.course_id = OLD.course_id AND r.rating = 5) THEN 1
    ELSE 0
  END
  WHERE id = OLD.course_id;
END;

CREATE TRIGGER IF NOT EXISTS trg_reviews_after_update
AFTER UPDATE ON reviews
BEGIN
  UPDATE courses
  SET average_rating =
    (SELECT ROUND(AVG(rating), 2) FROM reviews WHERE course_id = NEW.course_id)
  WHERE id = NEW.course_id;

  UPDATE courses
  SET is_bestseller = CASE
    WHEN EXISTS(SELECT 1 FROM reviews r WHERE r.course_id = NEW.course_id AND r.rating = 5) THEN 1
    ELSE 0
  END
  WHERE id = NEW.course_id;
END;
`;

export function initDB(): Promise<void> {
  return new Promise((resolve, reject) => {
    db.exec(INIT_SQL, (err: Error | null) => {
      if (err) {
        console.error("Failed to initialize DB schema:", err);
        return reject(err);
      }
      console.log("Database initialized (tables & triggers created).");
      resolve();
    });
  });
}
