import { Avatar, CourseCard } from "@/components/shared";
import image from "@/assets/images/course-image.png";
import ReviewCard from "./../../components/shared/ReviewCard";
import BreadcrumbIns from "@/components/shared/BreadcrumbIns";
import { useObserver } from "@/hooks/useObserver";

const details = {
  id: 1,
  name: "ahmed ali",
  description:
    "Begin your journey in user interface and user experience design. You'll learn to design wireframes, user flows, and interactive prototypes using Figma.",

  students: 2000,
  followers: 2.5,
  price: "200",
  rate: "1200",
  image: "",
  reviews: [
    {
      id: 112,
      student_name: "basmala ",
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
      student_name: "ali ",
      rating: 4,
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur nihil aliquid quibusdam nulla id voluptatum ullam veritatis perferendis, harum explicabo fuga ipsam asperiores sapiente. Expedita omnis nihil sit reprehenderit eos.",
      course_title: "Front end",
      created_at: "2025-09-29T12:52:00Z",
    },
  ],

  courses: [
    {
      id: 1,
      title: "Front End",
      category: "frontend",
      status: "completed",
      price: "4000",
      compare_price: "3000",
      level: "beginer",
      lessons_count: 20,
      image: { image },
      created_at: "2025-09-29T12:52:00Z",
    },
    {
      id: 2,
      title: "Front End",
      category: "frontend",
      status: "completed",
      price: "4000",
      compare_price: "3000",
      level: "beginer",
      lessons_count: 20,
      image: { image },
      created_at: "2025-09-29T12:52:00Z",
    },
    {
      id: 3,
      title: "Front End",
      category: "frontend",
      status: "completed",
      price: "4000",
      compare_price: "3000",
      level: "beginer",
      lessons_count: 20,
      image: { image },
      created_at: "2025-09-29T12:52:00Z",
    },
  ],
};

const navigate = {
  to: "/",
  navigateTO: "Browes Course",
  name: "Instractor details",
};

export default function StudentInstractordetails() {
  // Basic animation
  const headerAnim = useObserver("fade-up");
  const statAnim = useObserver("fade-up");
  const aboutAnim = useObserver("fade-up");
  const coursesAnim = useObserver("fade-up");
  const reviewsAnim = useObserver("fade-up");

  return (
    <div className="container mx-auto sm:p-0">
      <div className="pb-10 ps-5">
        <BreadcrumbIns navigate={navigate} />
      </div>
      {/* header */}
      <div
        ref={headerAnim.ref}
        className={`animate-hidden ${headerAnim.animation} ${
          headerAnim.isVisible ? "show" : ""
        } flex flex-wrap items-center gap-6 ps-5`}
      >
        {details.image ? (
          <img
            src={details.image}
            alt="instructor's image"
            className="rounded-full w-20 h-20"
          />
        ) : (
          <Avatar username={details.name} color="gray" />
        )}

        <p className="font-medium text-2xl md:text-3xl leading-[150%]">
          {details.name} - {details.followers}Million+ Enrollments Worldwide
        </p>
      </div>
      {/* stat */}
      <div
        ref={statAnim.ref}
        className={`animate-hidden ${statAnim.animation} ${
          statAnim.isVisible ? "show" : ""
        } flex text-center gap-6 md:gap-32 py-14 ps-5`}
      >
        <div>
          <p className="font-semibold text-2xl text-gray-900">
            {details.students}+
          </p>
          <p className="text-gray-800">number of students</p>
        </div>

        <div>
          <p className="font-semibold text-2xl text-gray-900">
            {details.reviews.length}+
          </p>
          <p className="text-gray-800">number of reviews</p>
        </div>
      </div>
      {/* about */}
      <div
        ref={aboutAnim.ref}
        className={`animate-hidden ${aboutAnim.animation} ${
          aboutAnim.isVisible ? "show" : ""
        }`}
      >
        <h2 className="font-semibold text-3xl pb-4">About me</h2>
        <p className="text-gray-800 text-2xl max-w-[613px] leading-[150%]">
          {details.description}
        </p>
      </div>
      {/* courses */}
      <div
        ref={coursesAnim.ref}
        className={`animate-hidden ${coursesAnim.animation} ${
          coursesAnim.isVisible ? "show" : ""
        } py-14`}
      >
        <h2 className="font-semibold text-3xl pb-4">My Courses</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10">
          {details.courses?.map((course) => (
            <CourseCard key={course.id} courseData={course} />
          ))}
        </div>
      </div>
      {/* reviews */}
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
