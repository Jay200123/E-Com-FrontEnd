import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:4000/api/v1/`,
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("access");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;