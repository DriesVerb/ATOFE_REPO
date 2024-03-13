import { useMutation } from '@tanstack/react-query'
import { registerUser } from '../../func/registerUser'
import { SignUp } from '#/types/auth'
import { AxiosError } from 'axios'

interface MuteError {
  error: string
}

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: (body: SignUp) => registerUser(body),
    onError: (error: AxiosError) => {
      const errorData = error.response?.data as MuteError
      const errorMessage = JSON.stringify(errorData.error)
      return errorMessage
    },
    onSuccess: (data) => {
      console.log('this is data' + data)
    },
  })
}
