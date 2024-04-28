import { EmojiData } from '../types/emoji/emoji.type'
import data from './emojis.json'
import characters from './character.json'

type emojiReturn = {
  character: string,
  info: string
}

export const emojiData: EmojiData = data

export const characterData: string[] = characters

export const extractCharacters = () => {
  let characterArray: emojiReturn[] = []

  emojiData.forEach((emoji) => {
    const variantsArray: emojiReturn[] = []
    if ('variants' in emoji) {
      variantsArray.push({
        character: emoji.character,
        info: emoji.slug
      })

      emoji.variants?.forEach((emoji) => {
        variantsArray.push({
          character: emoji.character,
          info: emoji.slug
        })
      })
    } else {
      characterArray.push({
        character: emoji.character,
        info: emoji.slug
      })
    }
    characterArray = [...characterArray, ...variantsArray]
  })

  return characterArray
}
