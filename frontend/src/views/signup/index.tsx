import React, { useState } from 'react'
import { SignForm, Login, DialogContent } from './style'
import CheckBox from '../../components/checkbox'
import Button from '../../components/button'
import FormInput from '../../components/form-input'
import FormError from '../../components/form-error'
import Dialog from '../../components/dialog'
import { createUserService } from '../../api/user'
import { useForm } from "react-hook-form";

interface FormValues {
  account: string;
  email: string;
  password: string;
  isAgree: boolean;
}

const SignUp = () => {
  const [ isShowDialog, setIsShowDialog ] = useState(false)
  const [ errorMsg, setErrorMsg ] = useState('')

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const createUser = handleSubmit(async (data) => {
    const result = await createUserService(data)
    if (result.error) return setError('註冊失敗')
    // 登入
  })

  const setError = (message: string) => {
    setIsShowDialog(true)
    setErrorMsg(message)
  }

  return (
    <>
      <SignForm>
        <div>
          <h2 style={ { color: 'whitesmoke' } } >註冊</h2>
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
          label="郵箱"
          value={ register('email', {
            required: '必填',
            pattern: {
              value: /^\w+\@\w+\.\w+$/,
              message: '請輸入正確的郵箱地址',
            },
          }) }
          type="email"
        />
        <FormError msg={ errors.email?.message } />
        
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
        />
        <FormError msg={ errors.password?.message } />

        <CheckBox value={ register('isAgree', {
            validate: value => value,
          }) } model={ getValues().isAgree } content="我已同意此服務條款" style={ { marginTop: '84px' } } />
        <FormError msg={ errors.isAgree ? '需勾選, 同意此條款' : '' } />

        <Button
          label="註冊"
          style={ { margin: '12px 0 24px', padding: '8px 0' } }
          onClick={ createUser }
          primary
        />

        <sub>
          註冊過？
          <Login to="/sign-in">登入</Login>
        </sub>
        
      </SignForm>

      <Dialog value={ isShowDialog } handler={ setIsShowDialog } >
        <DialogContent>{ errorMsg }</DialogContent>
      </Dialog>
    </>
  )
}

export default SignUp