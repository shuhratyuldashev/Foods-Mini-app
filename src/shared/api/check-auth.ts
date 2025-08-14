
import axios from "@/shared/axios";

export const checkAuth = async () => {
  const { data } = await axios.get("/order/customers")
  

  // console.log("USER DATA", data)
};

