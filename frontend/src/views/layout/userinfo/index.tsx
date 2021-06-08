import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, AvatarIcon, Name, ButtonGroup, buttonStyle } from './index.style'
import AsideMenu from '@/views/layout/aside-menu'
import Button from '@/components/button'
import avatar from 'images/user.svg'

const UserInfo = () => {
  const history = useHistory()
  const handlePush = (route: string) => history.push(`/${route}`)

  const [ isLogin, setIsLogin ] = useState(false)
  const user = useSelector((state: RootState) => state.user)
  useEffect(() => setIsLogin(user.account !== ''), [user])

  const Profile = () => (
    <>
      <Name>{ user.account }</Name>
      <AvatarIcon src={ avatar } onClick={ () => handlePush('member') }/>
    </>
  )

  const SignButtons = () => (
    <ButtonGroup>
      <Button  label="登入" style={ buttonStyle } onClick={ () => handlePush('sign-in') } />
      <Button label="註冊" style={ buttonStyle } onClick={ () => handlePush('sign-up') } primary />
    </ButtonGroup>
  )

  return (
    <Container>
      { isLogin ? <Profile /> : <SignButtons /> }
      <AsideMenu isLogin={isLogin}/>
    </Container>
  )
}

export default UserInfo