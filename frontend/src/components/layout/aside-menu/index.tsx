import React, { useState, useRef } from 'react'
import { Container, Icon, Menu, MenuItem, MenuLogOut } from './index.style'
import useClickOutside from '@/hooks/useClickOutside'
import apps from 'images/apps.svg'

interface AsideMenu {
  isLogin: boolean;
}

const AsideMenu = ({ isLogin }: AsideMenu) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen((prev) => !prev)

  const menuElement = useRef<HTMLDivElement>(null)
  const handleClose = (event: MouseEvent) => {
    if (menuElement.current === null) return
    if (menuElement.current.contains(event.target as HTMLElement)) return
    setIsOpen(false)
  }
  useClickOutside(handleClose)

  return (
    <Container ref={ menuElement } >
      <Icon src={ apps } onClick={ handleClick } />
      <Menu isOpen={ isOpen } >
        {
          isLogin ? 
          <MenuLogOut >登出</MenuLogOut> :
          <MenuItem to="/sign-in" >登入</MenuItem>
        }
        <MenuItem to="/" >首頁</MenuItem>
        <MenuItem to="/quote" >市場</MenuItem>
        { isLogin && <MenuItem to="/member" >會員中心</MenuItem> }
      </Menu>
    </Container>
  )
}

export default AsideMenu