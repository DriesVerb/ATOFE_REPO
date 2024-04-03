import { Btn, Txt } from '#/elements'
import { useLogoutUser } from '#/utils/helper/logoutUser'
import { AuthContainter } from './components/authContainer'

export const LogoutView = () => {
  const { logout } = useLogoutUser()

  return (
    <AuthContainter>
      <Txt.H3 text="Logout" />
      <Btn.Basic variant="secondary" text="Logout" onClick={logout}/>
    </AuthContainter>
  )
}
