import axios from 'axios';
import { useAuthStore } from '@/stores/authStore';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.atlas-trading.io/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor to add the auth token to headers
apiClient.interceptors.request.use(
  (config) => {
    const { isAuthenticated, token } = useAuthStore.getState(); // Assuming token is stored in authStore
    if (isAuthenticated && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor to handle common errors, e.g., 401 Unauthorized
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access, e.g., redirect to login
      useAuthStore.getState().logout();
      // You might want to redirect the user to the login page here
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
