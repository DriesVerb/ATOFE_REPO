import { Login } from '#/types/auth'
import { useMutation } from '@tanstack/react-query'
import { loginUser } from '../../func/login'
import { AxiosError } from 'axios'
import { useLocalUser } from '#/utils/library/loggedInUser'
import { navigate } from 'wouter/use-hash-location'

export const useLoginUser = (href: string = '/') => {
  const { setUser } = useLocalUser()

  return useMutation({
    mutationFn: (body: Login) => loginUser(body),
    onError: (error: AxiosError) => {
      console.log(error)
    },
    onSuccess: (result) => {
      setUser(result.data, href)
    },
  })
}
