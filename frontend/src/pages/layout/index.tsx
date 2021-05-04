import React from 'react'
import HeaderBar from './header-bar'
import NavMenu from './nav-menu'
import './index.css'

const Layout: React.FC = (props) => {
	const { children } = props

	return (
		<div className="flex flex-col text-white">
			<HeaderBar />
			<main id="layout" className="py-2 overflow-y-auto"> { children } </main>
			<NavMenu />
		</div>
	)
}

export default Layout