/* eslint-disable no-undef */
import React from 'react'
import App from '../App'
import { fireEvent, screen } from '@testing-library/react'

describe('<App />', () => {
	it('should render without errors', () => {
		const { getByTestId } = renderAllTheProviders(<App />)

		expect(getByTestId('app')).toBeInTheDocument()
	})

	it('should correctly render/navigate through the pages', () => {
		const { getByTestId } = renderAllTheProviders(<App />)
		expect(getByTestId('home')).toBeInTheDocument()

		fireEvent.click(screen.getByText(/register/i), { button: 0 })
		expect(getByTestId('register')).toBeInTheDocument()

		fireEvent.click(screen.getByText(/admin/i), { button: 0 })
		expect(getByTestId('admin')).toBeInTheDocument()

		fireEvent.click(screen.getByText(/home/i), { button: 0 })
		expect(getByTestId('home')).toBeInTheDocument()
	})
})
