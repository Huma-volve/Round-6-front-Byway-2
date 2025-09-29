import type { enrolledCourse, enrolledCourseDetails } from "@/types/Sylvia/types";
import courseImg from "../../../src/assets/images/course1.png";
import { useState } from "react";
import ShowLessons from "@/components/Sylvia/showLessons";


const EnrolledCourseDetails = () => {
    const instructorName = "sylvia yousif"; // from course data
    const [openMenu, setOpenMenu] = useState(false);

    const courseData: enrolledCourse = {
        id: 52,
        title: "Course title",
        category: "Recusandae",
        status: "draft",
        price: "99.00",
        compare_price: "149.00",
        totalHours: 22,
        level: "intermediate",
        lessons_count: 0,
        image: courseImg,
        created_at: "2025-09-15",
    };

    const enrolledCourseDetailsData: enrolledCourseDetails = {
        id: 52,
        title: "Course title",
        description: "Introduction to  user interface and user experience design",
        status: "On progress",
        progress: 40,
        lessons: [
            { id: 1, title: "Introduction to UI/UX", video_url: courseImg, done: true },
            { id: 2, title: "Understanding User Needs", video_url: courseImg, done: false },
            { id: 3, title: "Wireframing and Prototyping", video_url: courseImg, done: false },
        ],
    }



    return (
        <>
            <div className="container w-[90%] m-auto">
                <article className="flex gap-6 items-start flex-row-reverse m-auto my-10 justify-between">
                    <img
                        src={courseData.image}
                        alt="course cover photo"
                        className="rounded-[8px] w-[45%] object-cover object-top mb-4"
                    />
                    <div className="flex flex-col gap-2 p-4 rounded-[15px] w-[40%]">
                        <p className="font-semibold text-gray-900 text-lg lg:text-3xl capitalize">
                            {courseData.title}
                        </p>
                        <p className="text-md text-blue-500">
                            Instructor: <span>{instructorName}</span>
                        </p>
                        <div className="flex items-center flex-wrap text-xl text-gray-700  my-4">
                            <p>{enrolledCourseDetailsData.description}</p>
                        </div>
                        <p className="font-semibold text-lg text-gray-900">
                            Duration: {courseData.totalHours} Hours
                        </p>
                        <p className="font-semibold text-lg text-gray-900">
                            Progess: {enrolledCourseDetailsData.progress}%
                        </p>
                        <p className="font-semibold text-lg text-gray-900">
                            Status: {enrolledCourseDetailsData.status}
                        </p>
                    </div>
                </article >


                <div className="flex justify-between m-auto">
                    <button className="bg-blue-500 font-semibold text-white text-xl px-10 py-5 rounded-2xl mt-4 hover:bg-blue-600 transition cursor-pointer transform"
                        onClick={() => setOpenMenu(!openMenu)}>
                        lessons
                    </button>
                    <button className="bg-gray-500 font-semibold text-white text-xl px-6 py-3 rounded-2xl mt-4 hover:bg-gray-600 transition cursor-pointer">
                        Give Feedback
                    </button>


                </div>
                {openMenu && <ShowLessons />}
            </div >
        </>
    );
};



export default EnrolledCourseDetails;