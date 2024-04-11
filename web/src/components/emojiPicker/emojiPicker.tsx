import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

export interface PickerEmoji {
  native: string
}

interface EmojiPickerProps {
  onPick: (emoji: PickerEmoji) => void
}

export const EmojiPicker = (props: EmojiPickerProps) => {
  const { onPick } = props
  return <Picker data={data} onEmojiSelect={onPick} />
}
