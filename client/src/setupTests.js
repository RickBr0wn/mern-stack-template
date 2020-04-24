// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React, { Fragment } from 'react'
import '@testing-library/jest-dom/extend-expect'
import fetch from 'node-fetch'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

const AllTheProviders = ({ children }) => {
	return <Fragment>{children}</Fragment>
}

global.fetch = fetch
global.renderWithRouter = (ui, { route = '/', history = createMemoryHistory({ initialEntries: [ route ] }) } = {}) => {
	return {
		...render(<Router history={history}>{ui}</Router>),
		// adding `history` to the returned utilities to allow us
		// to reference it in our tests (just try to avoid using
		// this to test implementation details).
		history
	}
}
global.renderAllTheProviders = (ui, options) => renderWithRouter(ui, { wrapper: AllTheProviders, ...options })
