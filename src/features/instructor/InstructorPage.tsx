import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Avatar,
  CourseCard,
  CourseCardSkeleton,
  ReviewCard,
  ReviewCardSkeleton,
} from "@/components/shared";
import type { Course, RatingStats, Review } from "@/types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { calculateRatingStats } from "@/lib/utils";
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";
import { FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";

// TODO replace these with dynamic data from the API
const coursesList: Course[] = [
  {
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
  },
  {
    id: 53,
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
  },
  {
    id: 54,
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
  },
  {
    id: 55,
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
  },
  {
    id: 56,
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
  },
  {
    id: 57,
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
  },
];

const reviewsList: Review[] = [
  {
    id: 120,
    course_title: "Animi omnis esse non et dolorem.",
    rating: 3,
    comment: "Voluptate dolor enim cumque recusandae sunt ex iure numquam.",
    student_name: "Angel Hahn",
    created_at: "2025-09-16",
  },
  {
    id: 125,
    course_title: "Animi omnis esse non et dolorem.",
    rating: 2,
    comment: "Ad minus aut nihil voluptas dolore sit dolor.",
    student_name: "Jarret Wilkinson",
    created_at: "2025-09-16",
  },
  {
    id: 141,
    course_title: "Animi omnis esse non et dolorem.",
    rating: 2,
    comment: "Inventore aut architecto voluptas voluptatem.",
    student_name: "Bella Heaney",
    created_at: "2025-09-16",
  },
  {
    id: 152,
    course_title: "Animi omnis esse non et dolorem.",
    rating: 5,
    comment: "Necessitatibus impedit omnis perspiciatis.",
    student_name: "Annabelle Dooley",
    created_at: "2025-09-16",
  },
  {
    id: 158,
    course_title: "Animi omnis esse non et dolorem.",
    rating: 2,
    comment: "Sed quo accusamus et.",
    student_name: "Granville Beier",
    created_at: "2025-09-16",
  },
  {
    id: 180,
    course_title: "Animi omnis esse non et dolorem.",
    rating: 5,
    comment: "Aut doloribus eos aspernatur nihil distinctio unde.",
    student_name: "Valerie Hauck",
    created_at: "2025-09-16",
  },
  {
    id: 186,
    course_title: "Animi omnis esse non et dolorem.",
    rating: 1,
    comment: "Et maxime neque tenetur voluptatem et ut rerum.",
    student_name: "Oliver Franecki",
    created_at: "2025-09-16",
  },
  {
    id: 206,
    course_title: "Animi omnis esse non et dolorem.",
    rating: 1,
    comment: "Totam voluptates velit culpa pariatur sed expedita ut.",
    student_name: "Krystal Huels",
    created_at: "2025-09-16",
  },
  {
    id: 209,
    course_title: "Animi omnis esse non et dolorem.",
    rating: 5,
    comment: "Vero incidunt dolor nemo ipsum iste dolorum consectetur.",
    student_name: "Laron O'Keefe",
    created_at: "2025-09-16",
  },
  {
    id: 210,
    course_title: "Animi omnis esse non et dolorem.",
    rating: 3,
    comment: "Reprehenderit est rem iure omnis est vel.",
    student_name: "Twila Tillman",
    created_at: "2025-09-16",
  },
  {
    id: 212,
    course_title: "Animi omnis esse non et dolorem.",
    rating: 4,
    comment: "Soluta corporis pariatur aut est distinctio.",
    student_name: "Tom Stroman",
    created_at: "2025-09-16",
  },
  {
    id: 218,
    course_title: "Animi omnis esse non et dolorem.",
    rating: 2,
    comment: "Aliquid veniam explicabo ut consequatur.",
    student_name: "Nat Mraz",
    created_at: "2025-09-16",
  },
  {
    id: 85,
    course_title: "Animi omnis esse non et dolorem.",
    rating: 5,
    comment: "Voluptatem deleniti repudiandae temporibus voluptatibus.",
    student_name: "Antonetta Littel",
    created_at: "2025-09-16",
  },
  {
    id: 94,
    course_title: "Animi omnis esse non et dolorem.",
    rating: 1,
    comment: "Facere repellat quasi sed et totam molestias.",
    student_name: "Garrett Ryan",
    created_at: "2025-09-16",
  },
  {
    id: 105,
    course_title: "Animi omnis esse non et dolorem.",
    rating: 5,
    comment: "Provident rerum nesciunt et alias.",
    student_name: "Pinkie Ritchie",
    created_at: "2025-09-16",
  },
  {
    id: 110,
    course_title: "Animi omnis esse non et dolorem.",
    rating: 2,
    comment: "Eum in itaque ut qui quia vel aut.",
    student_name: "Cheyenne Ankunding",
    created_at: "2025-09-16",
  },
  {
    id: 50,
    course_title: "Animi omnis esse non et dolorem.",
    rating: 5,
    comment: "Nihil quas non quisquam.",
    student_name: "Junior Bechtelar",
    created_at: "2025-09-16",
  },
  {
    id: 49,
    course_title: "Animi omnis esse non et dolorem.",
    rating: 2,
    comment: "Mollitia reprehenderit et animi nihil.",
    student_name: "Filiberto Considine",
    created_at: "2025-09-16",
  },
  {
    id: 6,
    course_title: "Animi omnis esse non et dolorem.",
    rating: 4,
    comment: "Deleniti aut totam sit a et qui sunt.",
    student_name: "Briana Beatty",
    created_at: "2025-09-16",
  },
  {
    id: 1,
    course_title: "Animi omnis esse non et dolorem.",
    rating: 5,
    comment: "Doloribus eum est at aut et cum harum voluptatem.",
    student_name: "Letitia Dickens",
    created_at: "2025-09-16",
  },
];

const InstructorPage = () => {
  const [isCoursesLoading, setIsCoursesLoading] = useState(false);
  const [isReviewsLoading, setIsReviewsLoading] = useState(false);
  const [ratingStats, setRatingStats] = useState<RatingStats | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  // Slice reviews to show only the visible ones
  const visibleReviews = reviewsList.slice(0, visibleCount);
  // Check if there are hidden reviews
  const hasMore = visibleCount < reviewsList.length;
  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  // TODO: get user data from context
  const instructorUser = {
    name: "nada wael",
    headline: "web developer",
    totalStudents: 0,
    totalReviews: 0,
    links: {
      website: "",
      twitter: "",
      youtube: "",
    },
  };

  useEffect(() => {
    const stats = calculateRatingStats(reviewsList);
    setRatingStats(stats);
  }, []);

  return (
    <div className="mt-40">
      {/* The header */}
      <header className="flex flex-col md:flex-row justify-between gap-16 mt-10 mb-24">
        <div className="text-gray-700 text-2xl font-medium">
          <h1 className="mb-2">Instructor</h1>
          <p className="text-[32px] font-semibold capitalize">
            {instructorUser.name}
          </p>
          <p className="">
            {instructorUser?.headline ? instructorUser?.headline : "-"}
          </p>
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-16 mt-12 text-2xl font-semibold">
            <div>
              <p className="text-green">Total Students</p>
              <p>{instructorUser.totalStudents}</p>
            </div>
            <div>
              <p className="text-red">Reviews</p>
              <p>{instructorUser.totalReviews}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center max-w-2xs">
          <Avatar color="blue" username={instructorUser.name} />
          <a
            href={instructorUser.links.website}
            className="w-full transition duration-300 text-blue-website mt-11 p-2 text-center rounded-[8px] border cursor-pointer border-gray-900 bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
          >
            Website
          </a>
          <a
            href={instructorUser.links.twitter}
            className="w-full transition duration-300 text-blue p-2 text-center rounded-[8px] border cursor-pointer border-gray-900 bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
          >
            Twitter
          </a>
          <a
            href={instructorUser.links.youtube}
            className="w-full transition duration-300 text-red p-2 text-center rounded-[8px] border cursor-pointer border-gray-900 bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
          >
            Youtube
          </a>
        </div>
      </header>

      {/* Courses */}
      <section className="mb-30 [clip-path:inset(0px_-60%_-5px_-5px)]">
        <h2 className="text-xl md:text-2xl mb-3 text-blue">Your courses</h2>
        {isCoursesLoading ? (
          <ul className="flex gap-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <li key={idx} className="shrink-0">
                <CourseCardSkeleton />
              </li>
            ))}
          </ul>
        ) : coursesList.length == 0 ? (
          <p className="font-medium text-base text-gray-placeholder py-4">
            No courses yet
          </p>
        ) : (
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={16}
            className="!overflow-visible"
          >
            {coursesList.map((courseObj) => (
              <SwiperSlide key={courseObj.id} className="!w-fit">
                <Link to={`/instructors/courses/${courseObj.id}/lessons`}>
                  <CourseCard courseData={courseObj} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>

      {/* Reviews */}
      <section className="mb-30">
        <h2 className="text-xl md:text-2xl mb-3 text-blue">Learner Reviews</h2>
        <div className="flex md:flex-row flex-col gap-8 lg:gap-16">
          <div>
            {ratingStats ? (
              <>
                <p className="text-xl font-semibold flex gap-2 items-center mb-4">
                  <FaStar className="text-warning-500 h-5 w-5" />
                  {ratingStats.averageRating}
                  <span className="pl-2 font-normal text-sm">
                    {ratingStats.totalRatings} reviews
                  </span>
                </p>
                <div className="flex items-center text-sm gap-2">
                  <Rating value={5} readOnly>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <RatingButton key={index} className="text-warning-500" />
                    ))}
                  </Rating>
                  <span>{ratingStats.percentages[5]} %</span>
                </div>
                <div className="flex items-center text-sm gap-2">
                  <Rating value={4} readOnly>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <RatingButton key={index} className="text-warning-500" />
                    ))}
                  </Rating>{" "}
                  <span>{ratingStats.percentages[4]} %</span>
                </div>
                <div className="flex items-center text-sm gap-2">
                  <Rating value={3} readOnly>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <RatingButton key={index} className="text-warning-500" />
                    ))}
                  </Rating>{" "}
                  <span>{ratingStats.percentages[3]} %</span>
                </div>
                <div className="flex items-center text-sm gap-2">
                  <Rating value={2} readOnly>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <RatingButton key={index} className="text-warning-500" />
                    ))}
                  </Rating>{" "}
                  <span>{ratingStats.percentages[2]} %</span>
                </div>
                <div className="flex items-center text-sm gap-2">
                  <Rating value={1} readOnly>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <RatingButton key={index} className="text-warning-500" />
                    ))}
                  </Rating>{" "}
                  <span>{ratingStats.percentages[1]} %</span>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div>
            {isReviewsLoading ? (
              <ul className="flex flex-col gap-4">
                {Array.from({ length: 2 }).map((_, idx) => (
                  <li key={idx}>
                    <ReviewCardSkeleton />
                  </li>
                ))}
              </ul>
            ) : reviewsList.length == 0 ? (
              <p className="font-medium text-base text-gray-placeholder py-1">
                No reviews yet
              </p>
            ) : (
              <>
                <ul className="flex flex-col gap-4">
                  {visibleReviews.map((reviewObj) => (
                    <li key={reviewObj.id}>
                      <ReviewCard reviewData={reviewObj} />
                    </li>
                  ))}
                </ul>
                {hasMore && (
                  <Button
                    variant="outline"
                    onClick={handleViewMore}
                    className="mt-4 px-6 py-3 transition"
                  >
                    View more reviews
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstructorPage;
