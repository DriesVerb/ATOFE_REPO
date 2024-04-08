import { ProfileUpdate } from "#/types/profile"
import { useMutation } from "@tanstack/react-query"
import { patchUpdateProfile } from "../../func/profileUpdate"
import { AxiosError } from "axios"

export const useProfileUpdate = () => {
  return useMutation({
    mutationFn: (body: ProfileUpdate) => patchUpdateProfile(body), onError: (error: AxiosError) => {
      console.log(error)
    },
    onSuccess: (data) => {
      console.log("updateProfile: " + data)
    }
  })
}
