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
  return null;
};

const SignInForm = () => (
  <form className="mt-10 flex flex-col gap-4">
    <div className="flex flex-col gap-2">
      <label className="font-semibold">Telefon raqami</label>
      <input
        type="tel"
        className="p-3 border rounded outline-none focus:ring-3 focus:ring-gray-300 transition"
        placeholder="+998 99 999 99 99"
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="font-semibold">Parol</label>
      <input
        type="password"
        className="p-3 border rounded outline-none focus:ring-3 focus:ring-gray-300 transition"
        placeholder="Parol"
      />
    </div>
    <Link
      to="/sign-in/forgot-password"
      className="text-primary font-semibold cursor-pointer my-4 transition text-end hover:underline"
    >
      Parolni unutdingizmi?
    </Link>
    <Link to="/">
      <button className="w-full bg-primary text-white rounded-full font-semibold p-4 transition hover:scale-75">
        Tizimga kirish
      </button>
    </Link>
  </form>
);

const SignUpForm = () => (
  <form className="mt-10 flex flex-col gap-4">
    <div className="flex flex-col gap-2">
      <label className="font-semibold">Foydalanuvchi nomi</label>
      <input
        type="text"
        className="p-3 border rounded outline-none focus:ring-3 focus:ring-gray-300 transition"
        placeholder="Foydalanuvchi nomi"
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="font-semibold">Telefon raqami</label>
      <input
        type="tel"
        className="p-3 border rounded outline-none focus:ring-3 focus:ring-gray-300 transition"
        placeholder="+998 99 999 99 99"
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="font-semibold">Parol</label>
      <input
        type="password"
        className="p-3 border rounded outline-none focus:ring-3 focus:ring-gray-300 transition"
        placeholder="Parol"
      />
    </div>
    <div className="flex items-start gap-2 my-4">
      <Checkbox className="scale-125" id="terms" />
      <label className="text-sm font-medium" htmlFor="terms">
        <span>Men </span>
        <span className="text-primary">Foydalanish shartlari</span> va{" "}
        <span className="text-primary">Maxfiylik siyosati</span> bilan tanishdim
      </label>
    </div>
    <Link to="/">
      <button className="w-full bg-primary text-white rounded-full font-semibold p-4 transition hover:scale-75">
        Ro‘yxatdan o‘tish
      </button>
    </Link>
  </form>
);

export default AuthForm;
