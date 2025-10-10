import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BiRightArrow } from "react-icons/bi";
import { useState } from "react";
import { ReviewCard } from "@/components/shared";
import BreadcrumbIns from "@/components/shared/BreadcrumbIns";
import { useObserver } from "@/hooks/useObserver";
import { Link } from "react-router";

const details = {
  id: 1,
  name: "Web Development",
  instructor: "ahmed ali",
  description:
    "Begin your journey in user interface and user experience design. You'll learn to design wireframes, user flows, and interactive prototypes using Figma.",
  title: "Introduction to  user interface and user experience design",
  duration: "6",
  bestseller: "bestseller",
  price: "200",
  rate: "1200",
  reviews: [
    {
      id: 112,
      student_name: "sara ",
      rating: 4,
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur nihil aliquid quibusdam nulla id voluptatum ullam veritatis perferendis, harum explicabo fuga ipsam asperiores sapiente. Expedita omnis nihil sit reprehenderit eos.",
      course_title: "Front end",
      created_at: "2025-09-29T12:52:00Z",
    },
    {
      id: 113,
      student_name: "sara ",
      rating: 4,
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur nihil aliquid quibusdam nulla id voluptatum ullam veritatis perferendis, harum explicabo fuga ipsam asperiores sapiente. Expedita omnis nihil sit reprehenderit eos.",
      course_title: "Front end",
      created_at: "2025-09-29T12:52:00Z",
    },
    {
      id: 115,
      student_name: "sara ",
      rating: 4,
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur nihil aliquid quibusdam nulla id voluptatum ullam veritatis perferendis, harum explicabo fuga ipsam asperiores sapiente. Expedita omnis nihil sit reprehenderit eos.",
      course_title: "Front end",
      created_at: "2025-09-29T12:52:00Z",
    },
  ],
  content: [
    { id: 1, title: "Introduction to UI/UX " },
    { id: 2, title: "Introduction to UI/UX " },
    { id: 3, title: "Introduction to UI/UX " },
    { id: 4, title: "Introduction to UI/UX " },
  ],
};

export default function StudentCourseDetails() {
  const navigate = {
    to: "/",
    navigateTO: "Browes Course",
    name: "Course details",
  };

  const [showLesson, setShowLesson] = useState(false);

  const toggleShowLesson = () => {
    setShowLesson(!showLesson);
  };

  // Basic animation
  const headerAnim = useObserver("fade-up");
  const reviewsAnim = useObserver("fade-up");

  return (
    <div className="container mx-auto px-10 sm:p-0">
      <div className="pb-10 ">
        <BreadcrumbIns navigate={navigate} />
      </div>
      <div
        ref={headerAnim.ref}
        className={`animate-hidden ${headerAnim.animation} ${
          headerAnim.isVisible ? "show" : ""
        }`}
      >
        <h1 className="font-bold text-3xl text-blue">{details.name}</h1>
        <span className="text-gray-700 text-lg pt-2 pb-5">
          Created by{" "}
          <Link
            to="/Student/instructordetails"
            className="text-[#2563eb] hover:underline"
          >
            {details.instructor}
          </Link>
        </span>
        <p className="font-bold text-2xl text-gray-900 pt-5">{details.title}</p>
        <p className="font-semibold text-2xl text-[#707070DB]">
          {details.description}
        </p>
        <p className="font-medium text-2xl py-5">
          Duration : {details.duration} weeks
        </p>
        <div className="flex gap-3 ">
          <span className="text-xl font-semibold bg-gray-400 text-white px-3 py-1 rounded-lg">
            {details.bestseller}
          </span>
          <div className="flex text-yellow-400 text-xs fill-yellow-400 items-center">
            <p className="text-gray-500 text-sm">({details.rate} Ratings)</p>
            <Star className="fill-yellow-400" />
            <Star className="fill-yellow-400" />
            <Star className="fill-yellow-400" />
            <Star className="fill-yellow-400" />
            <Star className="fill-yellow-400" />
          </div>
        </div>
        <p className="text-green font-semibold text-2xl py-4">
          {details.price} EGP
        </p>
        <Button className="text-white bg-green px-14 py-6 text-2xl border rounded-lg ">
          Buy Now
        </Button>
      </div>
      <div className="">
        <Button
          onClick={() => toggleShowLesson()}
          variant="outline"
          className="text-xl font-semibold border border-blue rounded-lg px-7 py-3 my-10"
        >
          Content
        </Button>
        {showLesson &&
          details.content?.map((lesson, index) => (
            <div
              key={lesson.id}
              className="border px-5 py-3 my-3 rounded-lg w-fit flex items-center gap-2 text-xl font-medium"
            >
              <div className="border rounded-lg p-3 ">
                <BiRightArrow />
              </div>
              <p>
                Lesson {index + 1}: {lesson.title}
              </p>
            </div>
          ))}
      </div>
      <div
        ref={reviewsAnim.ref}
        className={`animate-hidden ${reviewsAnim.animation} ${
          reviewsAnim.isVisible ? "show" : ""
        } grid gap-5 pt-10`}
      >
        {details.reviews?.map((review) => (
          <ReviewCard key={review.id} reviewData={review} />
        ))}
      </div>
    </div>
  );
}
