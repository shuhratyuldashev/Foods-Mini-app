import HomePage from "../../pages/HomePage";
import { Toaster } from "sonner";

const AppRouter = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomePage />
      <Toaster position="top-center" richColors />
    </main>
  );
};

export default AppRouter;
