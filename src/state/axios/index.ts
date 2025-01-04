import axios from "axios";

const api = axios.create({
  baseURL: "https://e-com-backend-peach.vercel.app/api/v1",
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("access");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;