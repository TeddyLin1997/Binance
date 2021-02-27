import React from 'react'
// import { Link } from 'react-router-dom'

const Layout: React.FC = (props) => {
	const { children } = props

	return (
		<div>
			<div> Layout </div>
			<div> { children } </div>
		</div>
	)
}

export default Layout