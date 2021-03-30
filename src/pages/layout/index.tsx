import React from 'react'
import HeaderBar from './header-bar'
import NavMenu from './nav-menu'

const Layout: React.FC = (props) => {
	const { children } = props

	return (
		<div className="text-white">
			<HeaderBar />
			<main id="layout" className="py-16 h-screen overflow-auto"> { children } </main>
			<NavMenu />
		</div>
	)
}

export default Layout