import { Login, LoginResponse } from '#/types/auth'
import { backendEnv } from '#/utils/const/env'
import axios, { AxiosResponse } from 'axios'

export const loginUser = async (body: Login) => {
  return await axios
    .post(`${backendEnv}/public/v1/user/login`, body)
    .then<AxiosResponse<LoginResponse>>((result) => result)
}
