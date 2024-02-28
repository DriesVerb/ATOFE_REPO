import { useState } from 'react'

export const useEmojiSelect = () => {
  const [emojis, setEmojis] = useState<string[] | undefined>()
  const [loading, setLoading] = useState(false)

  const fetchEmojis = async (num: number) => {
    setLoading(true)
    try {
      const response = await fetch(
        `http://localhost:3000/public/v1/emoji/random/${num}`
      )
      const data = await response.json()
      setEmojis(data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return { emojis, loading, fetchEmojis }
}
