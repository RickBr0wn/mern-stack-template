import React from 'react'
import { Box } from '@chakra-ui/core'
// import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <Box mr={4}>Home</Box>
      </Link>
      <Link to="/admin">
        <Box mr={4}>Admin</Box>
      </Link>
      <Link to="/register">
        <Box mr={4}>Register</Box>
      </Link>
    </div>
  )
}

export default Navbar
