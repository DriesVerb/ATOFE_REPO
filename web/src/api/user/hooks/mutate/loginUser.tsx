import { Login } from '#/types/auth'
import { useMutation } from '@tanstack/react-query'
import { loginUser } from '../../func/login'
import { AxiosError } from 'axios'
import { navigate } from 'wouter/use-browser-location'

export const useLoginUser = (href: string = '/') => {
  return useMutation({
    mutationFn: (body: Login) => loginUser(body),
    onError: (error: AxiosError) => {
      console.log(error)
    },
    onSuccess: () => {
      navigate(href)
    },
  })
}
