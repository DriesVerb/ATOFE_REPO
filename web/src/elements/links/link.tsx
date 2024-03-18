import { Children } from '#/types/global/common'
import { Link } from 'wouter'

interface TextLinkProps {
  children: Children
  href: string
}

export const Text = (props: TextLinkProps) => {
  const { children, href } = props

  return (
    <span className='text-accent font-bold hover:underline hover:text-accent-content'>
      <Link href={href}>{children}</Link>
    </span>
  )
}
