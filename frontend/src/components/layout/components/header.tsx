import React, { Suspense, useState, useEffect, lazy } from 'react'
import { useHistory } from 'react-router-dom'
import { Header, Logo, NavItem, ButtonGroup, buttonStyle } from './header.style'
import Aside from './aside'
import Button from '../../button'
import logo from '../../../assets/images/logo.png'

const isPhoneMode = (width: number) => width <= 568

const HeaderBar = () => {
  const history = useHistory()
  const handlePush = (route: string) => history.push(`/${route}`)

  const [ showAside, setShowAside ] = useState(isPhoneMode(document.body.clientWidth))
  const handleResize = (event: any) => {
    if (isPhoneMode(event.target.innerWidth)) setShowAside(true)
    else setShowAside(false)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Header>
      <Logo src={ logo } onClick={ () => history.push('/') } />
      <NavItem to="/quote" >市場</NavItem>
      <NavItem to="/member" >會員中心</NavItem>

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

      { showAside ? <Aside /> : null }
    </Header>
  )
}

export default React.memo(HeaderBar)