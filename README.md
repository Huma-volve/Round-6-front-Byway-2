# 📚 Online Learning Platform (Frontend)

A modern React-based frontend for an **online learning platform** where users can join as **students** or **instructors**.

## 👥 User Roles

### 🎓 Student Features

- Create an account and manage profile
- Browse courses and check course details
- View instructor details
- Enroll in courses and access **course videos**
- Leave feedback/reviews on courses
- Purchase courses and view payment history
- Manage enrolled courses (My Courses)
- Add courses to favorites
- Receive and check notifications
- Close account if desired

### 👨‍🏫 Instructor Features

- Create an instructor account
- Manage instructor profile
- Add and publish courses
- View course details and student feedback
- Track course revenues and analytics
- Manage courses through a dashboard
- Receive and check notifications

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **UI & Icons:** Radix UI, Lucide React, React Icons
- **Utilities:**
  - `clsx` & `tailwind-merge` → Conditional class merging
  - `class-variance-authority` → Variant styling
  - `tw-animate-css` → Animation utilities

---

## 📂 Project Structure

├── .gitignore  
├── components.json # Component configuration
├── eslint.config.js # ESLint configuration
├── index.html # Main HTML entry
├── package-lock.json
├── package.json
├── public/ # Public assets (served as-is)
├── README.md
├── src/
│ ├── api/ # API layer (Axios/fetch configuration, API calls)
│ │ └── api.ts
│ ├── App.css # Global app styles
│ ├── App.tsx # Root React component
│ ├── assets/ # Project assets (images, icons, etc.)
│ │ ├── icons/
│ │ └── images/
│ ├── components/ # Reusable UI components
│ │ ├── shared/ # Shared components (e.g., CourseCard)
│ │ └── ui/ # Small UI primitives (e.g., Button)
│ ├── features/ # Feature-based components of the application
│ ├── hooks/ # Custom React hooks
│ ├── index.css # Global CSS
│ ├── layout/ # Layout and common components
│ ├── lib/ # Utility functions
│ │ └── utils.ts
│ ├── main.tsx # React entry point
│ ├── routes/ # App routing configuration
│ ├── store/ # State management (e.g., Redux slices)
│ └── types/ # TypeScript types and interfaces
├── tsconfig.app.json # TS config for app
├── tsconfig.json # Base TS config
├── tsconfig.node.json # TS config for Node
└── vite.config.ts # Vite configuration

---

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Huma-volve/Round-6-front-Byway-2.git
   cd Round-6-front-Byway-2

   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser at http://localhost:5173/
