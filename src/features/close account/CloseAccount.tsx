import {
  useFetchCloseAccount,
  useFetchCloseAccountStatus,
} from "@/hooks/profile/learner-profile";
import { useState } from "react";
import { toast } from "sonner";

const CloseAccount = () => {
  const [password, setPassword] = useState("");
  const closeAccountMutation = useFetchCloseAccount();
  const { data: statusData } = useFetchCloseAccountStatus();
  console.log("Account status data:", statusData?.data);

  const handleCloseAccount = () => {
    if (!password) {
      toast.error("Please enter your password");
      return;
    }

    closeAccountMutation.mutate(password, {
      onSuccess: (res) => {
        toast.success(res.message || "Account closed successfully");
      },
      onError: (err: unknown) => {
        interface ErrorResponse {
          response?: {
            data?: {
              message?: string;
            };
          };
        }
        const error = err as ErrorResponse;
        const errorMessage =
          error.response?.data?.message || "Error closing account";
        toast.error(errorMessage);
      },
    });
  };

  if (
    closeAccountMutation.status === "success" ||
    statusData?.data?.data?.status === "pending_closure"
  ) {
    return (
      <div className="w-[100%] lg:w-[50%] h-[60dvh] flex flex-col items-center justify-center mx-auto text-center">
        <p className="text-secondary font-400">
          Your account closure request has been submitted. The account will be
          closed within 14 days.
        </p>
      </div>
    );
  }

  return (
    <div className="w-[100%] lg:w-[50%] h-[100dvh] flex flex-col items-center justify-center mx-auto text-center">
      <h1 className="font-bold text-[30px]">Close Account</h1>
      <p className="text-secondaryDark font-400">
        Close your account permanently.
      </p>

      <h4 className="font-medium m-4 lg:text-[17px]">
        <span className="text-danger text-[24px] pr-2">Warning:</span>
        This action is permanent and cannot be undone.
      </h4>

      <h4 className="font-medium lg:text-[17px] w-[80%] mx-auto my-4">
        All your data will be deleted after closure.
      </h4>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        className="border border-gray-300 rounded-md px-4 py-2 my-4 w-[80%]"
      />

      <button
        onClick={handleCloseAccount}
        disabled={closeAccountMutation.status === "pending"}
        className="bg-danger text-white px-6 py-2 rounded-md font-bold hover:opacity-[.8] transition-colors duration-300"
      >
        {closeAccountMutation.status === "pending"
          ? "Processing..."
          : "Confirm"}
      </button>
    </div>
  );
};

export default CloseAccount;
