import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './services/AuthContext'
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core'

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CSSReset />
        <App />
      </AuthProvider>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
)
