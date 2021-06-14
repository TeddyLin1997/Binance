import React, { useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Logout, Name, SignButton } from './index.style'
import AsideMenu from '@/views/layout/aside-menu'
import logout from 'images/logout.svg'
import { useDispatch } from 'react-redux'
import { clearUser } from 'action/user'

const UserInfo = () => {
  const user = useSelector((state: RootState) => state.user)
  const isLogin = useMemo(() => user.account !== '', [user])

  return (
    <Container>
      { isLogin ? <Profile label={user.account} /> : <SignButtons /> }
      <AsideMenu isLogin={isLogin}/>
    </Container>
  )
}

const Profile = ({ label }: { label: string }) => {
  const dispatch = useDispatch()
  const handleLogout = () => dispatch(clearUser())

  const history = useHistory()
  const handlePush = () => history.push('/member')

  return (
    <>
      <Name onClick={ handlePush }>{ label }</Name>
      <Logout src={ logout } onClick={ handleLogout }/>
    </>
  )
}

const SignButtons = () => (
  <>
    <SignButton to='sign-in'>登入</SignButton>
    <SignButton to='sign-up' primary="true">註冊</SignButton>
  </>
)

export default UserInfo