import axios from "axios";
import config from "../config";

// Centralized API instance with Authorization header
const API = axios.create({
  baseURL: config.API_URL,
  timeout: 10000, // 10 seconds timeout
});

// Add token to Authorization header for every request
API.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear session and redirect to login on unauthorized
      sessionStorage.clear();
      window.location.href = "/Login";
    }
    return Promise.reject(error);
  }
);

// Function to retrieve the token from session storage
export function AuthToken() {
  return sessionStorage.getItem("authToken");
}

// Function to retrieve the Admin Name
export function AdminName() {
  return sessionStorage.getItem("AdminName") || "Admin";
}

// Logout function to clear session and redirect to Login page
export function Logout() {
  sessionStorage.clear();
  window.location.href = "/Login";
}

export default API;
