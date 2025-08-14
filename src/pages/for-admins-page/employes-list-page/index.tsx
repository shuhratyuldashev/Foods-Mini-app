import BottomBar from "@/widgets/bottombar";
import HeaderEmployersPage from "./ui/header-customers-page";
import EmployerCard from "@/entities/employer-card";
import React from "react";
import axios from "@/shared/axios";
import { Employer } from "@/shared/types/types";
import { useFetchEmployees } from "@/shared/hooks/useEmployees";

const EmployersListPage = () => {
  const { employees } = useFetchEmployees();

  return (
    <main className="p-4">
      <HeaderEmployersPage />

      <section className="mt-5 flex-col flex gap-2">
        {employees.map((e: Employer) => (
          <EmployerCard key={e.id} {...e} />
        ))}
      </section>
      <BottomBar isForAdmin currentPage="Ishchilar" />
    </main>
  );
};

export default EmployersListPage;
