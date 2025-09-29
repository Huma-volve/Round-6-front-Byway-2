import type { enrolledCourseDetails } from "@/types/Sylvia/types";
import courseImg from "../../../src/assets/images/course1.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const ShowLessons = () => {

    const [lessons, setLessons] = useState<enrolledCourseDetails["lessons"]>([
        { id: 1, title: "Introduction to UI/UX", video_url: courseImg, done: true },
        { id: 2, title: "Understanding User Needs", video_url: courseImg, done: false },
        { id: 3, title: "Wireframing and Prototyping", video_url: courseImg, done: false },
    ]);



    const toggleTask = (id: number) => {
        setLessons(prev =>
            prev.map(lesson =>
                lesson.id === id ? { ...lesson, done: !lesson.done } : lesson
            )
        );
    };

    const navigate = useNavigate();


    return (
        <>
            <div className="mt-10 w-full">
                <ul className="flex flex-col gap-10">
                    {lessons.map(lesson => (
                        <li
                            key={lesson.id}
                            className="flex items-center gap-6 cursor-pointer"
                            onClick={() => navigate(`/student/enrolledLessonVideo`)}
                        >
                            <img src={lesson.video_url} className="w-[30%] rounded-lg" />
                            <input
                                type="checkbox"
                                checked={lesson.done}
                                onChange={() => toggleTask(lesson.id)}
                                className="cursor-pointer h-5 w-5"
                            />
                            <p
                                className={`font-semibold text-2xl cursor-pointer ${lesson.done ? "line-through text-gray-500" : ""
                                    }`}
                            >
                                Lesson {lesson.id}: {lesson.title}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </>

    )
}


export default ShowLessons;