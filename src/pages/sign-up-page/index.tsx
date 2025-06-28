import AuthForm from "../../features/auth-form";
import { Link } from "react-router-dom";
import { Separator } from "../../shared/ui/separator";

const SignUpPage = () => {
  return (
    <main className="p-4">
      <h1 className="text-4xl mt-5 font-bold">Create your new account</h1>
      <p className="text-md mt-2 text-gray-400 font-semibold">
        Create an account to start looking for the food you like
      </p>

      <AuthForm form="sign-up" />

      <div className="relative flex items-center my-6">
        <Separator className="flex-grow" />
        <span className="bg-white p-1 absolute left-[50%] -translate-x-[50%] text-gray-400 font-semibold">
          Or sign in with
        </span>
      </div>

      <footer className="mt-10">
        <section className="flex items-center justify-center gap-4">
          <button className="rounded-full border border-gray-300 p-2 flex items-center justify-center">
            <img
              width={24}
              height={24}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
              alt="Google-Icon"
            />
          </button>
          <button className="rounded-full border border-gray-300 p-2 flex items-center justify-center">
            <img
              width={24}
              height={24}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
              alt="Facebook-Icon"
            />
          </button>
          <button className="rounded-full border border-gray-300 p-2 flex items-center justify-center">
            <img
              width={24}
              height={24}
              src="https://cdn-icons-png.flaticon.com/512/0/747.png"
              alt="Apple-Icon"
            />
          </button>
        </section>
        <div className="text-center mt-4">
          <Link to="/sign-in" className="font-semibold transition text-black">
            Don't have an account? <span className="text-primary">Sign In</span>
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default SignUpPage;
