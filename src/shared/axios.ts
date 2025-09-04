import axios from "axios";

const baseUrl =
  import.meta.env.VITE_BASE_API_URL ||
  "https://api.avenue.hkomilov.uz/api/v1/";

// const baseUrl = "http://192.168.0.127:8090/api/v1";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
