import React, { useState } from 'react'
import leaf from './images/leaf.svg'
import account from './images/account.svg'
import password from './images/password.svg'

const Login: React.FC = () => {
	const [ loginForm, setLoginForm ] = useState<{ account: string, password: string }>({
		account: '',
		password: '',
	})

	const handleInput = (event: React.ChangeEvent<HTMLInputElement> ): void => {
		setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
	}

	return (
		<div className="py-14 flex flex-col items-center">
			<header className="flex justify-center items-center">
				<img className="w-12 h-12" src={ leaf } />
				<div className="ml-4 font-bold">
					<div className="text-2xl text-yellow">虛擬交易所</div>
					<div className="text-base text-secondary">VIRTUAL EXCHANGE</div>
				</div>
			</header>

			<main className="mt-28">
				<div className="text-center text-2xl font-bold">登入</div>

				<div className="my-8 flex items-center">
					<img className="w-8 h-8" src={ account } />
					<input
						className="mx-2 p-1 border-b-2 border-secondary bg-primary"
						name="account"
						type="text"
						autoComplete="off"
						placeholder="帳號"
						onInput={ handleInput }
					/>
				</div>

				<div className="my-10 flex items-center">
					<img className="w-8 h-8" src={ password } />
					<input
						className="mx-2 p-1 border-b-2 border-secondary bg-primary"
						name="password"
						type="password"
						placeholder="密碼"
						onInput={ handleInput }
					/>
				</div>

				<div className="flex flex-col justify-around h-28 font-bold">
					<button className="py-2 bg-secondary rounded-lg">訪客模式</button>
					<button className="py-2 bg-active rounded-lg">登入</button>
				</div>

			</main>

			<footer className="mt-20 text-active text-xs">- 訪客模式下將在不保存任何紀錄</footer>
		</div>
	)
}

export default Login