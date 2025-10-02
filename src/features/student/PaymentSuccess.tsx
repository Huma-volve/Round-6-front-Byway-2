import success from "../../assets/images/success.png"
import rocket from "../../assets/images/rocket.png"
import { useNavigate } from "react-router-dom";


export default function PaymentSuccess() {

    const CourseDetails = { id: 1, title: "UI/UX", price: "300S" };

    const navigate = useNavigate();

    const NavigateToCourses = () => {
        navigate('/student/enrolledCourses');
    }

    return (
        <div className="items-center text-center mt-[100px] min-h-[100vh]">
            <img src={success} className="mx-auto mb-15" />
            <h1 className="font-semibold text-[#1C1C1E] text-3xl">You have successfuly subscribed to the course: {CourseDetails.title}</h1>
            <p className="font-medium text-[#727272] text-lg my-5">You Will Receive a confirmation email soon! </p>
            <div className="flex justify-center gap-3 cursor-pointer" onClick={NavigateToCourses}>
                <img src={rocket} />
                <p className=" font-bold"> Go to My Courses</p>
            </div>
        </div>
    );
}