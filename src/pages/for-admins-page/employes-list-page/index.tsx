import BottomBar from "@/widgets/bottombar";
import CustomerCard from "@/entities/customer-card";
import { employes_list } from "../../../shared/constants/employers-list";
import HeaderEmployersPage from "./ui/header-customers-page";

const EmployersListPage = () => {
  return (
    <main className="p-4">
      <HeaderEmployersPage />

      <section className="mt-5 flex-col flex gap-2">
        {employes_list.map((c) => (
          <CustomerCard key={c.id} {...c} />
        ))}
      </section>
      <BottomBar isForAdmin currentPage="employes" />
    </main>
  );
};

export default EmployersListPage;
