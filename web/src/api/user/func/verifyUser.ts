import { VerifyUser } from "#/types/auth"
import { endPoints } from "#/utils/const/endPoints"
import { backendEnv } from "#/utils/const/env"
import { authConfig } from "#/utils/library/axios"
import axios from "axios"

export const verifyUser = async (body: VerifyUser) => {
  return await axios.post(`${backendEnv}${endPoints.user}/verify`, body, authConfig).then((result) => result)
}

