import axios from 'axios'
import { backendEnv } from '#/utils/const/env'
import { endPoints } from '#/utils/const/endPoints'
import { authConfig } from '#/utils/library/axios'
import { storageKeys } from '#/utils/const/localstorage'



export const getProfileMe = async () => {
  const token = localStorage.getItem(storageKeys.token)
  return await axios(`${backendEnv}${endPoints.profile}/me`, authConfig(token)).then(
    (result) => result.data
  )
}
