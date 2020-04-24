import React, { createContext, useContext, useState, useEffect } from 'react'
import Auth from './AuthService'
import PropTypes from 'prop-types'

const AuthContext = createContext()

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    Auth.isAuthenticated()
      .then(data => {
        setIsAuthenticated(data.isAuthenticated)
        setUser(data.user)
        setIsLoaded(true)
      })
      .catch(err => {
        throw new Error(
          'There has been an error collecting the authentication data.',
          err
        )
      })
  }, [])

  return !isLoaded ? (
    <h1>Loading..</h1>
  ) : (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.array,
}

function useAuthContext() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthProvider')
  }
  return context
}

export { AuthProvider, useAuthContext }
