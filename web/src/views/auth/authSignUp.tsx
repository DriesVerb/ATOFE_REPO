import { Btn, Form, Link, Txt } from '#/elements'
import { AuthContainter } from './components/authContainer'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRegisterUser } from '#/api/user/hooks/mutate/registerUser'
import { SignUp, signUpSchema } from '#/types/auth'
import { Alert } from '#/components/alert/alert'

interface responseError {
  error: string
}

export const SignUpView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUp>({
    resolver: zodResolver(signUpSchema),
  })

  const registerUser = useRegisterUser()

  const responseError = registerUser.error?.response?.data as responseError
  const errorMessage = responseError?.error

  const onSubmit = (data: SignUp) => {
    registerUser.mutate(data)
  }

  return (
    <AuthContainter>
      <Txt.H3 text="Sign Up" />
      <form
        className="flex flex-col gap-2 p-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Text
          placeholdertext="Username"
          value="Dries"
          label="Choose a Username"
          error={errors.username && (errors.username.message as string)}
          {...register('username')}
        />
        <Form.Text
          label="What is your Email"
          error={errors.email && (errors.email.message as string)}
          placeholdertext="Email"
          value="verboven.3z@gmail.com"
          type="email"
          {...register('email')}
        />
        <Form.Text
          label="Confirm your Email"
          value="verboven.3z@gmail.com"
          error={errors.confirmEmail && (errors.confirmEmail.message as string)}
          placeholdertext="Confirm Email"
          {...register('confirmEmail')}
        />
        <Form.Text
          label="Choose a Password"
          value="fristifristi"
          error={errors.password && (errors.password.message as string)}
          placeholdertext="Password"
          type="password"
          {...register('password')}
        />
        <Form.Text
          label="Confrim your Passord"
          value="fristifristi"
          error={
            errors.confirmPassword && (errors.confirmPassword.message as string)
          }
          placeholdertext="Confirm your password"
          type="password"
          {...register('confirmPassword')}
        />
        <Btn.Basic text="Sign Up" type="submit" ngclass="w-fit mt-3" />
      </form>
      {responseError && <Alert ngclass="mt-4" text={errorMessage} />}
      <Txt.Small>
        Already have an account? <Link.Text href="/login">Log In</Link.Text>
      </Txt.Small>
    </AuthContainter>
  )
}
