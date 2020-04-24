import React, { useState } from 'react'
// import AuthService from '../services/AuthService'
// import { useAuthContext } from '../services/AuthContext'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // const authContext = useAuthContext()
  const isDisabled = !username && !password

  const handleSubmit = e => {
    e.preventDefault()
    // const user = { username, password, role: 'admin' }
    // AuthService.login(user).then(({ isAuthenticated, user, message }) => {
    //   if (isAuthenticated) {
    //     authContext.setUser(user)
    //     authContext.setIsAuthenticated(isAuthenticated)
    //     props.history.push('/todos')
    //   } else {
    //     setMessage(message)
    //   }
    // })
  }

  return (
    <div data-testid="login">
      <h1>login</h1>
      <form data-testid="form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button data-testid="button" type="submit" disabled={isDisabled}>
          LOG IN
        </button>
      </form>
    </div>
  )
}

export default Login
