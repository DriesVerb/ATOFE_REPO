import axios from "axios"
import { backendEnv } from "#/utils/const/env"

 export const getAllUsers = async () => {
  return await axios(`${backendEnv}/public/v1/users`).then((result) => result.data)
 }
