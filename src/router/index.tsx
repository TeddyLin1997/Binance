import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from '../pages/login'
import Layout from '../pages/layout'

const Home = lazy(() => import('../pages/views/home'))
const Finance = lazy(() => import('../pages/views/finance'))
const Trade = lazy(() => import('../pages/views/trade'))
const Assets = lazy(() => import('../pages/views/assets'))

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={ Login } />

				<Layout>
					{/* 加載動畫 */}
					<Suspense fallback={ <div>Loading...</div> }>
						<Switch>
							<Route path="/home" component={ Home } />
							<Route path="/finance" component={ Finance } />
							<Route path="/trade" component={ Trade } />
							<Route path="/assets" component={ Assets } />
						</Switch>
					</Suspense>
				</Layout>
			</Switch>
		</BrowserRouter>
	)
}

export default App