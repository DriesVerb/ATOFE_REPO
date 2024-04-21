import { cacheKeys } from "#/utils/const/cacheKeys"
import { useQuery } from "@tanstack/react-query"
import { getProfileUsername } from "../../func/profileUsername"

export const useGetProfileUsername = (username: string) => {
  return useQuery({ queryKey: [cacheKeys.profileUsername], queryFn: () => getProfileUsername(username) })
}


