import { useAuthStore } from '#/store/auth'
import { LoginContainer } from '#/views/auth/authLogin.view'
import { ReactNode } from 'react'
import { Route } from 'wouter'

interface ProtectedRoute {
  path: string
  children: ReactNode
}

export const ProtectedRoute = (props: ProtectedRoute) => {
  const { path, children } = props

  const loggedIn = useAuthStore((state) => state.loggedIn)

  if (!loggedIn) {
    return (
      <Route path={path}>
        <LoginContainer href={path} />
      </Route>
    )
  }

  return <Route path={path}>{children}</Route>
}
