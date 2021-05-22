import React, { useState } from 'react'
import { SignForm, Login } from './style'
import CheckBox from '../../components/checkbox'
import Button from '../../components/button'
import FormInput from '../../components/form-input'

const buttonStyle = {
  margin: '12px 0 24px',
  padding: '8px 0',
}

const SignUp = () => {
  const [ account, setAccount ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ isAgree, setIsAgree ] = useState(false)

  return (
    <SignForm>
      <div>
        <h2 style={ { color: 'whitesmoke' } } >註冊</h2>
        <sub>歡迎加入幣安</sub>
      </div>

      <FormInput
        label="使用者名稱"
        onChange={ event => setAccount(event.target.value) }
      />

      <FormInput
        label="郵箱"
        onChange={ event => setEmail(event.target.value) }
        type="email"
      />
      
      <FormInput
        label="密碼"
        onChange={ event => setPassword(event.target.value) }
        type="password"
      />

      <CheckBox value={ isAgree } handler={ setIsAgree } content="同意此服務條款" style={ { marginTop: '84px' } } />

      <Button
        label="註冊"
        style={ buttonStyle }
        onClick={ () => {} }
        primary
      />

      <sub>
        註冊過？
        <Login to="/sign-in">登入</Login>
      </sub>
      
    </SignForm>
  )
}

export default SignUp