import React, { useState } from 'react'
import logo from '../../../assets/images/logo.png'
import apps from '../../../assets/images/apps.svg'
import { Header, Logo, Menu, NavItem, ButtonGroup, Button, AsideMenu } from './header.style'

const HeaderBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () =>setIsOpen((prev) => !prev)

  return (
    <Header>
        <Logo src={ logo } />
        <NavItem>市場</NavItem>
        <NavItem>會員中心</NavItem>

        <ButtonGroup>
          <Button>登入</Button>
          <Button primary>註冊</Button>
        </ButtonGroup>

        <Menu src={ apps } onClick={ handleOpen } />
        <AsideMenu isOpen={ isOpen } >
          <div>登入</div>
          <div>市場</div>
          <div>會員中心</div>
        </AsideMenu>
      </Header>
  )
}

export default React.memo(HeaderBar)