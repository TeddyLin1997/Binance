import React from 'react'
import { useHistory } from 'react-router-dom'
import { Header, Logo, NavItem, ButtonGroup, Button } from './style'
import Aside from './aside'
import logo from '../../../assets/images/logo.png'

const HeaderBar = () => {
  const history = useHistory()

  return (
    <Header>
      <Logo src={ logo } onClick={ () => history.push('/') } />
      <NavItem to="/quote" >市場</NavItem>
      <NavItem to="/member" >會員中心</NavItem>

      <ButtonGroup>
        <Button to="/login" >登入</Button>
        <Button to="/register" type="primary"  >註冊</Button>
      </ButtonGroup>

      <Aside />
    </Header>
  )
}

export default React.memo(HeaderBar)