import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Login from './Login'
import Admin from './Admin'
import Register from './Register'
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'

const LocationDisplay = withRouter(({ location }) => <div data-testid='location-display'>{location.pathname}</div>)

function App() {
	return (
		<div data-testid='app'>
			<Navbar />
			<LocationDisplay />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/register' component={Register} />
				<Route path='/login' component={Login} />
				<Route path='/admin' component={Admin} />
			</Switch>
		</div>
	)
}

export default App
