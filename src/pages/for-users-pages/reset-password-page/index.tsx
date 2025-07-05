import ResetPasswordForm from "../../../features/reset-password-form";
import HeaderResetPassword from "./ui/header-reset-password";

const ResetPasswordPage = () => {
  return (
    <main className="p-4">
      <HeaderResetPassword />

      <h1 className="text-4xl mt-5 font-bold">Reset Password</h1>
      <p className="text-md mt-2 text-gray-400 font-semibold">
        Your new password must be different from the previously used password
      </p>
      <ResetPasswordForm />
    </main>
  );
};

export default ResetPasswordPage;
