import { backendEnv } from "#/utils/const/env"
import axios from "axios"

export const getProfileUsername = async (username: string) => {
  return await axios(`${backendEnv}/public/v1/user/profile/${username}`).then((result) => result.data)
}
