import axios from 'axios'
import { backendEnv } from '#/utils/const/env'
import { endPoints } from '#/utils/const/endPoints'

export const getRanEmojis = async (num: number) => {
  return await axios(`${backendEnv}${endPoints.emoji}/random/${num}`).then(
    (result) => result.data
  )
}
