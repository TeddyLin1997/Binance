import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Trade: React.FC = () => {
	const location: { state: string } = useLocation()
	const [ productId, setProductId ] = useState<string>('')

	useEffect(() => {
		setProductId(location.state || 'AAPL')
	})

	return (
		<div>
			<div> { productId } </div>
		</div>
	)
}

export default Trade