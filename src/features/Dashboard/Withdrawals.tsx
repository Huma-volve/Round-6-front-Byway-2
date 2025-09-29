import { Info } from "@/components/shared";
import { useParams } from "react-router";

const Withdrawals = () => {
  const param = useParams();
  const transactionId = param.id;
  return (
    <div className="my-18">
      <h1 className="font-medium text-3xl text-blue mb-8">
        Withdrawal Details
      </h1>
      <div className="flex flex-col gap-4">
        <Info>Instructor: Nour Ali</Info>
        <Info>Request Date: 28 Jul 2025</Info>
        <Info>Amount: $150.00</Info>
        <Info>Method: Bank Transfer</Info>
        <Info>Bank Name: CIB</Info>
        <Info>Account Number: **** 1423</Info>
        <Info>
          Status: <span className="text-red">Pending</span>
        </Info>
      </div>
    </div>
  );
};

export default Withdrawals;
