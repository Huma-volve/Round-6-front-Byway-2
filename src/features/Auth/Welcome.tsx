import { useNavigate } from "react-router";
import studentImg from "../../assets/images/student.jpg";
import instructorImg from "../../assets/images/instructor.jpg";
import adminImg from "../../assets/images/admin.jpg";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="font-semibold text-3xl mb-10 text-center">
        Select Your Role
      </h1>
      <div className="flex flex-col md:flex-row gap-6 justify-around py-1 mx-auto">
        <button
          onClick={() => {
            navigate("/register", { state: { role: "student" } });
          }}
          className="mx-auto w-3xs h-40 md:w-1/4 md:h-60 shadow-md rounded-lg flex justify-center items-center bg-cover font-bold text-xl tracking-wide relative text-white bg-top md:bg-center group"
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
          onClick={() => {
            navigate("/register", { state: { role: "instructor" } });
          }}
          className="mx-auto w-3xs h-40 md:w-1/4 md:h-60 shadow-md rounded-lg flex justify-center items-center bg-cover font-bold text-xl tracking-wide relative  text-white group"
          style={{
            backgroundImage: `url(${instructorImg})`,
          }}
        >
          <span className="absolute inset-0 bg-black/40 rounded-lg transition duration-300 group-hover:bg-black/75"></span>
          <span className="relative z-10 transition duration-300 group-hover:scale-110 group-hover:tracking-wider">
            Instructor
          </span>
        </button>
        <button
          onClick={() => {
            navigate("/register", { state: { role: "admin" } });
          }}
          className="mx-auto w-3xs h-40 md:w-1/4 md:h-60 shadow-md rounded-lg flex justify-center items-center bg-cover bg-center font-bold text-xl tracking-wide relative  text-white group"
          style={{
            backgroundImage: `url(${adminImg})`,
          }}
        >
          <span className="absolute inset-0 bg-black/40 rounded-lg transition duration-300 group-hover:bg-black/75"></span>
          <span className="relative z-10 transition duration-300 group-hover:scale-110 group-hover:tracking-wider">
            Admin
          </span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
