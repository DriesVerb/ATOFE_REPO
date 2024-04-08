import { useQuery } from '@tanstack/react-query'
import { getProfileMe } from '../../func/profileMe'
import { cacheKeys } from '#/utils/const/cacheKeys'

export const useGetProfileMe = () => {
  return useQuery({ queryKey: [cacheKeys.profileMe], queryFn: () => getProfileMe()})
}
