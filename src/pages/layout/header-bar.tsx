import React from 'react'
import leaf from '../../images/leaf.svg'
import back from '../../images/back.svg'
import notify from '../../images/notify.svg'

const HeaderBar: React.FC = () => {
	const scrollTop = () => {
		const layoutElement = document.getElementById('layout')
		if (layoutElement === null) return

		const distance = layoutElement.scrollTop / 10
		const timerId = setInterval(() => {
			layoutElement.scrollTop -= distance
			if (layoutElement.scrollTop === 0) clearInterval(timerId)
		}, 10)
	}

	return (
		<header className="fixed top-0 p-2 flex justify-between w-full h-12 bg-secondary rounded-b z-10 shadow-2xl">
			<img className="h-full" src={ back } />
			<div className="flex h-full items-center" onClick={ scrollTop }>
				<img className="h-6" src={ leaf } />
				<span className="ml-2">金融</span>
			</div>
			<img className="h-full" src={ notify } />				
		</header>
	)
}

export default React.memo(HeaderBar)