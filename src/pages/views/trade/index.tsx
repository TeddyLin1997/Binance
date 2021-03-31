import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

type product = {
	id: string;
	price: number;
	change: number;
	changePercent: string;
}

const getRandom = (range: number): number => Math.floor(Math.random() * (range) + 1)

const Trade: React.FC = () => {
	const location: { state: string } = useLocation()
	const [ product, setProduct ] = useState<product>({
		id: '',
		price: 140.23,
		change: 10,
		changePercent: '10.3%',
	})
	
	useEffect(() => {
		setProduct({ ...product, id: location.state || 'AAPL' })
	}, [])

	// 最佳五檔資訊
	const sellQuoteList = Array.from(Array(5).keys()).map(item => {
		return (
			<div className="flex justify-between" key={ item }>
				<span> { getRandom(100) } </span>
				<span> { product.price + (item + 1) } </span>
			</div>
		)
	})
	const buyQuoteList = Array.from(Array(5).keys()).map(item => {
		return (
			<div className="flex justify-between" key={ item }>
				<span> { getRandom(100) } </span>
				<span> { product.price - (item + 1) } </span>
			</div>
		)
	})

	// trade form
	const [ tradeForm, setTradeForm ] = useState({
		price: 0,
		amount: 1,
	})
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTradeForm({ ...tradeForm, [event.target.name]: event.target.value })
	}
	
	

	return (
		<div className="flex flex-col">
			<header className="my-2 px-4 flex items-end">
				<div className="mr-auto text-4xl"> { product.id } </div>
				<div className={ product.change >= 0 ? 'text-green font-bold' : 'text-red font-bold' }>
					<span className="text-3xl"> { product.price } </span>
					<span className="mx-2"> { product.changePercent } </span>
				</div>
			</header>

			<main>
				<div className="my-2 w-full h-80 bg-black flex">
					<div className="m-auto">線圖</div>
				</div>

				<div className="text-center">
					<h4 className="my-2">最佳五檔</h4>
					<div className="mx-4 w-2/5 inline-flex flex-col text-green"> { buyQuoteList } </div>
					<div className="mx-4 w-2/5 inline-flex flex-col text-red"> { sellQuoteList } </div>
				</div>
			</main>
			
			<footer className="p-2 text-xl text-white text-center">
				<div className="my-4 flex justify-around">
					<span>價格</span>
					<input name="price" className="w-4/5 bg-transparent border-b border-active" type="text" onChange={ handleChange }/>
				</div>
				<div className="my-4 flex justify-around">
					<span>股數</span>
					<input name="amount" className="w-4/5 bg-transparent border-b border-active" type="text"/>
				</div>

				<div className="flex">
					<button className="m-2 p-2 w-1/2 text-center bg-green rounded-lg" >賣出</button>
					<button className="m-2 p-2 w-1/2 text-center bg-red rounded-lg" >買入</button>
				</div>
			</footer>
		</div>
	)
}

export default Trade