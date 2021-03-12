import React, { useState, useEffect } from 'react'
import { getHomeCryptoService } from '../../../api/home'

const hotCrypto: React.FC = () => {
	const [ hotList, setHotList ] = useState<Finance[]>([])
	const getCryptoInfoList = async () => setHotList(await getHomeCryptoService())
	useEffect(() => { getCryptoInfoList() }, [])

	const hotCryptoNode = hotList.map(item => {
		const color = item.change >= 0 ? 'text-green' : 'text-red'
		return (
			<article className="px-2 py-1 w-28 h-20 flex flex-col justify-between bg-white rounded-lg font-bold text-center text-sm" key={item.label}>
				<span className=" text-secondary">{ item.label }</span>
				<div className="flex justify-between items-end">
					<span className="text-gray transform scale-90">價格</span>
					<span className={ color }>{ item.price }</span>
				</div>
				<div className="flex justify-between items-end">
					<span className="text-gray transform scale-90">漲跌</span>
					<span className={ color }>{ item.changePercent }</span>
				</div>
			</article>
		)
	})
  
	return (
		<section className="flex justify-between">
			{ hotCryptoNode }
		</section>
	)
}

export default React.memo(hotCrypto)
