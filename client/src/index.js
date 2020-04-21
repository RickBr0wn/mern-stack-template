import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { CSSReset, ThemeProvider, theme } from '@chakra-ui/core'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CSSReset />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
