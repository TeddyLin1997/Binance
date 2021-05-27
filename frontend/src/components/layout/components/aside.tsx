import React, { useState } from 'react'
import { Menu, MenuItem, Icon } from './aside.style'
import apps from '../../../assets/images/apps.svg'

const AsideMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () =>setIsOpen((prev) => !prev)

  return (
    <>
      <Icon src={ apps } onClick={ handleOpen } />
      <Menu isOpen={ isOpen } >
        <MenuItem to="/sign-in" >登入</MenuItem>
        <MenuItem to="/" >首頁</MenuItem>
        <MenuItem to="/quote" >市場</MenuItem>
        <MenuItem to="/member" >會員中心</MenuItem>
      </Menu>
    </>
  )
}

export default AsideMenu