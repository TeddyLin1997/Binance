import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getAllStockService, getAllCryptoService } from '../../../api/finance'
import plus from '../../../images/plus.svg'

const financeList: {
	stock: Finance[];
	crypto: Finance[];
} = {
	stock: [],
	crypto: []
}
const getFinanceList = async () => {
	financeList.stock = await getAllStockService()
	financeList.crypto = await getAllCryptoService()
}
getFinanceList()

const Finance: React.FC = () => {
	const [ activeType, setActiveType ] = useState< 'stock' | 'crypto' >('stock')

	const getTypeClass = (value: string) => {
		return value === activeType ? 'border-active text-active font-bold ' : 'border-none '
	}

	return (
		<>
			<header className="flex text-center">
				<div onClick={ () => setActiveType('stock') } className={ getTypeClass('stock') + 'p-2 w-1/2 border-b-4 transition-colors duration-300' } >股票</div>
				<div onClick={ () => setActiveType('crypto') } className={ getTypeClass('crypto') + 'p-2 w-1/2 border-b-4 transition-colors duration-300' } >加密貨幣</div>
			</header>

			<section>
				<header className="mt-4 mb-2 px-6 flex justify-between text-gray text-xs text-center">
					<span className="w-20">名稱</span>
					<span className="w-20">價格</span>
					<span className="w-20">漲跌</span>
				</header>
				<FinanceList data={ financeList[activeType] } />
			</section>

			<AddInput />
		</>
	)
}

const FinanceList: React.FC<{ data: Finance[] }> = (props) => {
	const history = useHistory()
	const { data } = props

	const tradeProduct = (item : Finance) => {
		history.push('/trade', item.label)
	}

	const renderList  = data.map(item => {
		const textColor = item.change >= 0 ? 'text-green' : 'text-red'
		return (
			<article onClick={ () => tradeProduct(item) } className="mb-3 px-6 w-full h-12 flex justify-between items-center bg-white text-center" key={ item.label }>
				<div className="w-20 text-secondary font-bold">{ item.label }</div>
				<div className={`w-20 font-bold text-right ${textColor}`}>{ item.price }</div>
				<div className={`w-20 font-bold text-right ${textColor}`}>{ item.changePercent }</div>
			</article>
		)
	})

	return (
		<section>
			{ renderList }
		</section>	
	)
}

// dialog
const AddInput: React.FC = () => {
	const [ isOpen, setIsOpen ] = useState(false)

	const InputDialog: React.FC = () => {
		const [ stockId, setStockId ] = useState('')
		const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setStockId(event.target.value)
		const handleClick = () => {
			setStockId('')
			setIsOpen(false)
		}

		return !isOpen ? <div></div> : (
			<div onClick={ () => handleClick() } className="fixed top-0 w-screen h-screen bg-modal">
				<main onClick={ (event) => event.stopPropagation() } className="m-auto py-2 px-4 relative top-1/3 w-1/2 bg-secondary rounded">
					<h3>輸入代號</h3>
					<input
						className="my-2 p-1 w-full bg-blue"
						type="text"
						name="add"
						value={ stockId }
						onChange={ handleChange }
						autoComplete="off"
					/>
				</main>
			</div>
		)
	}

	return (
		<>
			<div onClick={ () => setIsOpen(true) } className="fixed right-4 bottom-20 p-2 bg-active rounded-full opacity-90">
				<img className="w-6 h-6" src={ plus } />
			</div>
			<InputDialog />
		</>
	)
}

export default Finance