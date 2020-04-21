/* eslint-disable no-undef */
import React from 'react'
import App from './App'

// NOTE: render is attached to the global object
// see: setupTests.js
describe('<App />', () => {
  it('should render without errors', () => {
    const { getByTestId } = render(<App />)

    expect(getByTestId('app')).not.toBeNull()
    expect(getByTestId('app')).toHaveTextContent(
      'Webpack & React minimal boilerplate.'
    )
  })
})
