import { Login } from '#/types/auth'
import { useMutation } from '@tanstack/react-query'
import { loginUser } from '../../func/login'
import { AxiosError } from 'axios'
import { useLocalUser } from '#/utils/helper/loggedInUser'
import { storageKeys } from '#/utils/const/localstorage'
import { navigate } from 'wouter/use-browser-location'

export const useLoginUser = (href: string = '/') => {
  const { setUser } = useLocalUser()

  return useMutation({
    mutationFn: (body: Login) => loginUser(body),
    onError: (error: AxiosError) => {
      console.log(error)
    },
    onSuccess: (result) => {
      const data = result.data
      setUser(data)
      localStorage.setItem(storageKeys.token, data.token)
      localStorage.setItem(storageKeys.username, data.username)
      navigate(href)
    },
  })
}
