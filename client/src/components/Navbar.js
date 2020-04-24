import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/admin">
        <div>Admin</div>
      </Link>
      <Link to="/register">
        <div>Register</div>
      </Link>
    </div>
  )
}

export default Navbar
