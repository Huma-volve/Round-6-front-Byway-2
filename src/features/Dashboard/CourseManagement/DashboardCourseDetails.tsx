import { Button } from "@/components/ui/button";
import CourseImage from "../../../assets/images/courseImage.png";
import VideoImage from "../../../assets/images/videoImage.png";

import { useState } from "react";
import avatar from "@/assets/icons/user.svg";
import { format, parseISO } from "date-fns";
import { FaStar } from "react-icons/fa";

export default function DashboardCourseDetails() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="container mt-10 ">
      <div className="flex flex-col items-start gap-3">
        <h1 className="text-[#587DBD] font-medium text-3xl">Courses Details</h1>
        <p className="text-[#0F172A] text-xl">View detailed information .</p>
        <div className="relative">
          <img src={CourseImage} alt="course-image" />
          <img
            src={VideoImage}
            alt="video-image"
            className="absolute top-19 left-37"
          />
        </div>
        <h3 className="text-[#0F172A] text-lg font-medium">
          Instructor: Omnya Ali
        </h3>
        <h5 className="font-semibold text-[#1E1E1E] text-2xl">
          Introduction to user interface and user experience design
        </h5>
        <p className="text-[#727272] leading-[160%] font-medium text-xl">
          Begin your journey in user interface and user experience design.
          <br />
          You'll learn to design wireframes, user flows, and interactive
          prototypes using Figma.
        </p>
        <Button
          onClick={() => setClicked(!clicked)}
          className="bg-[#ffffff] hover:bg-[#3D5DAB] border-1 border-[#3D5DAB] text-black text-xl font-bold rounded-xl pt-5 pb-5 pl-7 pr-7 mb-5"
        >
          Lessons:
        </Button>
        {clicked && (
          <div>
            <div className="flex gap-5 items-center mb-5 ">
              <img src={CourseImage} alt="course-image" className="w-3xs" />
              <p className="font-medium text-2xl">
                Lesson 1: Introduction to UI/UX
              </p>
            </div>
          </div>
        )}
        <div className="rounded-2xl p-4 lg:p-6 border border-gray-border mr-25 mb-5 bg-[#ffffff]">
          <div className="flex gap-4 items-center ">
            <img
              src={avatar}
              alt="an avatar"
              className="h-16 w-16 rounded-full mb-4"
            />
            <p className="font-semibold text-lg mb-2">Mohamed Ali</p>
            <div className="ml-auto mb-10">
              <div className="flex items-center gap-60">
                <p className="font-semibold text-sm flex gap-1 items-center text-[#727272]">
                  (1200 Rating)
                  <FaStar className="h-4 w-4 text-warning-500" />
                  <FaStar className="h-4 w-4 text-warning-500" />
                  <FaStar className="h-4 w-4 text-warning-500" />
                  <FaStar className="h-4 w-4 text-warning-500" />
                  <FaStar className="h-4 w-4 text-warning-500" />
                </p>
                <p className="text-sm text-gray-700">
                  Reviewed on {format(parseISO("2025-04-22"), "do MMMM, yyyy")}
                </p>
              </div>
            </div>
          </div>
          <p className=" text-gray-700 text-xl ">
            {" "}
            I was initially apprehensive, having no prior design experience. But
            the instructor, John Doe, did an amazing job of breaking down
            complex concepts into easily digestible modules. The video lectures
            were engaging, and the real-world examples really helped solidify my
            understanding.
          </p>
        </div>
      </div>
    </div>
  );
}
