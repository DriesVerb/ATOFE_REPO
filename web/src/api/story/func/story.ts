import { endPoints } from "#/utils/const/endPoints"
import { backendEnv } from "#/utils/const/env"
import axios from "axios"

export const getStoryById = async (id: number) => {
  return await axios(`${backendEnv}${endPoints.story}/${id}`).then(
    (result) => result.data
  )
}

