import CourseCard from "@/components/shared/CourseCard";
import CourseCardSkeleton from "@/components/shared/CourseCardSkeleton";
import ReviewCard from "@/components/shared/ReviewCard";
import type { Course, Review } from "@/types/types";

const data: Course = {
  id: 52,
  title: "test tilte 2",
  category: "Recusandae",
  status: "draft",
  price: "99.00",
  compare_price: "149.00",
  level: "intermediate",
  lessons_count: 0,
  image:
    "https://res.cloudinary.com/dc8lgzgfn/image/upload/v1757950464/courses/52/cover/xLev37WilIQLWssb55gAYS20gDXP8USypYS6VG4w.jpg",
  created_at: "2025-09-15",
};

const review: Review = {
  id: 120,
  course_title: "Animi omnis esse non et dolorem.",
  rating: 3,
  comment: "Voluptate dolor enim cumque recusandae sunt ex iure numquam.",
  student_name: "Angel Hahn",
  created_at: "2025-09-16",
};

const InstructorPage = () => {
  return (
    <div>
      <ReviewCard reviewData={review} />
      <CourseCard courseData={data} />
      <CourseCardSkeleton />
    </div>
  );
};

export default InstructorPage;
