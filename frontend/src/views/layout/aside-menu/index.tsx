import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Icon, Menu, MenuItem, LogOperate } from './index.style'
import useClickOutside from '@/hooks/useClickOutside'
import apps from 'images/apps.svg'
import { useDispatch } from 'react-redux'
import { setUser } from 'action/user'

interface AsideMenu {
  isLogin: boolean;
}

const AsideMenu = ({ isLogin }: AsideMenu) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen((prev) => !prev)

  const menuElement = useRef<HTMLDivElement>(null)
  useClickOutside((event: MouseEvent) => {
    if (menuElement.current === null) return
    if (menuElement.current.contains(event.target as HTMLElement)) return
    setIsOpen(false)
  })

  const history = useHistory()
  const dispatch = useDispatch()
  const handleLog = () => isLogin ? dispatch(setUser(null)) : history.push('sign-in')

  return (
    <Container ref={ menuElement } onClick={ handleClick } >
      <Icon src={ apps } />
      <Menu isOpen={ isOpen } >
        <LogOperate onClick={ handleLog }>{ isLogin ? '登出' : '登入' }</LogOperate>
        <MenuItem to="/" >首頁</MenuItem>
        <MenuItem to="/quote" >市場</MenuItem>
        { isLogin && <MenuItem to="/member" >會員中心</MenuItem> }
      </Menu>
    </Container>
  )
}

export default AsideMenu