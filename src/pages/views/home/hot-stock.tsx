import React, { useState, useEffect } from 'react'
import { getHomeStockService } from '../../../api/home'

const HotStock: React.FC = () => {
	const [ homeList, setHomeList ] = useState<Finance[]>([])
	const getStockInfoList = async () => setHomeList(await getHomeStockService())
	useEffect(() => { getStockInfoList() }, [])

	
	const renderHomeList = homeList.map(item => {
		const textColor = Number(item.change) >= 0 ? 'text-green' : 'text-red'
		return (
			<article className="mb-3 px-4 w-full h-12 flex justify-between items-center text-center bg-white rounded-lg" key={ item.label }>
				<div className="w-20 text-secondary font-bold">{ item.label }</div>
				<div className={`w-20 font-bold ${textColor}`}>{ item.price.toFixed(2) }</div>
				<div className={`w-20 font-bold ${textColor}`}>{ item.changePercent }</div>
			</article>
		)
	})

	return (
		<section>
			<header className="my-1 px-4 flex justify-between text-gray text-xs text-center">
				<span className="w-20">名稱</span>
				<span className="w-20">價格</span>
				<span className="w-20">漲跌</span>
			</header>
			{ renderHomeList }
		</section>
	)
}

export default React.memo(HotStock)