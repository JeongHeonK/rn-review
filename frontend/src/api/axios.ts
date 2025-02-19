import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3030",
  timeout: 10000,
  withCredentials: true,
});

export default axiosInstance;
