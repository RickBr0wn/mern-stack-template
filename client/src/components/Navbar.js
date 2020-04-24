import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/core'

const Navbar = () => {
  return (
    <Flex data-testid="navbar">
      <Link data-testid="link" to="/">
        <Box>Home</Box>
      </Link>
      <Link data-testid="link" to="/register">
        <Box>Register</Box>
      </Link>
      <Link data-testid="link" to="/login">
        <Box>Login</Box>
      </Link>
      <Link data-testid="link" to="/admin">
        <Box>Admin</Box>
      </Link>
    </Flex>
  )
}

export default Navbar
