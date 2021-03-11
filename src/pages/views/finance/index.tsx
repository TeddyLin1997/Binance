import React, { useState } from 'react'
import plus from '../../../images/plus.svg'

const Finance: React.FC = () => {
	const [ isOpen, setIsOpen ] = useState(false)
	const handlePlus = () => setIsOpen(true)

	return (
		<div>
			<div> Finance </div>

			<div onClick={ () => handlePlus() } className="fixed right-4 bottom-20 p-2 bg-active rounded-full opacity-90">
				<img className="w-6 h-6" src={ plus } />
			</div>

			<AddInput isOpen={ isOpen } close={ () => setIsOpen(false) }  />
		</div>
	)
}

const AddInput: React.FC<{ isOpen: boolean, close: () => void }> = (props) => {
	const { isOpen } = props
	const handleClick = (event: React.MouseEvent) => {
		event.stopPropagation()
		event.preventDefault()
		setStockId('')
	}
	const [ stockId, setStockId ] = useState('')
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setStockId(event.target.value)
	}
	return !isOpen ? <div></div> : (
		<div onClickCapture={ handleClick } className="fixed top-0 w-screen h-screen bg-modal">
			<main className="m-auto py-1 px-4 relative top-1/3 w-1/2 bg-secondary rounded">
				<div>
					<h3>輸入代號</h3>
					<input
						className="my-2 p-1 w-full bg-blue"
						type="text"
						name="add"
						value={ stockId }
						onChange={ handleChange }
					/>
				</div>
			</main>
		</div>
	)
}

export default Finance