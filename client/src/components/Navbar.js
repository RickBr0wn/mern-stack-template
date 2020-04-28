import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/core'

import { useAuthContext } from '../services/AuthContext'

// user : {username: "testing123", role: "admin"}

const Navbar = () => {
  const { user } = useAuthContext()

  return (
    <Flex
      data-testid="navbar"
      padding="5px 20px"
      width="100vw"
      backgroundColor="#333333"
      color="#ffffff"
      justifyContent="space-between">
      <Link data-testid="link" to="/">
        <Box>Home</Box>
      </Link>
      <Flex>
        {user.username ? (
          <>
            <Link data-testid="link" to="/admin">
              <Box marginRight="25px">Admin</Box>
            </Link>
            <Link to="/todos">
              <Box>Todos</Box>
            </Link>
          </>
        ) : (
          <>
            <Link data-testid="link" to="/register">
              <Box marginRight="25px">Register</Box>
            </Link>
            <Link data-testid="link" to="/login">
              <Box>Login</Box>
            </Link>
          </>
        )}
      </Flex>
    </Flex>
  )
}

export default Navbar
