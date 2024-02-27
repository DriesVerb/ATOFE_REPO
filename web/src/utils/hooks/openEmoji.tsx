import { useState } from "react"

export const useEmojiSelect = () => {

  const [emojis, setEmojis] = useState()
  const [loading, setLoading] = useState(false)
  
  const fetchEmojis = async () => {
    setLoading(true)

    try {
      const response = await fetch(`https://emoji-api.com/emojis?access_key=${process.env.EMOJI_KEY}`)

      setEmojis(response)

    } catch (err) {
      console.log(err)
      
    }



  }
  
}
