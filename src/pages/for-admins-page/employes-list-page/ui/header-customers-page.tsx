import DrawerAddNewEmployer from "@/features/add-new-employer";

const HeaderEmployersPage = () => {
  return (
    <header className="flex items-center flex-col justify-center mt-5">
      <p className="font-semibold">Ishchilar ro'yxati</p>
      <DrawerAddNewEmployer type="post" />
    </header>
  );
};

export default HeaderEmployersPage;
