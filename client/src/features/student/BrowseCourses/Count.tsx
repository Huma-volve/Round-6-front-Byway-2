import { useObserver } from "@/hooks/useObserver";
import { useCountUpOnView } from "@/hooks/useCountUpOnView";

export default function Count() {
  // Basic animation
  const sectionAnim = useObserver("fade-up");
  const courses = useCountUpOnView(250);
  const students = useCountUpOnView(1000);
  const reviews = useCountUpOnView(15);
  const teachers = useCountUpOnView(2500);

  return (
    <div
      ref={sectionAnim.ref}
      className={`animate-hidden ${sectionAnim.animation} ${
        sectionAnim.isVisible ? "show" : ""
      } container mx-auto px-10 sm:p-0 my-30 grid grid-cols-2 md:grid-cols-4`}
    >
      <div
        ref={courses.ref}
        className="p-4 border-r-4 border-b-4 md:border-b-0 border-gray-border text-center grow"
      >
        <span className="font-semibold text-2xl text-gray-900">
          {courses.count}+
        </span>
        <p className="text-sm text-gray-900">Number of courses</p>
      </div>
      <div
        ref={students.ref}
        className="p-4 border-r-0 border-b-4 md:border-b-0 md:border-r-4 border-gray-border text-center grow"
      >
        <span className="font-semibold text-2xl text-gray-900">
          {students.count}+
        </span>
        <p className="text-sm text-gray-900">Number of students</p>
      </div>
      <div
        ref={reviews.ref}
        className="p-4 border-r-4 border-gray-border text-center grow"
      >
        <span className="font-semibold text-2xl text-gray-900">
          {reviews.count}+
        </span>
        <p className="text-sm text-gray-900">number of reviews</p>
      </div>
      <div ref={teachers.ref} className="p-4  text-center grow">
        <span className="font-semibold text-2xl text-gray-900">
          {teachers.count}+
        </span>
        <p className="text-sm text-gray-900">Number of teachers</p>
      </div>
    </div>
  );
}
