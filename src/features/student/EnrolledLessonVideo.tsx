import type { enrolledCourseDetails } from "@/types/Sylvia/types";
import courseImg from "../../../src/assets/images/course1.png";
import ShowLessons from "@/components/Sylvia/showLessons";
import BreadcrumbIns from "@/components/shared/BreadcrumbIns";
import { useObserver } from "@/hooks/useObserver";

const EnrolledLessonVideo = () => {
  const lessons: enrolledCourseDetails["lessons"] = [
    { id: 1, title: "Introduction to UI/UX", video_url: courseImg, done: true },
    {
      id: 2,
      title: "Understanding User Needs",
      video_url: courseImg,
      done: false,
    },
    {
      id: 3,
      title: "Wireframing and Prototyping",
      video_url: courseImg,
      done: false,
    },
  ];

  // Basic animation
  const sectionAnim = useObserver("fade-up");

  return (
    <>
      <div className="container w-[90%] m-auto my-[100px] ">
        <BreadcrumbIns
          navigate={{
            to: "/student/enrolledCourseDetails",
            navigateTO: "Course details",
            name: `Lesson ${lessons[0].id}`,
          }}
        />
        <div className="mt-10 w-full">
          <>
            <div
              ref={sectionAnim.ref}
              className={`animate-hidden ${sectionAnim.animation} ${
                sectionAnim.isVisible ? "show" : ""
              } flex flex-col gap-10 mb-15`}
            >
              <img
                src={lessons[0].video_url}
                className="w-full  rounded-lg cursor-pointer"
              />
              <p
                key={lessons[0].id}
                className="flex items-center gap-6 text-3xl"
              >
                Lesson {lessons[0].id}: {lessons[0].title}
              </p>
            </div>
            <ShowLessons />
          </>
        </div>
      </div>
    </>
  );
};

export default EnrolledLessonVideo;
