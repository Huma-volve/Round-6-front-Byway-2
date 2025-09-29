import EnrolledCourseComponent from "@/components/Sylvia/enrolledCourse";
import type { coursesList, enrolledCourse } from "@/types/Sylvia/types";
import courseImg from "../../../src/assets/images/course1.png";

const courseData: enrolledCourse = {
    id: 52,
    title: "Course title",
    category: "Recusandae",
    status: "draft",
    price: "99.00",
    compare_price: "149.00",
    totalHours: 22,
    level: "intermediate",
    lessons_count: 0,
    image: courseImg,
    created_at: "2025-09-15",
};


const coursesData: coursesList = [courseData, courseData, courseData, courseData, courseData, courseData];

const EnrolledCourses = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-5 m-auto">
            {coursesData.map((course) => (
                <EnrolledCourseComponent
                    key={course.id}
                    enrolledCourse={course}
                />
            ))}
        </div>
    );
};


export default EnrolledCourses;