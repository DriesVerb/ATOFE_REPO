import { endPoints } from '#/utils/const/endPoints'
import { backendEnv } from '#/utils/const/env'
import { storageKeys } from '#/utils/const/localstorage'
import { authConfig } from '#/utils/library/axios'
import axios from 'axios'

export const patchUpdateProfile = async () => {
  const token = localStorage.getItem(storageKeys.token)
  return await axios(
    `${backendEnv}${endPoints.profile}/upate`,
    authConfig(token)
  ).then((result) => result.data)
}
