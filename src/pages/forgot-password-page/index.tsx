import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  return (
    <main className="p-4">
      <h1 className="text-4xl mt-5 font-bold">Forgot password?</h1>
      <p className="text-md mt-2 text-gray-400 font-semibold">
        Enter your email address and we’ll send you confirmation code to reset
        your password
      </p>
      <form className="mt-10">
        <div className="flex flex-col gap-2 ">
          <label className="font-semibold">Email Address</label>
          <input
            type="email"
            className="p-3 border rounded outline-none focus:ring-3 focus:ring-gray-300 transition"
            placeholder="Enter Email"
          />
        </div>

        <Link to="/verify-email">
          <button className="w-full mt-28 bg-primary text-white rounded-full font-semibold p-4 transition hover:scale-75">
            Continue
          </button>
        </Link>
      </form>
    </main>
  );
};

export default ForgotPasswordPage;
