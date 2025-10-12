import { Info } from "@/components/shared";
import { useParams } from "react-router";

const review = {
  id: "2",
  courseName: "FrontEnd",
  reviewer: "sara",
  rating: 1,
  commint: "The course was really helpful..",
  status: "reported",
  date: "22 jul 2024",
};

export default function ViewFullReview() {
  const params = useParams();
  console.log(params);
  return (
    <div className="container mx-auto px-5 sm:px-0">
      <h1 className="text-[#587DBD] font-medium text-3xl mb-5">Full Review:</h1>
      <div className="grid gap-5">
        <Info>Course : {review.courseName}</Info>
        <Info>Reviewer : {review.reviewer}</Info>
        <Info>Date : {review.date}</Info>
        <Info>Commint :{review.commint}</Info>
      </div>
    </div>
  );
}
