import { useMutation } from '@tanstack/react-query'
import { registerUser } from '../../func/registerUser'
import { SignUp } from '#/types/auth'

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: (body: SignUp) => registerUser(body),
    onError: (error) => {
      console.log(error.message)
      return error
    },
    onSuccess: (data) => {
      console.log(data)
      return data
    }
  })
}
