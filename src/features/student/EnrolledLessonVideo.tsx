import type { enrolledCourseDetails } from "@/types/Sylvia/types";
import courseImg from "../../../src/assets/images/course1.png";
import ShowLessons from "@/components/Sylvia/showLessons";

const EnrolledLessonVideo = () => {

    const lessons: enrolledCourseDetails["lessons"] = [
        { id: 1, title: "Introduction to UI/UX", video_url: courseImg, done: true },
        { id: 2, title: "Understanding User Needs", video_url: courseImg, done: false },
        { id: 3, title: "Wireframing and Prototyping", video_url: courseImg, done: false },
    ];


    return (
        <>
            <div className="container w-[90%] m-auto">
                <div className="mt-10 w-full">
                    <>
                        <div className="flex flex-col gap-10 mb-15">
                            <img src={lessons[0].video_url} className="w-full h-[90vh] rounded-lg cursor-pointer" />
                            <p key={lessons[0].id} className="flex items-center gap-6 text-3xl">Lesson {lessons[0].id}: {lessons[0].title}</p>
                        </div>
                        <ShowLessons />
                    </>
                </div>
            </div>
        </>
    )

}

export default EnrolledLessonVideo;