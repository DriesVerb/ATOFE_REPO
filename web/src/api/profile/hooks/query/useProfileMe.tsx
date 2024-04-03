import { useQuery } from '@tanstack/react-query'
import { getProfileMe } from '../../func/profileMe'

export const useGetProfileMe = () => {
  return useQuery({ queryKey: ['profile-me'], queryFn: () => getProfileMe()})
}
