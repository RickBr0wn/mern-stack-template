// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react'
import PropTypes from 'prop-types'
import '@testing-library/jest-dom/extend-expect'
import fetch from 'node-fetch'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { AuthProvider } from './services/AuthContext'
import { ThemeProvider, theme } from '@chakra-ui/core'

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider the={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  )
}

AllTheProviders.propTypes = {
  children: PropTypes.object,
}

const renderWithRouter = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}

const renderAllTheProviders = (ui, options) =>
  renderWithRouter(ui, { wrapper: AllTheProviders, ...options })

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

global.fetch = fetch
global.renderWithContext = renderWithContext
global.renderAllTheProviders = renderAllTheProviders
global.renderWithRouter = renderWithRouter
