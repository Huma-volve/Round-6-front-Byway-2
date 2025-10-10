import { useNavigate } from "react-router";
import studentImg from "../../assets/images/student.jpg";
import instructorImg from "../../assets/images/instructor.jpg";
import { useObserver } from "@/hooks/useObserver";
const Welcome = () => {
  const navigate = useNavigate();
  // Basic animation
  const titleAnim = useObserver("fade-up");
  const studentAnim = useObserver("slide-right");
  const instructorAnim = useObserver("slide-left");

  return (
    <div className="mt-40 mb-28">
      <h1
        ref={titleAnim.ref}
        className={`animate-hidden ${titleAnim.animation} ${
          titleAnim.isVisible ? "show" : ""
        } font-semibold text-3xl mb-10 text-center`}
      >
        Select Your Role
      </h1>
      <div className="flex flex-col md:flex-row gap-6 justify-center py-1 mx-auto w-fit">
        <button
          ref={studentAnim.ref}
          onClick={() => {
            navigate("/register", { state: { role: "student" } });
          }}
          className={`animate-hidden ${studentAnim.animation} ${
            studentAnim.isVisible ? "show" : ""
          } mx-auto w-3xs h-40  shadow-md rounded-lg flex justify-center items-center bg-cover font-bold text-xl tracking-wide relative text-white bg-top group`}
          style={{
            backgroundImage: `url(${studentImg})`,
          }}
        >
          <span className="absolute inset-0 bg-black/40 rounded-lg transition duration-300 group-hover:bg-black/75"></span>
          <span className="relative z-10 transition duration-300 group-hover:scale-110 group-hover:tracking-wider">
            Student
          </span>
        </button>
        <button
          ref={instructorAnim.ref}
          onClick={() => {
            navigate("/register", { state: { role: "instructor" } });
          }}
          className={`animate-hidden ${instructorAnim.animation} ${
            instructorAnim.isVisible ? "show" : ""
          } mx-auto w-3xs h-40  shadow-md rounded-lg flex justify-center items-center bg-cover font-bold text-xl tracking-wide relative  text-white group`}
          style={{
            backgroundImage: `url(${instructorImg})`,
          }}
        >
          <span className="absolute inset-0 bg-black/40 rounded-lg transition duration-300 group-hover:bg-black/75"></span>
          <span className="relative z-10 transition duration-300 group-hover:scale-110 group-hover:tracking-wider">
            Instructor
          </span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
