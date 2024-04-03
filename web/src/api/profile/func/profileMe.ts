import axios from 'axios'
import { backendEnv } from '#/utils/const/env'
import { endPoints } from '#/utils/const/endPoints'
import { authConfig } from '#/utils/library/axios'

export const getProfileMe = async () => {
  return await axios(`${backendEnv}${endPoints.profile}/me`, authConfig).then(
    (result) => result.data
  )
}
