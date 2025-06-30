import { Link } from "react-router-dom";

const ResetPasswordForm = () => {
  return (
    <form className="mt-10 flex flex-col gap-6">
      <div className="flex flex-col gap-2 ">
        <label className="font-semibold">New Password</label>
        <input
          type="password"
          className="p-3 border rounded outline-none focus:ring-3 focus:ring-gray-300 transition"
          placeholder="Enter Email"
        />
        <p className="text-md text-gray-400 font-semibold">
          Must be at least 8 character
        </p>
      </div>
      <div className="flex flex-col gap-2 ">
        <label className="font-semibold">Confirm Password</label>
        <input
          type="password"
          className="p-3 border rounded outline-none focus:ring-3 focus:ring-gray-300 transition"
          placeholder="Confirm Password"
        />
        <p className="text-md text-gray-400 font-semibold">
          Both password must match
        </p>
      </div>
      <Link to="/products">
        <button className="w-full mt-10 bg-primary text-white rounded-full font-semibold p-4 transition hover:scale-75">
          Verify Account
        </button>
      </Link>
    </form>
  );
};

export default ResetPasswordForm;
