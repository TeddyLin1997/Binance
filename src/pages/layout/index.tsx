import React from 'react'
import HeaderBar from './header-bar'
import NavMenu from './nav-menu'

const Layout: React.FC = (props) => {
	const { children } = props

	return (
		<div className="text-white">
			<HeaderBar />
			<main className="pt-14 pb-16"> { children } </main>
			<NavMenu />
		</div>
	)
}

export default Layout