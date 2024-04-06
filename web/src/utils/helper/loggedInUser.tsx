import { useAuthStore } from '#/store/auth'
import { LoginResponse, loginResponseSchema } from '#/types/auth'

export const useLocalUser = () => {
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn)

  const setUser = (data: LoginResponse) => {

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
