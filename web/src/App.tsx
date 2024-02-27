import { EmojiRow } from "./components/emojiRow/emojiRow"
import { emojiTestList } from "./testData/emojis"
import { StartView } from "./views/start/start.view"




function App() {

  return (
    <>
      <EmojiRow emojis={emojiTestList}/>
      <StartView />
      <div>Hello</div>
    </>
  )
}

export default App
