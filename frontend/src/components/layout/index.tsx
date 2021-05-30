import React, { ReactNode } from 'react'
import HeaderBar from './header'
import FooterBar from './footer'
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