import type { courseDetails } from "@/types/Sylvia/types";
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";

export default function CartCourses({ courseDetails }: { courseDetails: courseDetails }) {

    const instructorName = "sylvia yousif"; // from course data
    const ratingCount = 250;
    const rating = 4;
    return (
        <>
            <article className="rounded-2xl flex items-center max-sm:flex-col max-sm:items-center">
                <img
                    src={courseDetails.image}
                    alt="course cover photo"
                    className="rounded-[8px] w-[20%] max-md:w-[40%] max-sm:w-[80%] object-cover object-top mb-4 cursor-pointer"
                />
                <div className="w-[70%] flex flex-col max-sm:w-full gap-2 p-4 rounded-[15px]">
                    <div className="flex justify-between">
                        <p className="font-semibold text-gray-900 text-base md:text-lg capitalize cursor-pointer">
                            {courseDetails.title}
                        </p>
                        <p className="font-semibold text-lg lg:text-xl text-green-600">
                            {courseDetails.price} EGP
                        </p>
                    </div>
                    <p className="text-sm">
                        By <span>{instructorName}</span>
                    </p>
                    <div className="flex gap-2 items-center flex-wrap">
                        <p className="text-warning-500">{rating}</p>
                        <Rating value={rating} readOnly>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <RatingButton key={index} className="text-warning-500" />
                            ))}
                        </Rating>
                        <p className="text-sm text-gray-800">({ratingCount} Ratings)</p>
                        <span className="flex-nowrap flex gap-2 text-[13px] text-black">
                            | {courseDetails.duration_hours} Total Hours. {courseDetails.lessons_count} Lectures. {courseDetails.level}
                        </span>
                    </div>

                    <div className="flex cursor-pointer">
                        <p className="text-sm text-blue-700">
                            Save for later
                        </p>
                        <span className="mx-1 text-gray-400"> | </span>
                        <p className="text-sm text-red-700">
                            Delete
                        </p>
                    </div>

                </div>
            </article >
        </>
    )
}