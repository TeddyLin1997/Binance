import React from 'react'

const hotList = [
	{ label: 'Bitcoin', price: 51179, change: 100, percent: '1.59%' },
	{ label: 'Ethereum', price: 2067, change: -23, percent: '0.83%' },
	{ label: 'ETH', price: 12.31, change: -0.12, percent: '5.35%' }
]

const hotCrypto: React.FC = () => {
	const hotCryptoNode = hotList.map(item => {
		const color = item.change >= 0 ? 'text-green' : 'text-red'
		return (
			<div className="px-2 py-1 w-28 flex flex-col justify-between bg-white rounded-lg font-bold text-center" key={item.label}>
				<span className=" text-secondary">{ item.label }</span>
				<div className="flex justify-between items-end">
					<span className="text-xs text-gray">價格</span>
					<span className={ color }>{ item.price }</span>
				</div>
				<div className="flex justify-between items-end">
					<span className="text-xs text-gray">漲跌</span>
					<span className={ color + ' text-sm' }>{ item.percent }</span>
				</div>
			</div>
		)
	})
  
	return (
		<React.Fragment>
			{ hotCryptoNode }
		</React.Fragment>
	)
}

export default React.memo(hotCrypto)
