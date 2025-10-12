
import type { courseDetails } from "@/types/Sylvia/types"
import CartCourses from "../../components/Sylvia/CartCourses"
import CartDetails from "../../components/Sylvia/CartDetails"
export default function ShoppingCart() {

    const courseDetailsData: courseDetails = {
        id: 11,
        instructor_id: 133,
        category_id: null,
        title: "Data Science",
        description: "test description test description test description test description",
        price: "99.00",
        compare_price: "149.00",
        image: "https://res.cloudinary.com/dc8lgzgfn/image/upload/v1758098544/courses/11/cover/PWLzjbhXzSaaIEW8I9mwLgVU2hzMAJYPLC0ncPzk.png",
        cover_public_id: "courses/11/cover/PWLzjbhXzSaaIEW8I9mwLgVU2hzMAJYPLC0ncPzk",
        lessons_count: 0,
        level: "intermediate",
        duration_hours: 22,
        total_minutes: 1320,
        video_provider: null,
        status: "draft",
        created_at: "2025-09-17T08:42:24.000000Z",
        updated_at: "2025-09-17T08:42:25.000000Z"
    }


    return (
        <div className="mx-auto my-[100px] flex min-h-[100vh] max-md:flex-col max-md:items-centner ">
            <div className="w-[80%] max-md:w-full">
                <CartCourses courseDetails={courseDetailsData} />
            </div>
            <div className="w-[20%] max-md:w-full">
                <CartDetails courseDetails={courseDetailsData} />
            </div>

        </div>
    )
}