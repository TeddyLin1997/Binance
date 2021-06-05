import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Avatar, ButtonGroup, buttonStyle } from './index.style'
import avatar from 'images/user.svg'
import Button from '@/components/button'
import AsideMenu from '@/components/layout/aside-menu'

const UserInfo = () => {
  const history = useHistory()
  const handlePush = (route: string) => history.push(`/${route}`)

  const account = useSelector((state: RootState) => state.user.account)

  return (
    <Container>
      <AsideMenu />

      {
        account ? 
        <Avatar src={ avatar } onClick={ () => handlePush('member') } /> :
        <ButtonGroup>
          <Button 
            label="登入"
            style={ buttonStyle }
            onClick={ () => handlePush('sign-in') }
          />
          <Button
            label="註冊"
            style={ buttonStyle }
            onClick={ () => handlePush('sign-up') }
            primary
          />
        </ButtonGroup>
      }
    </Container>
  )
}

export default UserInfo