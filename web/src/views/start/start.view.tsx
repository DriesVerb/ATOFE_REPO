import { useEffect } from 'react'
import { useEmojiSelect } from '#/utils/hooks/openEmoji'
import { EmojiRow } from '#/components/emojiRow/emojiRow'

export const StartView = () => {
  const { emojis, loading, fetchEmojis } = useEmojiSelect()

  useEffect(() => {
    fetchEmojis(5)
  }, [])

  if (loading) <div>Loading</div>
  if (emojis?.length === 0) <div>ERROR</div>

  return (
    <main className="container mx-auto">
      <nav>
        <h1 className="text-3xl">ATOFE</h1>
      </nav>
      <EmojiRow emojis={emojis!} />
      <button onClick={() => fetchEmojis(5)}>renew</button>
    </main>
  )
}
