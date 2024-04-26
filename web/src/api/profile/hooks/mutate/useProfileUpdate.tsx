import { ProfileUpdate } from '#/types/profile'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { patchUpdateProfile } from '../../func/profileUpdate'
import { AxiosError } from 'axios'
import { cacheKeys } from '#/utils/const/cacheKeys'

export const useProfileUpdate = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (body: ProfileUpdate) => patchUpdateProfile(body),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [cacheKeys.profileMe] })
      console.log('updateProfile: ' + data)
    },
    onError: (error: AxiosError) => {
      console.log(error)
    },
  })
}
