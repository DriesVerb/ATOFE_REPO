export const authConfig = (token: string | null) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}
