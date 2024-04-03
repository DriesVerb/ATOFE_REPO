import { storageKeys } from "#/utils/const/localstorage"

export const ProfileMe = () => {
  const token = localStorage.getItem(storageKeys.token)

  return (
    <div className="max-w-fit bg-red-50">
      <p>{token}</p>

      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
    </div>
  )
}
