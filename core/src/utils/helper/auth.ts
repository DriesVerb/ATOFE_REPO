export const getAuthToken = (auth: string): string | undefined => {
  if (auth && auth.startsWith('Bearer ')) {
    const token = auth.slice(7)
    return token
  }
}
