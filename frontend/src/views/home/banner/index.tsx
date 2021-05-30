import React from 'react'
import { useHistory } from 'react-router-dom'
import { Wrapper, Title, SubTitle, Images } from './index.style'
import Taipei from 'images/taipei.png'
import Button from '@/components/button'

const buttonStyle = {
  width: 'fit-content',
  marginTop: '72px',
  padding: '12px 36px',
}

const Banner = () => {
  const history = useHistory()
  const handlePush = (route: string) => history.push(`/${route}`)

  return (
    <Wrapper>
      <div>
        <Title>TWD買加密貨幣</Title>
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
    </Wrapper>
  )
}

export default Banner