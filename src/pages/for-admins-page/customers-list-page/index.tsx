import BottomBar from "@/widgets/bottombar";
import HeaderCustomersPage from "./ui/header-customers-page";
import CustomerCard from "@/entities/customer-card";
import { customers_list } from "../../../shared/constants/customers-list";

const CustomersListPage = () => {
  return (
    <main className="p-4">
      <HeaderCustomersPage />

      <section className="mt-5 flex-col flex gap-2">
        {customers_list.map((c) => (
          <CustomerCard key={c.id} {...c} />
        ))}
      </section>
      <BottomBar isForAdmin currentPage="customers" />
    </main>
  );
};

export default CustomersListPage;
