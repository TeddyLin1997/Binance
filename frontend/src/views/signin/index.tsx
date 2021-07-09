import React, { useState, KeyboardEvent, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { setToken } from 'action/user'
import { signInService } from '@/api/user'
import { SignForm, SubLink, SubLogin } from './index.style'
import FormInput from '@/components/form-input'
import FormError from '@/components/form-error'
import FormButton from '@/components/form-button'
import useLoader from '@/hooks/useLoader'
import Button from '@/components/button'

type LoginForm = Omit<UserForm, 'email'>

const SignIn = () => {
  // router
  const history = useHistory()
  const location = useLocation()

  // form
  const state = location.state as LoginForm  
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ defaultValues: state })

  const handleEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter') login()
  }

  // login
  const dispatch = useDispatch()
  const [ isLoading, loadAction ] = useLoader()
  const login = handleSubmit(async data => {
    loadAction('load')
    const token = await signInService(data)
    loadAction('unload')

    if (token.error) {
      setError(token.result)
      return
    }

    dispatch(setToken(token.result))
    history.push('/')
  })

  // error
  const [ errorMsg, setErrorMsg ] = useState('')
  const setError = (message: string) => setErrorMsg(message)

  // init
  useEffect(() => { if (state) login() }, [])


  const visitorLogin = () => {
    setValue('account', 'Visitor')
    setValue('password', 'qweqweqwe')
    login()
  }

  return (
    <>
      <SignForm onSubmit={ login }>
        <div>
          <h2 style={ { color: 'whitesmoke' } } >登入</h2>
          <sub>歡迎加入幣安</sub>
        </div>
        
        <fieldset disabled={ isLoading } >
          <FormInput
            label="使用者名稱"
            value={ register('account', {
              required: '必填',
              pattern: {
                value: /^\w{4,16}$/,
                message: '必須介於 4 到 16 個字元',
              },
            }) }
          />
          <FormError msg={ errors.account?.message || '' } />
          
          <FormInput
            label="密碼"
            value={ register('password', {
              required: '必填',
              pattern: {
                value: /^\w{8,16}$/,
                message: '必須介於 8 到 16 個字元'
              }
            }) }
            type="password"
            onKeyUp={ handleEnter }
          />
          <FormError msg={ errors.password?.message || '' } />

          <FormButton label="登入"/>
          <FormError msg={ errorMsg } />
        </fieldset>

        <sub>
          尚未註冊？ {'\u00A0'}
          <SubLink to="/sign-up">註冊</SubLink>
          <SubLogin onClick={ visitorLogin }>訪客登入</SubLogin>
        </sub>
      </SignForm>
    </>
  )
}

export default SignIn