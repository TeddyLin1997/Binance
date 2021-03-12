import React, { useState, useEffect } from 'react'
import { getHomeStockService } from '../../../api/home'

const HotStock: React.FC = () => {
	const [ homeList, setHomeList ] = useState<Finance[]>([])
	const getStockInfoList = async () => setHomeList(await getHomeStockService())
	useEffect(() => { getStockInfoList() }, [])

	
	const renderHomeList = homeList.map(item => {
		const textColor = Number(item.change) >= 0 ? 'text-green' : 'text-red'
		return (
			<article className="my-3 px-4 w-full h-12 flex justify-between items-center bg-white rounded-lg" key={ item.label }>
				<div className="w-20 text-secondary font-bold text-center">{ item.label }</div>
				<div className={`w-20 font-bold text-right ${textColor}`}>{ item.price }</div>
				<div className={`w-20 font-bold text-right ${textColor}`}>{ item.changePercent }</div>
			</article>
		)
	})

	return (
		<section>
			{ renderHomeList }
		</section>
	)
}

export default React.memo(HotStock)