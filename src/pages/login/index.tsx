import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { USER_UPDATE } from '../../store/action-type'
import leaf from '../../images/leaf.svg'
import account from '../../images/account.svg'
import password from '../../images/password.svg'

const Login: React.FC = () => {
	const [ loginForm, setLoginForm ] = useState<{ account: string, password: string }>({
		account: '',
		password: '',
	})
	const handleChange = (event: React.ChangeEvent<HTMLInputElement> ): void => {
		setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
	}

	// router
	const history = useHistory()
	const handleClick = () => {
		getUserInfo()
		toHomePage()
	}

	const dispatch = useDispatch()
	const toHomePage = () => history.push('/')
	const getUserInfo = () => {
		dispatch({type: USER_UPDATE, user: { isLogin: true, name: 'chris' } })
	}


	return (
		<div className="py-10 flex flex-col items-center text-white">
			<header className="flex justify-center items-center">
				<img className="w-12 h-12" src={ leaf } />
				<div className="ml-4 font-bold">
					<div className="text-2xl text-yellow">虛擬交易所</div>
					<div>VIRTUAL EXCHANGE</div>
				</div>
			</header>

			<main className="mt-28">
				<div className="text-center text-2xl font-bold">登入</div>

				<div className="mt-10 flex items-center">
					<img className="w-8 h-8" src={ account } />
					<input
						className="mx-2 p-1 w-52 border-b-2 border-secondary bg-primary"
						name="account"
						type="text"
						autoComplete="off"
						placeholder="帳號"
						onChange={ handleChange }
					/>
				</div>

				<div className="mt-10 flex items-center">
					<img className="w-8 h-8" src={ password } />
					<input
						className="mx-2 p-1 w-52 border-b-2 border-secondary bg-primary"
						name="password"
						type="password"
						placeholder="密碼"
						onChange={ handleChange }
					/>
				</div>

				<div className="mt-4 mb-10 px-2 text-right text-active font-bold">註冊帳號</div>

				<div className="flex flex-col justify-around h-28 font-bold">
					<button onClick={ handleClick } className="py-2 bg-secondary rounded-lg">訪客模式</button>
					<button onClick={ handleClick } className="py-2 bg-active rounded-lg">登入</button>
				</div>

			</main>

			<footer className="mt-6 text-active text-xs">- 訪客模式下將在不保存任何紀錄</footer>
		</div>
	)
}

export default Login