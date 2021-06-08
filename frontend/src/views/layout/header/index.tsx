import React from 'react'
import { useHistory } from 'react-router-dom'
import { Header, Logo, NavItem } from './index.style'
import logo from 'images/logo.png'
import UserInfo from '@/views/layout/userinfo'

const HeaderBar = () => {
  const history = useHistory()

  return (
    <Header>
      <Logo src={ logo } onClick={ () => history.push('/') } />
      <NavItem to="/quote" >市場</NavItem>

      <UserInfo />
    </Header>
  )
}

export default React.memo(HeaderBar)