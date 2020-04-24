/* eslint-disable no-undef */
import React from 'react'
import { cleanup, fireEvent } from '@testing-library/react'
import App from '../App'
import Navbar from '../Navbar'

afterEach(cleanup)

describe('<Navbar/>', () => {
	it('should render a navbar', () => {
		const { getByTestId } = renderAllTheProviders(<Navbar />)
		expect(getByTestId('navbar')).toBeInTheDocument()
	})

	it('should render 4 links', () => {
		const { queryAllByTestId } = renderAllTheProviders(<Navbar />)
		expect(queryAllByTestId('link')).toHaveLength(4)
	})

	it('should navigate to new page when a link is clicked', () => {
		const { getByTestId, getByText } = renderAllTheProviders(
			<App>
				<Navbar />
			</App>
		)
		expect(getByTestId('home')).toBeInTheDocument()

		fireEvent.click(getByText(/register/i))
		expect(getByTestId('register')).toBeInTheDocument()

		fireEvent.click(getByText(/home/i))
		expect(getByTestId('home')).toBeInTheDocument()
	})
})
