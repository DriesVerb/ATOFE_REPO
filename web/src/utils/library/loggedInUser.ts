import { useAuthStore } from '#/store/auth'
import { LoginResponse, loginResponseSchema } from '#/types/auth'
import { AxiosResponse } from 'axios'
export const createLoginUser = (data: LoginResponse) => {

  try {
    loginResponseSchema.parse(data)
  } catch (error) {
    console.log(error)
  }

  const { username, token } = data
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn)

  setLoggedIn(username)
  localStorage.setItem('token', token)
}
