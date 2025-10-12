import type { CourseResponse } from "@/types/Courses/types";
import CourseImage from "../../assets/images/46d2a2e63f8edfbb3b98e709fc5a9c081abd6897.png";
import InstructorImage from "../../assets/images/9bbcf2a8f6d1f753b286332b007b2076174bf01a.png";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchCourseDetails } from "@/api/api";

export default function CourseDetails() {
  const [course, setCourse] = useState<CourseResponse | null>(null);

  useEffect(() => {
    fetchCourseDetails(1).then((res) => setCourse(res));
  }, []);

  return (
    <>
      <div className=" my-5">
        <img src={CourseImage} alt="course image" className="w-full" />
        <div className="w-full">
          <h2 className="py-2 text-4xl font-semibold">
            {course?.data.course.title}
          </h2>
          <p className="text-gray-500 font-medium w-[80%] text-xl mb-2">
            {course?.data.course.description}
          </p>
        </div>
        <h3 className="text-sm">Instructor: Omnya Ali </h3>
        {/* lessons */}
        <div className="px-3 w-60 py-1 text-center my-7 rounded-2xl border border-blue-900">
          <p className="font-medium text-2xl">Lessons:</p>
        </div>
        <div>
          <div className="flex mb-4 gap-5 items-center border-b border-gray-300 pb-4">
            <img src={CourseImage} alt="course" className="w-80" />
            <input type="checkbox" name="" value="" />
            <p> Lesson 1: Introduction to UI/UX </p>
          </div>
        </div>
        {/* Student card */}
        <div className="p-3 rounded-2xl my-4 border border-gray-200 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <img
                  src={InstructorImage}
                  alt="instructor image"
                  className="w-20 h-20 rounded-full"
                />
                <h1 className="text-xl font-medium">Mohamed ali</h1>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-gray-500 text-sm">(1200 Ratings)</p>
                <div className="flex text-yellow-400 text-xs fill-yellow-400 items-center">
                  <Star className="fill-yellow-400" />
                  <Star className="fill-yellow-400" />
                  <Star className="fill-yellow-400" />
                  <Star className="fill-yellow-400" />
                  <Star className="fill-yellow-400" />
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              Reviewed on 22nd March, 2024
            </p>
          </div>
          <p className="text-gray-600 w-[80%] pt-4">
            I was initially apprehensive, having no prior design experience. But
            the instructor, John Doe, did an amazing job of breaking down
            complex concepts into easily digestible modules. The video lectures
            were engaging, and the real-world examples really helped solidify my
            understanding.
          </p>
        </div>
      </div>
    </>
  );
}
