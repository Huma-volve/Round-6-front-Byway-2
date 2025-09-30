import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Star } from "lucide-react";
import image from "../../../assets/images/java.png"

const courses = [
  {
    id: 1,
    name: "Web Development",
    description: "Learn HTML, CSS, JavaScript, and more.",
  },
  {
    id: 2,
    name: "Data Science",
    description: "Master Python, R, and machine learning.",
  },
  {
    id: 3,
    name: "Graphic Design",
    description: "Create stunning visuals with Adobe tools.",
  },
  {
    id: 4,
    name: "Cybersecurity",
    description: "Protect systems with ethical hacking skills.",
  },
   {
    id: 5,
    name: "Cybersecurity",
    description: "Protect systems with ethical hacking skills.",
  },
   {
    id: 6,
    name: "Cybersecurity",
    description: "Protect systems with ethical hacking skills.",
  },
   {
    id: 7,
    name: "Cybersecurity",
    description: "Protect systems with ethical hacking skills.",
  },
   {
    id: 8,
    name: "Cybersecurity",
    description: "Protect systems with ethical hacking skills.",
  },
   {
    id: 9,
    name: "Cybersecurity",
    description: "Protect systems with ethical hacking skills.",
  },
];

export default function Courses() {
  return (
    <div className="container mx-auto px-10 sm:p-0">
      <div className=" flex justify-between items-center pb-6">
        <h3 className="text-xl font-semibold py-5">All courses</h3>
        <Link to="/category" className="text-blue-500">
          see all
        </Link>
      </div>
      <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10">
        {courses.map((course) => (
          <div className="card">
            <Link to="student/StudentCourseDetails" className="rounded-lg">
              <img src={course.image || image} alt={course.name} className="w-full pb-3" />
            </Link>
            <div className="border border-gray-[#E2E8F0]  p-4 rounded-2xl shadow shadow-blue-500/12 grid gap-0.5">
              <h3 className="text-gray-900 font-semibold text-lg">
                {course.name}
              </h3>
              <p className="text-gray-700 text-sm">
                by {course.instructorName}
              </p>
              <div className="flex text-yellow-400 text-xs fill-yellow-400 items-center">
                <Star className="fill-yellow-400" />
                <Star className="fill-yellow-400" />
                <Star className="fill-yellow-400" />
                <Star className="fill-yellow-400" />
                <Star className="fill-yellow-400" />
                <p className="text-gray-500 text-sm">(1200 Ratings)</p>
              </div>
              <p className="text-sm text-gray-700">{`${course.hours}Total Hours . ${course.lectures}Lectures . ${course.level}`}</p>
              <div className="flex justify-between items-center">
                <p>{course.price} EGP</p>
                <Button className="bg-green hover:bg-green-600 text-white rounded-md px-3 py-2">
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}