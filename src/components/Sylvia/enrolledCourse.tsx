import type { enrolledCourse } from "@/types/Sylvia/types";
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";
import { useNavigate } from "react-router-dom";

const enrolledCourseComponent = ({ enrolledCourse }: { enrolledCourse: enrolledCourse }) => {
    const instructorName = "sylvia yousif"; // from course data
    const ratingCount = 250;
    const rating = 4;


    const navigate = useNavigate();

    const handleBtnClick = () => {
        navigate('/student/enrolledCourseDetails');
    }



    return (
        <article className="rounded-2xl">
            <img
                src={enrolledCourse.image}
                alt="course cover photo"
                onClick={handleBtnClick}
                className="rounded-[8px] w-full object-cover object-top mb-4 cursor-pointer"
            />
            <div className="flex flex-col gap-2 border-gray-border border-[1px] p-4 rounded-[15px]">
                <p onClick={handleBtnClick} className="font-semibold text-gray-900 text-base md:text-lg capitalize cursor-pointer">
                    {enrolledCourse.title}
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
                <p className="flex-nowrap flex gap-2 text-[13px] text-gray-700">
                    {enrolledCourse.totalHours} Total Hours. {enrolledCourse.lessons_count} Lectures. {enrolledCourse.level}
                </p>
                <p className="font-semibold text-lg lg:text-xl text-gray-900">
                    {enrolledCourse.price} EGP
                </p>
            </div>
        </article >
    );
};

export default enrolledCourseComponent;
