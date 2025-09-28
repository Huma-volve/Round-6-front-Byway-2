import { Button } from "@/components/ui/button";
import { Link } from "react-router";

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
];

export default function BrowseCourses() {
  return (
    <div className="container mx-auto px-20">
      <div className=" flex justify-between items-center">
        <h3 className="text-xl font-semibold py-5">Top Categories</h3>
      <Link to="/category" className="text-blue-500">
        see all
      </Link>
      </div>
      <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {courses.map((course) => (
          <div className="card">
            <Link to="/courseDetails" className="rounded-xl">
              <img src={course.image} alt="course paner" />
            </Link>
            <div className="border border-gray-[#E2E8F0]  p-5 rounded-2xl shadow">
              <h3 className="text-gray-900 font-semibold text-lg">
                {course.name}
              </h3>
              <p className="text-gray-700 text-sm">{course.instructorName}</p>
              <p className="text-sm text-gray-700">{`${course.hours}Total Hours . ${course.lectures}Lectures . ${course.level}`}</p>
              <div className="flex justify-between items-center">
                <p>{course.price} EGP</p>
                <Button className="bg-green text-white rounded-md px-3 py-2">
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
