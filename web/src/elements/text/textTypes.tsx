import { ReactNode } from "react"

interface TextProps {
  text: string
  className?: string
}

interface Children {
  children: ReactNode
}

interface TextClassProps extends Children {
  className?: string
}

export const H1 = (props: TextProps) => {
  const { text, className } = props

  return (
    <>
      <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-9xl ${className}`}>{text}</h1>
    </>
  )
}

export const H2 = (props: TextProps) => {
  const { text, className } = props

  return (
    <>
      <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${className}`}>{text}</h2>
    </>
  )
}

export const H3 = (props: TextProps) => {
  const { text, className } = props

  return (
    <>
      <h3 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${className}`}>{text}</h3>
    </>
  )
}


export const p = (props: TextClassProps) => {
  const { children, className } = props

  return (
    <>
      <p className={`text-xs sm:text-sm md:text-base lg:text-lg ${className}`}>{children}</p>
    </>
  )
}
