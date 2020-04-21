import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Login from './Login'
import Admin from './Admin'
import Register from './Register'
// import AuthService from '../services/AuthService'

function App() {
  return (
    <Router >
      <div data-testid="app" >
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
      </div>
    </Router>
  )
}

export default App
