import { useAuthStore } from '#/store/auth'
import { LoginResponse, loginResponseSchema } from '#/types/auth'
import { navigate } from 'wouter/use-browser-location'
import { storageKeys } from '../const/localstorage'

export const useLocalUser = () => {
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn)

  const setUser = (data: LoginResponse, href: string) => {
    try {
      loginResponseSchema.parse(data)
    } catch (error) {
      console.log(error)
    }
    const { username, token } = data
    setLoggedIn(username)
    localStorage.setItem(storageKeys.token, token)
    navigate(href)
  }

  return { setUser }
}
