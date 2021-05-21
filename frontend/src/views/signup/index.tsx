import React, { useState } from 'react'
import { SignForm, FormItem, Look, Accept, Checkbox, SubLabel, Button, Login } from './style'
import canSee from '../../assets/images/can-see.svg'
import cannotSee from '../../assets/images/cannot-see.svg'

const SignUp = () => {
  const [ isBlank, setIsBlank ] = useState(true)
  const handleBlank = () => setIsBlank(prev => !prev)
  return (
    <SignForm>
      <div>
        <h2 style={ { color: 'whitesmoke' } } >註冊</h2>
        <sub>歡迎加入幣安</sub>
      </div>

      <FormItem>
        <div>郵箱</div>
        <input type="text"/>
      </FormItem>
      <FormItem>
        <div>密碼</div>
        <input type={ isBlank ? 'password' : 'text' } />
        <Look src={ isBlank ? cannotSee : canSee } onClick={ handleBlank } draggable="false" />
      </FormItem>
      
      <Accept>
        <input style={ { display: 'none' } } id="agree" type="checkbox"/>
        <Checkbox />
        <SubLabel htmlFor="agree" >同意此服務條款</SubLabel>
      </Accept>

      <Button>註冊</Button>
      <sub>
        註冊過？
        <Login to="/sign-in">登入</Login>
      </sub>
      
    </SignForm>
  )
}

export default SignUp