import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ChevronRight, Filter, Plus } from "lucide-react";
import { Link } from "react-router";
import cardCourses from "../../../assets/images/cardCourses.png";
import type { Course } from "@/types/Mohamed/profile";

const courses: Course[] = [
  {
    id: "1",
    title: "UI/UX Design",
    author: "Omnya Ali",
    rating: 5,
    totalRatings: 1200,
    image: "/api/placeholder/300/200",
  },
];

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
};

// Course card component
const CourseCard = ({ course }: { course: Course }) => {
  return (
    <Link to={"/courseDetails"}>
      <div className="flex flex-col gap-3 overflow-hidden">
        <div>
          <img src={cardCourses} alt={course.title} className="rounded-lg" />
        </div>

        {/* Course Content */}
        <div className="bg-white p-2 rounded-2xl border border-gray-200 shadow-[0_0_8px_0_rgba(59,130,246,12%)]">
          <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
          <p className="text-xs text-gray-700 mb-2">By {course.author}</p>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-placeholder">
              ({course.totalRatings} Ratings)
            </span>
            <StarRating rating={course.rating} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export const MyCourses = () => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-sm text-gray-900 mb-6">
          <Link to={"/"}>Home</Link>
          <span className="mx-2">
            <ChevronRight className="w-4 h-4 text-gray-300" />
          </span>
          <Link to={"/profile"}>Profile</Link>
          <span className="mx-2">
            <ChevronRight className="w-4 h-4 text-gray-300" />
          </span>
          <span className="text-blue-600 font-medium">My Courses</span>
        </nav>

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <h1 className="text-xl font-semibold text-gray-900">
              Courses <span>({courses.length})</span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Sort By */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort By</span>
              <Select defaultValue="relevance">
                <SelectTrigger className="w-32 data-[size=default]:h-12 ">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Filter Button */}
            <Button variant="outline" className="flex items-center gap-2 h-12">
              <Filter className="w-4 h-4" />
              Filter
            </Button>

            {/* Add Course Button */}
            <Link to={"/addCourses"}>
              <Button className="flex items-center gap-2 h-12 cursor-pointer hover:bg-transparent hover:text-gray-900 transition duration-200 border">
                <Plus className="w-4 h-4" />
                Add Course
              </Button>
            </Link>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Empty State - Show when no courses */}
        {courses.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No courses yet
            </h3>
            <p className="text-gray-500 mb-6">
              Get started by creating your first course
            </p>
            <Button className="flex items-center gap-2 mx-auto">
              <Plus className="w-4 h-4" />
              Create Your First Course
            </Button>
          </div>
        )}

        {/* Pagination - Only show if there are multiple pages */}
        {courses.length > 10 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
};
