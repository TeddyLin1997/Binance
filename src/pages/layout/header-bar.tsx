import React from 'react'
import leaf from '../../images/leaf.svg'
import back from '../../images/back.svg'
import notify from '../../images/notify.svg'

const HeaderBar: React.FC = () => {
	return (
		<header className="fixed top-0 p-2 flex justify-between w-full h-12 bg-secondary rounded-b">
			<img className="h-full" src={ back } />
			<div className="flex h-full items-center">
				<img className="h-6" src={ leaf } />
				<span className="ml-2">金融</span>
			</div>
			<img className="h-full" src={ notify } />				
		</header>
	)
}

export default React.memo(HeaderBar)