import { VerifyUser } from "#/types/auth"
import { useMutation } from "@tanstack/react-query"
import { verifyUser } from "../../func/verifyUser"
import { AxiosResponse } from "axios"
import { useAuthStore } from "#/store/auth"

export const useVerifyUser = () => {
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn)
  const setLoggedOut = useAuthStore((state) => state.setLoggedOut)

  return useMutation({
    mutationFn: (body: VerifyUser) => verifyUser(body),
    onError: () => {
      setLoggedOut()
    },
    onSuccess: (result: AxiosResponse<VerifyUser>) => {
      setLoggedIn(result.data.username!)
    },
  })
}
