import AuthForm from "../../features/auth-form";
import { Link } from "react-router-dom";
import { Separator } from "../../shared/ui/separator";

const SignUpPage = () => {
  return (
    <main className="p-4">
      <h1 className="text-4xl mt-5 font-bold">Yangi akaunt yarating</h1>
      <p className="text-md mt-2 text-gray-400 font-semibold">
        O‘zingiz yoqtirgan taomlarni topish uchun hisob yarating
      </p>

      <AuthForm form="sign-up" />

      <footer className="mt-10">
        <div className="text-center mt-4">
          <Link to="/sign-in" className="font-semibold transition text-black">
            Akauntingizga bormi?{" "}
            <span className="text-primary">Tizimga kiring</span>
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default SignUpPage;
