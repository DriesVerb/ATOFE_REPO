export const createStory = async (body: any) => {
  const token = body.token

  const { username } = token

  console.log(username)

  return {message: username}
}
