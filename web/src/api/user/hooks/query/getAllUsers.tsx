import { useQuery } from '@tanstack/react-query'
import { getAllUsers } from '../../func/allUsers'

export const useGetAllUsers = () => {
  return useQuery({ queryKey: ['all-users'], queryFn: getAllUsers })
}
