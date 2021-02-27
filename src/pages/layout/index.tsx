import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import home from './images/home.svg'
import finance from './images/finance.svg'
import trade from './images/trade.svg'
import assets from './images/assets.svg'

const navList = [
	{ label: '首頁', value: 'home', icon: home },
	{ label: '金融', value: 'finance', icon: finance },
	{ label: '交易', value: 'trade', icon: trade },
	{ label: '資產', value: 'assets', icon: assets },
]

const Layout: React.FC = (props) => {
	const { children } = props

	const location = useLocation()
	const activePage = location.pathname.replace('/', '')

	const renderNav = navList.map(item => { 
		// active color
		const active = activePage === item.value ? ' text-active ' : ''
		const style: { filter?: string } = {}
		if (activePage === item.value) style['filter'] = 'invert(38%) sepia(18%) saturate(6023%) hue-rotate(0deg) brightness(93%) contrast(95%)'

		return (
			<Link
				className={ active + 'px-4 h-full flex flex-col justify-center items-center fill-current' }
				to={ item.value }
				key={ item.value }
			>
				<img className="w-6 h-6" style={style} src={ item.icon } />
				<div className="mt-1 text-sm">{ item.label }</div>
			</Link>
		)
	})

	return (
		<div>
			<div> Layout </div>
			<main> { children } </main>
			<footer className="fixed bottom-0 w-full h-16 flex justify-around items-center bg-secondary rounded-t-xl">
				{ renderNav }
			</footer>
		</div>
	)
}

export default Layout