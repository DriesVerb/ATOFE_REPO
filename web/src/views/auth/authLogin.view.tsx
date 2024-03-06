import { Btn, Form, Txt } from '#/elements'

export const LoginView = () => {
  return (
    <div className="h-60 col-start-1 col-end-7 md:col-start-3 md:col-end-9 neutral-content">
      <Txt.H3 text="login" />
      <form>
        <Form.Text placeholdertext="Username" />
        <Form.Text placeholdertext="Password" type="password" />
        <Btn.Basic text="Log in" onClick={() => console.log("test")} />
      </form>
    </div>
  )
}
