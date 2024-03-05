import axios from 'axios'
import { backendEnv } from '#/utils/const/env'

export const getRanEmojis = async (num: number) => {
  return await axios(`${backendEnv}/public/v1/emoji/random/${num}`).then(
    (result) => result.data
  )
}
