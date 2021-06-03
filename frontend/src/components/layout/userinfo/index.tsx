import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, ButtonGroup, buttonStyle } from './index.style'
import Button from '@/components/button'
import AsideMenu from '@/components/layout/aside-menu'

const UserInfo = () => {
  const history = useHistory()
  const handlePush = (route: string) => history.push(`/${route}`)

  return (
    <Container>
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

      <AsideMenu />
    </Container>
  )
}

export default UserInfo