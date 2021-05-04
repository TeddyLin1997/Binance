import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { RootStateOrAny, useSelector } from 'react-redux'

import Login from '../pages/login'
import Layout from '../pages/layout'

const Home = lazy(() => import('../pages/views/home'))
const Finance = lazy(() => import('../pages/views/finance'))
const Trade = lazy(() => import('../pages/views/trade'))
const Assets = lazy(() => import('../pages/views/assets'))

let layoutElement: HTMLElement | null = null

const ScrollToTop: React.FC = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		if (layoutElement === null) layoutElement = document.getElementById('layout')
		if (layoutElement !== null) layoutElement.scrollTop = 0
	}, [pathname])

	return null
}

const App: React.FC = () => {
	const isLogin = useSelector((state: RootStateOrAny)  => state.user.isLogin)

	return (
		<BrowserRouter>
			<ScrollToTop />
			<Switch>
				<Redirect exact from="/" to={ `/${isLogin ? 'home' : 'login'}` }/>
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