// AuthGuard.tsx
import React from 'react'
import { Navigate } from 'react-router-dom'

import { useAppSelector } from '../hooks/redux'

const AuthGuard = (Component: React.ComponentType) => {
  const AuthenticatedComponent = () => {
    const isAuthenticated = useAppSelector(
      (state) => state.auth.isAuthenticated,
    )

    if (!isAuthenticated) {
      return <Navigate to="/" />
    }

    return <Component />
  }

  return AuthenticatedComponent
}

export default AuthGuard
