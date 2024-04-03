import { create } from 'zustand'

export type AuthState = {
  loggedIn: boolean
  user: string | undefined
  setLoggedIn: (by: string) => void
  setLoggedOut: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  loggedIn: false,
  user: undefined,
  setLoggedIn: (by) => set(() => ({ loggedIn: true, user: by })),
  setLoggedOut: () => set({loggedIn: false, user: undefined }),
}))
