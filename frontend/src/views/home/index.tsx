import React from 'react'
import { Header, Banner, Title, SubTitle, Button, Images } from './style'
import Taipei from '../../assets/images/taipei.png'

const Home = () => {
  return (
    <Header>
      <Banner>
        <div>
          <Title>用 TWD 買加密貨幣</Title>
          <Title>買賣整個世界</Title>
          <SubTitle>全球最大的區塊鏈資產交易平台</SubTitle>
          <Button to="/quote" >開始交易</Button>
        </div>
        <Images src={ Taipei } />
      </Banner>
    </Header>
  )
}

export default Home