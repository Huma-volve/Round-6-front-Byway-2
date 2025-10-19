import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/v1";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // لو هستخدم كوكيز
});

// ✅ Attach Token Automatically
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("bywaytoken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
