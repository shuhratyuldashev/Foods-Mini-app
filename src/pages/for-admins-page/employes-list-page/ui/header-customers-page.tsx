import DrawerAddNewEmployer from "./add-customer-drawer";

const HeaderEmployersPage = () => {
  return (
    <header className="flex items-center flex-col justify-center mt-5">
      <p className="font-semibold">Ishchilar ro'yxati</p>
      <DrawerAddNewEmployer />
    </header>
  );
};

export default HeaderEmployersPage;
