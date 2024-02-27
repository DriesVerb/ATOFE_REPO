import { EmojiData } from '../types/emoji/emoji.type'
import data from './emojis.json'
import characters from './character.json'

type character = string

export const emojiData: EmojiData = data

export const characterData: character[] = characters


export const extractCharacters = () => {
  let characterArray: character[] = []

  emojiData.forEach((emoji) => {
    const variantsArray: character[] = []
    if ('variants' in emoji) {
      variantsArray.push(emoji.character)

      emoji.variants?.forEach((emoji) => {
        variantsArray.push(emoji.character)
      })
    } else {
      characterArray.push(emoji.character)
    }
    characterArray = [...characterArray, ...variantsArray]
  })

  return characterArray
}
