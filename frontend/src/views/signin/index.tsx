import React, { useState, KeyboardEvent, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { SignInService } from '@/api/user'
import { SignForm, SubLink } from './index.style'
import FormInput from '@/components/form-input'
import FormError from '@/components/form-error'
import FormButton from '@/components/form-button'
import useLoader from '@/hooks/useLoader'

type LoginForm = Omit<User, 'email'>

const SignIn = () => {
  const history = useHistory()
  const location = useLocation()
  const state = location.state as LoginForm  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ defaultValues: state })

  const handleEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter') login()
  }

  const [ isLoading, loadAction ] = useLoader()

  const login = handleSubmit(async data => {
    loadAction('load')
    const result = await SignInService(data)
    loadAction('unload')

    if (result.error && typeof result.result === 'string') setError(result.result)
    else history.push('/')
    // 儲存 user info
  })

  const [ errorMsg, setErrorMsg ] = useState('')
  const setError = (message: string) => setErrorMsg(message)

  useEffect(() => { if (state) login() }, [])

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
        </sub>
      </SignForm>
    </>
  )
}

export default SignIn