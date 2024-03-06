import { Btn, Form, Txt } from '#/elements'

export const LoginView = () => {

  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <div className="h-fit p-2 md:p-4 rounded-2xl col-start-1 col-end-7 sm:col-start-3 sm:col-end-9 bg-neutral-content">
      <Txt.H3 text="login" />
      <form className="flex flex-col gap-2 p-2">
        <Form.Text placeholdertext="Username" />
        <Form.Text placeholdertext="Password" type="password" />
        <Btn.Basic text="Log in" type="submit" onClick={(e) => handleLogin(e)} />
      </form>
    </div>
  )
}
