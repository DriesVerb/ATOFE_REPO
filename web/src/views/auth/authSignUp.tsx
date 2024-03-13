import { Btn, Form, Txt } from '#/elements'
import { AuthContainter } from './components/authContainer'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRegisterUser } from '#/api/user/hooks/mutate/registerUser'
import { SignUp, signUpSchema } from '#/types/auth'


export const SignUpView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUp>({
    resolver: zodResolver(signUpSchema),
  })

  const registerUser = useRegisterUser()
 
  console.log("comp " + registerUser.error)

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
          label="Choose a Username"
          error={errors.username && (errors.username.message as string)}
          {...register('username')}
        />
        <Form.Text
          label="What is your Email"
          error={errors.email && (errors.email.message as string)}
          placeholdertext="Email"
          type="email"
          {...register('email')}
        />
        <Form.Text
          label="Confirm your Email"
          error={errors.confirmEmail && (errors.confirmEmail.message as string)}
          placeholdertext="Confirm Email"
          {...register('confirmEmail')}
        />
        <Form.Text
          label="Choose a Password"
          error={errors.password && (errors.password.message as string)}
          placeholdertext="Password"
          type="password"
          {...register('password')}
        />
        <Form.Text
          label="Confrim your Passord"
          error={
            errors.confirmPassword && (errors.confirmPassword.message as string)
          }
          placeholdertext="Confirm your password"
          type="password"
          {...register('confirmPassword')}
        />
        <Btn.Basic text="Sign Up" type="submit" ngclass="w-fit mt-3" />
      </form>
    </AuthContainter>
  )
}
