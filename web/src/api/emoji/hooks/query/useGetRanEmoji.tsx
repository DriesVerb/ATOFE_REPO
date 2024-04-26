import { useQuery } from '@tanstack/react-query'
import { getRanEmojis } from '../../func/emoji'
import { cacheKeys } from '#/utils/const/cacheKeys'

export const useGetRanEmojis = (num: number) => {
  return useQuery({
    queryKey: [cacheKeys.emojiRan],
    queryFn: () => getRanEmojis(num),
  })
}
