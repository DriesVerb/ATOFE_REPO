import { authStore } from '#/store/auth'
import { ReactNode } from 'react'
import { Redirect, Route } from 'wouter'

 interface ProtectedProps {
  path: string
  children: ReactNode
}

export const ProtectedRoute = (props: ProtectedProps) => {
  const { path, children } = props
  const loggedIn = authStore.state.loggedIn

  console.log(loggedIn)

  if (!loggedIn) return <Redirect to='/login' />

  return <Route path={path}>{children}</Route>
}
