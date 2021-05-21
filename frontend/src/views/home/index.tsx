import React from 'react'
import { useHistory } from 'react-router-dom'
import { HomeView, Header, Banner, Title, SubTitle, Images } from './style'
import Button from '../../components/button'
import Crypto from './components/crypto'
import Taipei from '../../assets/images/taipei.png'

const buttonStyle = {
  width: 'fit-content',
  marginTop: '72px',
  padding: '12px 36px',
}

const Home = () => {
  const history = useHistory()
  const handlePush = (route: String) => history.push(`/${route}`)

  return (
    <HomeView>
      <Header>
        <Banner>
          <div>
            <Title>用TWD買加密貨幣</Title>
            <Title>買賣整個世界</Title>
            <SubTitle>全球最大的區塊鏈資產交易平台</SubTitle>
            <Button 
              label="開始交易"
              style={ buttonStyle }
              onClick={ () => handlePush('quote') }
              primary
            />
          </div>
          <Images src={ Taipei } />
        </Banner>
      </Header>

      <Crypto />
    </HomeView>
  )
}

export default Home