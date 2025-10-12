import Courses from "./Courses";
import Count from "./Count";
import Categories from "./Categories";

export default function BrowseCourses() {
  return (
    <div className="mt-5">
      <Categories />
      <Count />
      <Courses />
    </div>
  );
}
