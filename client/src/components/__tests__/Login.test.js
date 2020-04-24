/* eslint-disable no-undef */
import React from 'react'
import { cleanup } from '@testing-library/react'
import Login from '../Login'
// import { Router } from 'react-router-dom'
// import { useAuthContext } from 'useAuthContext'
// import { AuthProvider } from '../../services/AuthContext'

afterEach(cleanup)

describe('<Login/>', () => {
  it('should render a login screen', () => {
    const { getByTestId } = renderAllTheProviders(<Login />)
    expect(getByTestId(/login/i)).toBeInTheDocument()
  })

  it('should render a form ', () => {
    const { getByTestId } = renderAllTheProviders(<Login />)
    expect(getByTestId('form')).toBeInTheDocument()
  })

  it('should render an input with the label `username`', () => {
    const { getByLabelText } = renderAllTheProviders(<Login />)
    expect(getByLabelText(/username/i)).toBeInTheDocument()
  })

  it('should render an input with the label `password`', () => {
    const { getByLabelText } = renderAllTheProviders(<Login />)
    expect(getByLabelText(/password/i)).toBeInTheDocument()
  })

  it('should render a `log in` button', () => {
    const { getByTestId } = renderAllTheProviders(<Login />)
    expect(getByTestId(/button/i)).toBeInTheDocument()
  })
})
