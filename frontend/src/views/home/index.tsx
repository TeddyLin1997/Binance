import React from 'react'
import styled from 'styled-components'
import Crypto from './crypto'
import Banner from './banner'

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