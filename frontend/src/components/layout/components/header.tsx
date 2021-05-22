import React from 'react'
import { useHistory } from 'react-router-dom'
import { Header, Logo, NavItem, ButtonGroup } from '../style'
import Button from '../../button'
import Aside from './aside'
import logo from '../../../assets/images/logo.png'

const buttonStyle = {
  margin: '0 4px',
  padding: '6px 16px',
  fontSize: '14px',
}

const HeaderBar = () => {
  const history = useHistory()
  const handlePush = (route: string) => history.push(`/${route}`)

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

      <Aside />
    </Header>
  )
}

export default React.memo(HeaderBar)