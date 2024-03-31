import { Login } from '#/types/auth'
import { useMutation } from '@tanstack/react-query'
import { loginUser } from '../../func/login'
import { AxiosError } from 'axios'
import { authStore } from '#/store/auth'

export const useLoginUser = () => {
  return useMutation({
    mutationFn: (body: Login) => loginUser(body),
    onError: (error: AxiosError) => {
      console.log(error)
    },
    onSuccess: (data) => {
      console.log(data)
      authStore.update((state) => ({
        ...state,
        loggedIn: true,
      }))
    },
  })
}
