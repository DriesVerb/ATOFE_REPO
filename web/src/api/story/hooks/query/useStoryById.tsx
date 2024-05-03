import { useQuery } from "@tanstack/react-query"
import { getStoryById } from "../../func/story"
import { cacheKeys } from "#/utils/const/cacheKeys"

export const useGetStoryById = (id: number) => {
 return useQuery({ queryKey: [cacheKeys.storyById, id], queryFn: () => getStoryById(id)})
}
