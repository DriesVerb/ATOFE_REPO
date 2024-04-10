import { Btn, Form, Link, Txt } from '#/elements'
import { useForm } from 'react-hook-form'
import { AuthContainter } from './components/authContainer'
import { Login, loginSchema } from '#/types/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLoginUser } from '#/api/user/hooks/mutate/loginUser'

export const LoginContainer = ({ href }: { href?: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(loginSchema),
  })

  const loginUser = useLoginUser(href)

  const onSubmit = (data: Login) => {
    loginUser.mutate(data)
  }

  return (
    <AuthContainter>
      <Txt.H3 text="login" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 p-2"
      >
        <Form.Text
          placeholdertext="Username"
          label="Enter Username"
          error={errors.username && (errors.username.message as string)}
          {...register('username')}
        />
        <Form.Text
          placeholdertext="Password"
          type="password"
          label="enter password"
          error={errors.password && (errors.password.message as string)}
          value="fristi1987"
          {...register('password')}
        />
        <Btn.Basic
          variant="secondary"
          text="Log in"
          type="submit"
          ngclass="w-fit"
        />
      </form>
      <Txt.Small>
        Don't have an account? <Link.Text href="/signup">Register</Link.Text>
      </Txt.Small>
    </AuthContainter>
  )
}

export const LoginView = () => {
  return <LoginContainer />
}
