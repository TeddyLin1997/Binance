import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { USER_UPDATE } from '../../store/actionTypes'
import { registerUser, loginUser } from '../../api/login'
import leaf from '../../images/leaf.svg'
import email from '../../images/email.svg'
import password from '../../images/password.svg'

const modeMapping = {
	'login': '登入',
	'register': '註冊',
}

const Login: React.FC = () => {
	// input form
	const [ inputForm, setInputForm ] = useState<{ email: string, password: string }>({
		email: '',
		password: '',
	})
	const handleChange = (event: React.ChangeEvent<HTMLInputElement> ): void => {
		setInputForm({ ...inputForm, [event.target.name]: event.target.value })
	}

	// login and register
	const history = useHistory()
	const toHomePage = () => history.push('/')

	const dispatch = useDispatch()
	const setUserInfo = (uid: string) => dispatch({ type: USER_UPDATE, value: { isLogin: true, uid: uid } })

	const successLogin = (uid: string) => {
		localStorage.setItem('uid', uid)
		setUserInfo(uid)
		toHomePage()
	}

	const login = async () => {
		const result = await loginUser({ ...inputForm })
		if (result.user === undefined) console.log('登入失敗') // message()
		else successLogin(result.user.uid) // message()
	}

	const register = async () => {
		const result = await registerUser({ ...inputForm })
		if (result.user === undefined) return console.log('註冊失敗') // message()
		else successLogin(result.user.uid) // message()
	}
	
	// typeForm template
	const [ mode, setMode ] = useState<'login' | 'register'>('login')
	useEffect(() => setInputForm({ ...inputForm, email: '', password: '' }), [ mode ])

	const RegisterForm = () => {
		return (
			<div className="mt-20 flex flex-col justify-around h-28 font-bold">
				<button onClick={ () => register() }  className="py-2 bg-active rounded-lg">送出</button>
				<button onClick={ () => setMode('login') } className="py-2 bg-secondary rounded-lg">取消</button>
			</div>
		)
	}
	const LoginForm = () => {
		return (
			<>
				<div onClick={ () => setMode('register') }  className="mt-4 mb-10 px-2 text-right text-active font-bold">註冊帳號</div>
				<div className="flex flex-col justify-around h-28 font-bold">
					<button onClick={ () => login() } className="py-2 bg-active rounded-lg">登入</button>
					<button onClick={ () => login() } className="py-2 bg-secondary rounded-lg">訪客模式</button>
				</div>
			</>
		)
	}
	const TypeForm = (props: { mode: string }) => {
		return props.mode === 'login' ? <LoginForm /> : <RegisterForm />
	}

	// final
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
				<div className="text-center text-2xl font-bold">{ modeMapping[mode] }</div>

				<div className="mt-10 flex items-center">
					<img className="w-8 h-8" src={ email } />
					<input
						className="mx-2 p-1 w-52 border-b-2 border-secondary bg-primary"
						value={ inputForm.email }
						name="email"
						type="text"
						autoComplete="off"
						placeholder="信箱"
						onChange={ handleChange }
					/>
				</div>

				<div className="mt-10 flex items-center">
					<img className="w-8 h-8" src={ password } />
					<input
						className="mx-2 p-1 w-52 border-b-2 border-secondary bg-primary"
						value={ inputForm.password }
						name="password"
						type="password"
						placeholder="密碼"
						onChange={ handleChange }
					/>
				</div>

				<TypeForm mode={ mode }/>

			</main>

			<footer className="mt-6 text-active text-xs">- 訪客模式下將在不保存任何紀錄</footer>
		</div>
	)
}

export default Login