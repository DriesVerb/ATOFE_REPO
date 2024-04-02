import { create } from 'zustand'

export type AuthState = {
  loggedIn: boolean
  setLoggedIn: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  loggedIn: false,
  setLoggedIn: () => set(() => ({ loggedIn: true })),
}))
