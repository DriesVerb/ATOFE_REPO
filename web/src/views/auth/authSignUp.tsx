import { Btn, Form, Txt } from '#/elements'
import { FormEvent } from 'react'
import { AuthContainter } from './components/authContainer'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const signUpSchema = z
  .object({
    username: z.string(),
    email: z.string().email(),
    confirmEmail: z.string().email(),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .superRefine(({ confirmPassword, password, email, confirmEmail }, ctx) => {
    if (confirmEmail !== email) {
      ctx.addIssue({
        code: 'custom',
        message: 'The email did not match',
      })
    }
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
      })
    }
  })

export const SignUpView = () => {
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: zodResolver(signUpSchema),
  })

  console.log(errors)

  return (
    <AuthContainter>
      <Txt.H3 text="Sign Up" />
      <form
        className="flex flex-col gap-2 p-2"
        onSubmit={handleSubmit((e) => console.log(e))}
      >
        <Form.Text placeholdertext="Username"  {...register("username")}/>
        <Form.Text placeholdertext="Email" type="email" />
        <Form.Text placeholdertext="Repeat Email" type="email" />
        <Form.Text placeholdertext="Password" type="password" />
        <Form.Text placeholdertext="Repeat Password" type="password" />
        <Btn.Basic text="Sign Up" type="submit" tail="w-fit" />
      </form>
    </AuthContainter>
  )
}
