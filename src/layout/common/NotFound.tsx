import { Home, AlertTriangle, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-color-gray-900 text-gray-700 relative overflow-hidden">
      {/* 404 Animated Title */}
      <h1 className="text-[7rem] md:text-[10rem] font-extrabold tracking-widest text-color-blue-website animate-bounce [animation-duration:3s]">
        404
      </h1>

      {/* Subheading */}
      <p className="text-xl md:text-2xl text-center text-color-gray-40 mb-6 animate-fade-in">
        Uh-oh! This page is missing from your syllabus 📚
      </p>

      {/* Button */}
      <a
        href="/"
        className="px-6 py-3 bg-green hover:bg-green-600 text-white font-medium rounded-lg shadow-md shadow-color-gray-700 transition duration-300"
      >
        Back to Learning
      </a>
    </div>
  );
};

export default NotFound;
