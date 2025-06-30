import AddNewCardForm from "../../features/add-new-card";
import HeaderAddNewCard from "./ui/header-add-new-card";

const AddNewCardPage = () => {
  return (
    <main className="p-4">
      <HeaderAddNewCard />
      <AddNewCardForm />
    </main>
  );
};

export default AddNewCardPage;
