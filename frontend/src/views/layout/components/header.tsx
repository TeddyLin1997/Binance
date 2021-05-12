import React from 'react'
import logo from '../../assets/images/logo.png'
import apps from '../../assets/images/apps.svg'
import { Header, Logo, Menu, NavItem, ButtonGroup, Button } from './header.style'

const HeaderBar = () => {
  return (
    <Header>
        <Logo src={ logo } />
        <NavItem>市場</NavItem>
        <NavItem>會員中心</NavItem>

        <ButtonGroup>
          <Button primary>登入</Button>
          <Button>註冊</Button>
        </ButtonGroup>

        <Menu src={ apps } />
      </Header>
  )
}

export default HeaderBar