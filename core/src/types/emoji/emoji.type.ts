export type EmojiData = Emoji[]

export type EmojiRaw = {
  character: string,
  info: string
}

export type Emoji = {
  slug: string
  character: string
  unicodeName: string
  codePoint: string
  group: string
  subGroup: string
  variants?: Variant[] | undefined
}

export type EmojiWithVariant = Emoji & { variants: Variant[] }

export type Variant = {
  slug: string
  character: string
}

 
