import axios from "axios"
import { VerifyUser } from "#/types/auth"
import { endPoints } from "#/utils/const/endPoints"
import { backendEnv } from "#/utils/const/env"
import { storageKeys } from "#/utils/const/localstorage"
import { authConfig } from "#/utils/library/axios"

export const verifyUser = async (body: VerifyUser) => {
  const token = localStorage.getItem(storageKeys.token)
  return await axios.post(`${backendEnv}${endPoints.user}/verify`, body, authConfig(token)).then((result) => result)
}

