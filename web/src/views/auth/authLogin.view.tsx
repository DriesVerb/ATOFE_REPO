import { Btn, Form, Txt } from '#/elements'
import { AuthContainter } from './components/authContainer'

export const LoginView = () => {
  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
      <AuthContainter>
        <Txt.H3 text="login" />
        <form className="flex flex-col gap-2 p-2">
          <Form.Text placeholdertext="Username" label="enter username" />
          <Form.Text placeholdertext="Password" type="password" label="enter password" />
          <Btn.Basic
            text="Log in"
            type="submit"
            onClick={(e) => handleLogin(e)}
            tail="w-fit"
          />
        </form>
      </AuthContainter>
  )
}
