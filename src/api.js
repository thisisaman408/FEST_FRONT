import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

if (!API_BASE_URL) {
  console.error("VITE_BACKEND_API_URL is not defined! API calls may fail.");
  // You might want to throw an error or handle this case appropriately
}

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Keep this if you need to send cookies
});

// Optional: Add request or response interceptors if needed
// api.interceptors.request.use(...)
// api.interceptors.response.use(...)

export default api; // Export the custom instance