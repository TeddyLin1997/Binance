import React, { useState, KeyboardEvent } from 'react'
import { useForm } from "react-hook-form";
import { SignInService } from '../../api/user'
import { SignForm, SignUp, DialogContent } from './style'
import Button from '../../components/button'
import FormInput from '../../components/form-input'
import FormError from '../../components/form-error'
import Dialog from '../../components/dialog'

const SignIn = () => {
  const [ isShowDialog, setIsShowDialog ] = useState(false)
  const [ errorMsg, setErrorMsg ] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<User, 'email'>>()

  const handleEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter') login()
  }

  const login = handleSubmit(async (data) => {
    const result = await SignInService(data)
    if (result.error) return setError('登入失敗')
    // 跳轉
  })

  const setError = (message: string) => {
    setIsShowDialog(true)
    setErrorMsg(message)
  }

  return (
    <>
      <SignForm>
        <div>
          <h2 style={ { color: 'whitesmoke' } } >登入</h2>
          <sub>歡迎加入幣安</sub>
        </div>

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
        <FormError msg={ errors.account?.message } />
        
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
        <FormError msg={ errors.password?.message } />

        <Button
          label="登入"
          style={ { margin: '36px 0 24px', padding: '8px 0' } }
          onClick={ login }
          primary
        />

        <sub>
          尚未註冊？ {'\u00A0'}
          <SignUp to="/sign-up">註冊</SignUp>
        </sub>
        
      </SignForm>

      <Dialog value={ isShowDialog } handler={ setIsShowDialog } >
        <DialogContent>{ errorMsg }</DialogContent>
      </Dialog>
    </>
  )
}

export default SignIn