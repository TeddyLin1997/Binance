import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../views/layout'
import Home from '../views/home'
import About from '../views/about'
import Article from '../views/article'

function App (): JSX.Element {
	return (
		<BrowserRouter>
			<Layout />
			<Switch>
				<Route path="/" component={ Home }></Route>
				<Route path="/about" component={ About }></Route>
				<Route path="/article" component={ Article }></Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App