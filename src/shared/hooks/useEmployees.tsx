import { useEffect, useState } from "react";
import axios from "@/shared/axios";
import { Employer } from "@/shared/types/types";

export const useFetchEmployees = () => {
  const [employees, setEmployees] = useState<Employer[]>([]);

  const fetchEmployees = async () => {
    const res = await axios.get<{ results: Employer[] }>("/worker");
    setEmployees(res.data.results);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return { employees, refetch: fetchEmployees };
};
