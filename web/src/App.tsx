import { useEffect } from 'react'
import { EmojiRow } from './components/emojiRow/emojiRow'
import { StartView } from './views/start/start.view'
import { useEmojiSelect } from './utils/hooks/openEmoji'

function App() {
  const { emojis, loading, fetchEmojis } = useEmojiSelect()

  useEffect(() => {
    fetchEmojis(5)
  }, [])

  if (loading) <div>Loading</div>
  if (emojis?.length === 0) <div>ERROR</div>

  return (
    <>
      <EmojiRow emojis={emojis!} />
      <button onClick={() => fetchEmojis(5)}>renew</button>
      <StartView />
    </>
  )
}

export default App
