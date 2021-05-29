import React, { ReactNode } from 'react'
import HeaderBar from './components/header'
import FooterBar from './components/footer'
import { MainView } from './index.style'

interface LayoutProps {
  children: ReactNode;
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