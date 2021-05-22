import React from 'react'
import styled from 'styled-components'
import Crypto from './components/crypto'
import Banner from './components/banner'

const HomeView = styled.div`
  width: 100%;
`

const Home = () => (
  <HomeView>
    <Banner />
    <Crypto />
  </HomeView>
)

export default Home