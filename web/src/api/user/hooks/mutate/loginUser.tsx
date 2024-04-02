import { Login } from '#/types/auth'
import { useMutation } from '@tanstack/react-query'
import { loginUser } from '../../func/login'
import { AxiosError } from 'axios'
import { navigate } from 'wouter/use-browser-location'
import { useAuthStore } from '#/store/auth'

export const useLoginUser = (href: string = '/') => {
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn)
  return useMutation({
    mutationFn: (body: Login) => loginUser(body),
    onError: (error: AxiosError) => {
      console.log(error)
    },
    onSuccess: () => {
      setLoggedIn()
      navigate(href)
    },
  })
}
