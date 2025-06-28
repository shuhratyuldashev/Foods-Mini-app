import { Link } from "react-router-dom";
import { Checkbox } from "../../shared/ui/checkbox";

interface AuthFormProps {
  form: "sign-in" | "sign-up";
}

const AuthForm = ({ form }: AuthFormProps) => {
  if (form === "sign-in") {
    return <SignInForm />;
  }
  if (form === "sign-up") {
    return <SignUpForm />;
  }
};

const SignInForm = () => (
  <form className="mt-10 flex flex-col gap-4">
    <div className="flex flex-col gap-2 ">
      <label className="font-semibold">Email Address</label>
      <input
        type="email"
        className="p-3 border rounded outline-none focus:ring-3 focus:ring-gray-300 transition"
        placeholder="Enter Email"
      />
    </div>
    <div className="flex flex-col gap-2 ">
      <label className="font-semibold">Password</label>
      <input
        type="password"
        className="p-3 border rounded outline-none focus:ring-3 focus:ring-gray-300  transition"
        placeholder="Password"
      />
    </div>
    <Link
      to="/sign-in/forgot-password"
      className="text-primary font-semibold cursor-pointer my-4 transition text-end hover:underline"
    >
      Forgot password?
    </Link>
    <button className="w-full bg-primary text-white rounded-full font-semibold p-4 transition hover:scale-75">
      Sign In
    </button>
  </form>
);

const SignUpForm = () => (
  <form className="mt-10 flex flex-col gap-4">
    <div className="flex flex-col gap-2 ">
      <label className="font-semibold">Email Address</label>
      <input
        type="email"
        className="p-3 border rounded outline-none focus:ring-3 focus:ring-gray-300 transition"
        placeholder="Enter Email"
      />
    </div>
    <div className="flex flex-col gap-2 ">
      <label className="font-semibold">User Name</label>
      <input
        type="email"
        className="p-3 border rounded outline-none focus:ring-3 focus:ring-gray-300 transition"
        placeholder="User Name"
      />
    </div>
    <div className="flex flex-col gap-2 ">
      <label className="font-semibold">Password</label>
      <input
        type="password"
        className="p-3 border rounded outline-none focus:ring-3 focus:ring-gray-300  transition"
        placeholder="Password"
      />
    </div>
    <div className="flex items-start gap-2 my-4">
      <Checkbox className="scale-125" id="terms" />
      <label className="text-sm font-medium" htmlFor="terms">
        I Agree with <span className="text-primary">Terms of Service</span> and{" "}
        <span className="text-primary">
          Privacy <br /> Policy
        </span>
      </label>
    </div>
    <Link to="/verify-email">
      <button className="w-full bg-primary text-white rounded-full font-semibold p-4 transition hover:scale-75">
        Register
      </button>
    </Link>
  </form>
);

export default AuthForm;
