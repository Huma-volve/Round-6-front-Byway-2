import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import otpimg from "@/assets/images/otp.png";
import { Button } from "@/components/ui/button";

export default function Otp() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [error, setError] = useState<string>("");
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  const handleChange = (val: string, index: number) => {
    const value = val.replace(/\D/g, "");
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleContinue = () => {
    const code = otp.join("");

    if (code.length < otp.length || otp.includes("")) {
      setError("Please enter the full 6-digit code");
      return;
    }

    setError("");
    console.log("OTP entered:", code);
    navigate("/reset-password");
  };

  return (
    <div className="grid grid-cols-2 items-center gap-6 mb-30 mt-10">
      <div className="col-span-2 md:col-span-1 mx-auto">
        <div className="my-15 space-y-5">
          <h1 className="text-3xl font-semibold ml-4">Enter OTP</h1>
          <p className="text-sm text-gray-400 w-65">
            We have just sent you 6 digit code via your email{" "}
            <span className="font-bold text-gray-600">example@gmail.com</span>
          </p>
        </div>

        <div className="flex space-x-3 mb-6">
          {otp.map((digit: string, index: number) => (
            <input
              key={index}
              inputMode="numeric"
              pattern="\d*"
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              ref={(el) => {
                inputsRef.current[index] = el;
              }}
              className="w-12 h-12 text-center text-lg border border-gray-300 rounded-2xl bg-[#fbfbfb] focus:outline-none focus:ring-1 focus:ring-blue-500 text-blue-700 font-bold"
            />
          ))}
        </div>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <Button
          type="button"
          onClick={handleContinue}
          className="bg-green text-white text-sm font-medium py-3 px-6 w-full rounded-lg"
        >
          Continue
        </Button>

        <p className="text-sm text-gray-500 mt-4">
          Didn’t receive code?{" "}
          <Link
            to="/otp"
            onClick={() => window.location.reload()}
            className="text-blue-700 hover:underline"
          >
            Resend Code
          </Link>
        </p>
      </div>

      <img
        src={otpimg}
        alt="otp"
        className="col-span-1 rounded-xl hidden md:block h-full w-full object-cover"
      />
    </div>
  );
}
