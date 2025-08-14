import DrawerAddNewCategory from "@/features/add-new-category";
import DrawerAddNewFood from "@/features/add-new-food";

const HeaderFoodsListPage = () => {
  return (
    <header className="flex items-center flex-col gap-2 mt-5">
      <p className="font-semibold">Mahsulotlar ro'yxati</p>
      <DrawerAddNewFood type="post" />
    </header>
  );
};

export default HeaderFoodsListPage;
