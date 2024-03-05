import { useQuery } from '@tanstack/react-query'
import { getRanEmojis } from '../../func/emoji'

export const useGetRanEmojis = (num: number) => {
  return useQuery({ queryKey: ['emoji-ran'], queryFn: () => getRanEmojis(num)})
}
