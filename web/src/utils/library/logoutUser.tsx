import { useAuthStore } from '#/store/auth'
import { navigate } from 'wouter/use-browser-location'
import { storageKeys } from '../const/localstorage'

export const useLogoutUser = () => {
  const setLogout = useAuthStore((state) => state.setLoggedOut)

  const logout = () => {
    setLogout()
    localStorage.removeItem(storageKeys.token)
    navigate('/')
  }

  return { logout }
}
