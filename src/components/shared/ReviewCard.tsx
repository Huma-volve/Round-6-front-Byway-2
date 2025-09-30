import type { Review } from "@/types/types";
import avatar from "@/assets/icons/user.svg";
import { FaStar } from "react-icons/fa";
import { format } from "date-fns";
import { parseISO } from "date-fns";

const ReviewCard = ({ reviewData }: { reviewData: Review }) => {
  return (
    <div className="rounded-2xl p-4 lg:p-6 border border-gray-border">
      <div className="flex gap-4">
        <img
          src={avatar}
          alt="an avatar"
          className="h-16 w-16 rounded-full mb-4"
        />
        <div>
          <p className="font-semibold text-lg mb-2">
            {reviewData.student_name}
          </p>
          <div className="flex items-center gap-4">
            <p className="font-semibold text-lg flex gap-2 items-center">
              <FaStar className="h-5 w-5 text-warning-500" />
              {reviewData.rating}
            </p>
            <p className="text-sm text-gray-700">
              Reviewed on{" "}
              {format(parseISO(reviewData.created_at), "do MMMM, yyyy")}
            </p>
          </div>
        </div>
      </div>
      <p className="text-base text-gray-700">{reviewData.comment}</p>
    </div>
  );
};

export default ReviewCard;
