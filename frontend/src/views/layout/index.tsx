import React from 'react'
import HeaderBar from './components/header'



interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderBar />
      <main> { children } </main>
    </>
  )
}

export default Layout