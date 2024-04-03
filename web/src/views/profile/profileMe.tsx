import { useGetProfileMe } from '#/api/profile/hooks/query/useProfileMe'

export const ProfileMe = () => {
  const { data } = useGetProfileMe()

  console.log(data?.message)

  return (
    <div className="max-w-fit bg-red-50">
      <div>{data?.message}</div>

      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
    </div>
  )
}
