import React from 'react'

const hotStockList = [
	{ label: 'AAPL', price: 140, change: 1.27, changePercent: '1.2%'},
	{ label: 'TSLA', price: 823, change: 36, changePercent: '1.28%' },
	{ label: 'NFLX', price: 567, change: -37, changePercent: '0.23%' },
	{ label: 'GOOG', price: 3012, change: 53, changePercent: '4.43%' },
	{ label: 'TSM', price: 137, change: 3.51, changePercent: '3.14%' },
	{ label: 'NVDA', price: 584, change: -7, changePercent: '0.54%' },
	{ label: 'AMD', price: 90, change: -4, changePercent: '0.33%' },
	{ label: 'CRM', price: 277, change: 25, changePercent: '10.83%' },
	{ label: 'FB', price: 256, change: -5, changePercent: '0.28%' },
	{ label: 'MSFT', price: 231, change: -19, changePercent: '0.99%' },
]

const renderHotList = hotStockList.map(item => {
	const textColor = item.change >= 0 ? 'text-green' : 'text-red'
	return (
		<article className="my-3 px-4 w-full h-12 flex justify-between items-center bg-white rounded-lg" key={ item.label }>
			<div className="w-20 text-secondary font-bold text-center">{ item.label }</div>
			<div className={`w-20 font-bold text-right ${textColor}`}>{ item.price }</div>
			<div className={`w-20 font-bold text-right ${textColor}`}>{item.change <0 ? '-' : ''}{ item.changePercent }</div>
		</article>
	)
})

const HotStock: React.FC = () => {
	return (
		<section>
			{ renderHotList }
		</section>
	)
}

export default HotStock