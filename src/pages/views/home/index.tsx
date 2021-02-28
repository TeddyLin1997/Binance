import React from 'react'
import banner1 from '../../../images/banner1.jpg'
import go from '../../../images/go.svg'
import arrow from '../../../images/arrow.svg'
import global from '../../../images/global.svg'
import wallet from '../../../images/wallet.svg'

const hotList = [
	{ label: 'Bitcoin', price: 51179, change: 100, percent: '1.59%' },
	{ label: 'Ethereum', price: 2067, change: -23, percent: '0.83%' },
	{ label: 'ETH', price: 12.31, change: -0.12, percent: '5.35%' }
]

const Home: React.FC = () => {
	const hotCrypto = hotList.map(item => {
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
		<div>
			<header className="rounded-lg overflow-hidden">
				<img src={banner1} />
			</header>

			<main>
				<div className="my-2 flex items-center">
					<img className="mr-2 h-4" src={arrow}/>
					<span>快捷功能</span>
				</div>
				<div className="flex justify-between font-bold">
					<div className="relative mr-2 py-1 px-2 w-1/2 h-18 bg-active rounded-lg">
						<div className="mb-2 text-blue">電子錢包</div>
						<span className="text-sm">前往</span>
						<img className="inline-block h-3" src={ go } />
						<img className="absolute bottom-2 right-4 h-10 transform -rotate-12" src={wallet} />
					</div>
					<div className="relative ml-2 py-1 px-2 w-1/2 h-18 bg-secondary rounded-lg">
						<div className="mb-2">資產管理</div>
						<span className="text-sm">前往</span>
						<img className="inline-block h-3" src={ go } />
						<img className="absolute bottom-2 right-4 h-10 transform -rotate-12" src={global} />
					</div>
				</div>

				<div className="my-2 flex items-center">
					<img className="mr-2 h-4" src={arrow}/>
					<span>熱門貨幣</span>
				</div>
				<div className="flex justify-between">
					{ hotCrypto }
				</div>
			</main>

			<footer>
				<div className="my-2 flex items-center">
					<img className="mr-2 h-4" src={arrow}/>
					<span>熱門股票</span>
				</div>
			</footer>
		</div>
	)
}

export default Home
