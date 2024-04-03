import { storageKeys } from '#/utils/const/localstorage'

export const authConfig = {
  headers: {
   Authorization: `Bearer ${localStorage.getItem(storageKeys.token)}`
  }
}
