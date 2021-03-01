import React from 'react'

const hotList = [
	{ label: 'Bitcoin', price: 51179, change: 100, changePercent: '1.59%' },
	{ label: 'Ethereum', price: 2067, change: -23, changePercent: '0.83%' },
	{ label: 'ETH', price: 12.31, change: -0.12, changePercent: '5.35%' }
]

const hotCrypto: React.FC = () => {
	const hotCryptoNode = hotList.map(item => {
		const color = item.change >= 0 ? 'text-green' : 'text-red'
		return (
			<article className="px-2 py-1 w-28 flex flex-col justify-between bg-white rounded-lg font-bold text-center" key={item.label}>
				<span className=" text-secondary">{ item.label }</span>
				<div className="flex justify-between items-end">
					<span className="text-xs text-gray">價格</span>
					<span className={ color }>{ item.price }</span>
				</div>
				<div className="flex justify-between items-end">
					<span className="text-xs text-gray">漲跌</span>
					<span className={ color + ' text-sm' }>{ item.changePercent }</span>
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
