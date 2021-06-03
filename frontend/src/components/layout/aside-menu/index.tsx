import React, { useState } from 'react'
import { Container, Menu, MenuItem, Icon } from './index.style'
import apps from 'images/apps.svg'

const AsideMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen((prev) => !prev)

  return (
    <Container>
      <Icon src={ apps } onClick={ handleClick } />
      <Menu isOpen={ isOpen } >
        <MenuItem to="/sign-in" >登入</MenuItem>
        <MenuItem to="/" >首頁</MenuItem>
        <MenuItem to="/quote" >市場</MenuItem>
        <MenuItem to="/member" >會員中心</MenuItem>
      </Menu>
    </Container>
  )
}

export default AsideMenu