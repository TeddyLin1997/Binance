import React from 'react'
import HeaderBar from './components/header'
import styled from 'styled-components'

const MainView = styled.main`
  margin-top: 64px;
  height: calc(100vh - 64px);
`

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderBar />
      <MainView> { children } </MainView>
    </>
  )
}

export default Layout