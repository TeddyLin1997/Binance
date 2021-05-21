import React from 'react'
import HeaderBar from './components/header'
import FooterBar from './components/footer'
import styled from 'styled-components'
import { MainView } from './style'

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