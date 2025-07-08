import { Link } from "react-router-dom";
import AuthForm from "../../features/auth-form";

const SignInPage = () => {
  return (
    <main className="p-4">
      <h1 className="text-4xl mt-5 font-bold">Akauntingizga kiring</h1>
      <p className="text-md mt-2 text-gray-400 font-semibold">
        Iltimos, Akauntingizga kiring
      </p>

      <AuthForm form="sign-in" />

      <footer className="mt-10">
        <div className="text-center mt-4">
          <Link to="/sign-up" className="font-semibold transition text-black">
            Akauntingizga yo‘qmi?{" "}
            <span className="text-primary">Ro‘yxatdan o‘ting</span>
          </Link>
        </div>
        <div className="text-center mt-4">
          <Link
            to="/staff/my-orders"
            className="font-semibold transition text-black"
          >
            Xodimlar
          </Link>
        </div>
        <div className="text-center mt-4">
          <Link
            to="/admin/dashboard"
            className="font-semibold transition text-black"
          >
            Admin
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default SignInPage;
