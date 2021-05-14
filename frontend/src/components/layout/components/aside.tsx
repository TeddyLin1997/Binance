import React, { useState } from 'react'
import { MenuIcon, Menu, MenuItem } from '../style'
import apps from '../../../assets/images/apps.svg'

const AsideMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () =>setIsOpen((prev) => !prev)

  return (
    <>
      <MenuIcon src={ apps } onClick={ handleOpen } />
      <Menu isOpen={ isOpen } >
        <MenuItem to="/login" >登入</MenuItem>
        <MenuItem to="/" >首頁</MenuItem>
        <MenuItem to="/quote" >市場</MenuItem>
        <MenuItem to="/member" >會員中心</MenuItem>
      </Menu>
    </>
  )
}

export default AsideMenu