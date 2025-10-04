import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router";

export default function Setting() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto mt-[15%]">
      <div className="flex gap-100 items-center text-2xl">
        <p>Payment Method</p>
        <button onClick={() => navigate("/student/setting/payment-methods")}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
