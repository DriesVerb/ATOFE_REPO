import { useAuthStore } from '#/store/auth'
import { LoginResponse, loginResponseSchema } from '#/types/auth'
import { storageKeys } from '../const/localstorage'

export const useLocalUser = () => {
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn)

  const setUser = (data: LoginResponse) => {
    localStorage.setItem(storageKeys.token, data.token)
    localStorage.setItem(storageKeys.username, data.username)

    try {
      loginResponseSchema.parse(data)
    } catch (error) {
      console.log(error)
    }

    const { username } = data

    setLoggedIn(username)
  }

  return { setUser }
}
