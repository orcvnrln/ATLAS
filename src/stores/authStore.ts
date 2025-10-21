import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  // Example login action
  // In a real app, this would be called after a successful API login
  login: (userData) =>
    set({
      user: userData,
      isAuthenticated: true,
    }),

  // Example logout action
  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),
}));
