import avatar from "@/assets/images/admin.jpg";
import { CourseCard } from "@/components/shared";
import image from "@/assets/images/course-image.png";
import ReviewCard from "./../../components/shared/ReviewCard";
import BreadcrumbIns  from '@/components/shared/BreadcrumbIns';

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
    to:"/",
    navigateTO:"Browes Course",
    name:"Instractor details"

}


export default function StudentInstractordetails() {
  return (
    <div className="container mx-auto px-10 sm:p-0">
      <div className="pb-10 ps-5">
        <BreadcrumbIns  navigate={navigate}/>
      </div>
      <div className="flex items-center gap-4 ps-5 ">
        <img src={details.image || avatar} alt="" className="rounded-full w-20 h-20" />
        <p className="font-medium text-3xl md:max-w-1/2 lg:max-w-1/3 leading-[150%]">
          {details.name}-{details.followers}Million +Enrollments Worldwide
        </p>
      </div>
      <div className="flex text-center gap-32 py-14 ps-5">
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
      <div className="">
        <h2 className="font-semibold text-3xl pb-4">About me</h2>
        <p className="text-gray-800 text-2xl max-w-1/2 leading-[150%]">
          {details.description}
        </p>
      </div>
      <div className="py-14">
        <h2 className="font-semibold text-3xl pb-4">My Courses</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10">
          {details.courses?.map((course) => (
            <CourseCard key={course.id} courseData={course} />
          ))}
        </div>
      </div>

      <div className="grid gap-5 pt-10">
        {details.reviews?.map((review) => (
          <ReviewCard key={review.id} reviewData={review} />
        ))}
      </div>
    </div>
  );
}
