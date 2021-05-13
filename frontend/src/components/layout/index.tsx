import React from 'react'
import HeaderBar from './components/header'
import FooterBar from './components/footer'
import styled from 'styled-components'

const MainView = styled.main`
  margin-top: 64px;
  min-height: calc(100vh - 64px - 48px);
`

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderBar />
      <MainView> { children } </MainView>
      <FooterBar />
    </>
  )
}

export default Layout