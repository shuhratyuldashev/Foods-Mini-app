import axios from "@/shared/axios";
import { EmployerFormData } from "../models/schema";

export const onSubmitAddEmployer = async (
  values: EmployerFormData,
  type: "post" | "put",
  employerId?: string,
) => {
  try {
    if (type === "post") {
      await axios.post("/worker/", values);
    } else if (type === "put" && employerId) {
      await axios.put(`/worker/${employerId}/`, values);
    } else {
      console.error("PUT uchun employerId kerak");
      return;
    }
    window.location.reload();
  } catch (err) {
    console.error("Xodimni yuborishda xatolik:", err);
  }
};
