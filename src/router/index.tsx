import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from '../pages/login'

import Layout from '../pages/layout'
import Home from '../pages/views/home'
import Finance from '../pages/views/finance'
import Trade from '../pages/views/trade'
import Assets from '../pages/views/assets'

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={ Login } />

				<Layout>
					<Switch>
						<Route exact path="/" component={ Home } />
						<Route path="/finance" component={ Finance } />
						<Route path="/trade" component={ Trade } />
						<Route path="/assets" component={ Assets } />
					</Switch>
				</Layout>
			</Switch>
		</BrowserRouter>
	)
}

export default App