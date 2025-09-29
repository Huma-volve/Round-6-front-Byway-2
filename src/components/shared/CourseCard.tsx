import type { Course } from "@/types/types";
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";

const courseCard = ({ courseData }: { courseData: Course }) => {
  // TODO get name from context (auth or profile)
  const instructorName = "Nada Wael";
  //  TODO fetch reviews count of that course id from API
  const ratingCount = 250;
  //  TODO fetch rating of that course id from API
  const rating = 4;

  return (
    <article className="rounded-2xl p-4 border-[1px] border-gray-border hover:border-gray-900  hover:bg-gray-50 transition duration-300 max-w-[298px]">
      <img
        src={courseData.image}
        alt="course cover photo"
        className="rounded-[8px] h-[139px] w-full object-cover object-top mb-4"
      />
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-gray-900 text-base md:text-lg capitalize">
          {courseData.title}
        </p>
        <p className="text-sm">
          By <span>{instructorName}</span>
        </p>
        <div className="flex gap-2 items-center flex-wrap">
          <Rating value={rating} readOnly>
            {Array.from({ length: 5 }).map((_, index) => (
              <RatingButton key={index} className="text-warning-500" />
            ))}
          </Rating>
          <p className="text-sm font-semibold">({ratingCount} Ratings)</p>
        </div>
        <p className="flex-wrap flex gap-2 text-sm text-gray-700">
          {courseData.lessons_count} Lectures. {courseData.level}
        </p>
        <p className="font-semibold text-xl text-gray-900">
          {courseData.price} EGP
        </p>
      </div>
    </article>
  );
};

export default courseCard;
