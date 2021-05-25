import React from 'react'
import styled from 'styled-components'
import Crypto from './components/crypto'
import Banner from './components/banner'


const HomeView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Home = () => {

  return (
    <HomeView>
      <Banner />
      <Crypto />
    </HomeView>
  )
}

export default Home