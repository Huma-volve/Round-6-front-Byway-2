import { Info } from "@/components/shared";
import { useParams } from "react-router";

const Payments = () => {
  const param = useParams();
  const transactionId = param.id;
  return (
    <div className="my-18">
      <h1 className="font-medium text-3xl text-blue mb-8">Payment Details</h1>
      <div className="flex flex-col gap-4">
        <Info>Student: Salma Ahmed</Info>
        <Info>Payment Date : 27 Jul 2025</Info>
        <Info>Course : UI/UX Design Basics </Info>
        <Info>Method : Visa</Info>
        <Info>Amount : $95.00</Info>
        <Info>
          Status: <span className="text-green">Completed</span>
        </Info>
      </div>
    </div>
  );
};

export default Payments;
