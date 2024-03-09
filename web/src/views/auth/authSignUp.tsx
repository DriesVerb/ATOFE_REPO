import { Btn, Form, Txt } from '#/elements'
import { FormEvent } from 'react'
import { AuthContainter } from './components/authContainer'

export const SignUpView = () => {
  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e.currentTarget.elements)
  }

  return (
    <AuthContainter>
      <Txt.H3 text="Sign Up" />
      <form className="flex flex-col gap-2 p-2" onSubmit={(e)=> handleSignUp(e)}>
        <Form.Text placeholdertext="Username" />
        <Form.Text placeholdertext="Email" type="email" />
        <Form.Text placeholdertext="Repeat Email" type="email" />
        <Form.Text placeholdertext="Password" type="password" />
        <Form.Text placeholdertext="Repeat Password" type="password" />
        <Btn.Basic
          text="Sign Up"
          type="submit"
          tail="w-fit"
        />
      </form>
    </AuthContainter>
  )
}
