import { Link } from "react-router-dom";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../../shared/ui/input-otp";
import HeaderEmailVerificationPage from "./ui/header-email-verification-page";

const EmailVerificationPage = () => {
  return (
    <main className="p-4">
      <HeaderEmailVerificationPage />
      <h1 className="text-4xl mt-5 font-bold">Email verification</h1>
      <p className="text-md mt-2 text-gray-400 font-semibold">
        Enter the verification code we send you on: Alberts******@gmail.com|
      </p>

      <form className="mt-5">
        <InputOTP className="w-full" maxLength={4}>
          <InputOTPGroup className="w-full">
            <InputOTPSlot
              index={0}
              className="w-1/4 aspect-square min-h-[75px]"
            />
            <InputOTPSlot
              index={1}
              className="w-1/4 aspect-square min-h-[75px]"
            />
            <InputOTPSlot
              index={2}
              className="w-1/4 aspect-square min-h-[75px]"
            />
            <InputOTPSlot
              index={3}
              className="w-1/4 aspect-square min-h-[75px]"
            />
          </InputOTPGroup>
        </InputOTP>

        <p className="font-medium text-center text-gray-400 text-sm mt-10">
          Didn’t receive code?{" "}
          <span className="text-primary font-semibold">Resend</span>
        </p>

        <p className="font-medium flex justify-center gap-2 items-center my-10 text-center text-gray-400 text-sm mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          09.00
        </p>

        <Link to="/reset-password">
          <button className="w-full bg-primary text-white rounded-full font-semibold p-4 transition hover:scale-75">
            Continue
          </button>
        </Link>
      </form>
    </main>
  );
};

export default EmailVerificationPage;
