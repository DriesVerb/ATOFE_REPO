import { emojiData } from '../../testData/emoji.data'
import {  EmojiWithVariant } from '../../types/emoji/emoji.type'

const squashVariants = (output: EmojiWithVariant) => {
  console.log(output)
  return "variant"
}

export const getFiveRandom = () => {
  const array = emojiData
  const emojiOutput = new Set()

  while (emojiOutput.size < 5) {
    const randomNum = Math.trunc(Math.random() * array.length)

    const currentOutput = array[randomNum]

    if ('variants' in currentOutput) {
      emojiOutput.add(squashVariants(currentOutput as EmojiWithVariant))
    } else {
      emojiOutput.add(currentOutput)
    }
  }

  return [...emojiOutput]
}
