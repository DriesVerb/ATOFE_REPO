import { storageKeys } from '#/utils/const/localstorage'

const token = localStorage.getItem(storageKeys.token)

export const authConfig = {
  headers: {
   Authorization: `Bearer ${token}`
  }
}
