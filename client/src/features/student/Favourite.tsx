import { useState } from "react";
import CourseImage from "../../assets/images/course-image.png";
import { Heart } from "lucide-react";
export default function Favourite() {
  const [active, setActive] = useState<"courses" | "instructor">("courses");
  return (
    <div className="container mx-auto mt-[10%]">
      <div className="bg-[#F1F1F1] rounded-3xl flex justify-between w-xs">
        <button
          onClick={() => setActive("courses")}
          className={`font-semibold rounded-3xl  w-1/2 p-2 ${
            active === "courses" ? "bg-[rgba(114,114,114,0.26)]" : ""
          }`}
        >
          Courses
        </button>
        <button
          onClick={() => setActive("instructor")}
          className={`font-semibold rounded-3xl  w-1/2 p-2 ${
            active === "instructor" ? "bg-[rgba(114,114,114,0.26)] " : ""
          }`}
        >
          Instructors
        </button>
      </div>

      <div>
        {active === "courses" && (
          <div className="mt-10">
            <div className=" w-xl p-4 bg-[rgba(217,217,217,0.22)] rounded-2xl border-1 border-[rgba(114,114,114,0.08)]">
              <div className="flex gap-2 items-center">
                <img
                  src={CourseImage}
                  alt="img"
                  className="w-28 h-21 rounded-lg"
                />
                <div className="flex flex-col">
                  <h3 className="font-bold text-xl ">UI/UX Course</h3>
                  <p className="text-[#334155]">By Omnia Ali</p>
                </div>
                <button className="ml-auto">
                  <Heart />
                </button>
              </div>
              <hr className="bg-[rgba(114,114,114,0.19)] border-1 mt-5 mx-auto w-lg"></hr>
            </div>
          </div>
        )}

        {active === "instructor" && (
          <div className="mt-10">
            <div className=" w-xl p-4 bg-[rgba(217,217,217,0.22)] rounded-2xl border-1 border-[rgba(114,114,114,0.08)]">
              <div className="flex gap-2 items-center">
                <div className="w-20 h-20 rounded-full bg-[#D9D9D9]"></div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-xl ">Omnia Ali</h3>
                  <p className="text-[#334155]">UI/UX Course</p>
                </div>
                <button className="ml-auto">
                  <Heart />
                </button>
              </div>
              <hr className="bg-[rgba(114,114,114,0.19)] border-1 mt-5 mx-auto w-lg"></hr>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
