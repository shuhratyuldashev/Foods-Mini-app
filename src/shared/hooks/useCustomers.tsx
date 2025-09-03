import { useEffect, useState } from "react";
import axios from "@/shared/axios";
import { Employer } from "@/shared/types/types";

export const useFetchCustomers = () => {
  const [employees, setEmployees] = useState<Employer[]>([]);

  const fetchCustomers = async () => {
    const res = await axios.get<{ results: Employer[] }>("/worker");
    setEmployees(res.data.results);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return { employees, refetch: fetchCustomers };
};
