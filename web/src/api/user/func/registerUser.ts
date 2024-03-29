import { SignUp } from '#/types/auth'
import { backendEnv } from '#/utils/const/env'
import axios from 'axios'

export const registerUser = async (body: SignUp) => {
  return await axios
    .post(`${backendEnv}/public/v1/user/register`, body)
    .then((result) => result)
}
