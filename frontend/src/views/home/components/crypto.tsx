import React, { useState, useEffect } from 'react'
import {  Wrapper, Section, Article, Button, Head, More } from './crypto.style'
import { colors } from '../../../assets/style'
import { getCryptoHomeService } from '../../../api'

const Thead = React.memo(() => (
  <Head>
    <div>名稱</div>
    <div>價格</div>
    <div>24小時漲跌</div>
    <div>操作</div>
  </Head>
))

const CryptoList = () => {
  const [CryptoList, setCryptoList ] = useState<Crypto[]>([])

  useEffect(() => {
    const timerID = setInterval(() => setCryptoList(getCryptoHomeService()), 1500)
    return () => clearInterval(timerID)
  },[])

  const cryptoRender = () => CryptoList.map(item => {
    const isup = item.changePercent >= 0
    const color = { color: isup ? colors.green : colors.red }
    return (
      <Article key={ item.name }>
        <div>{ item.name }</div>
        <div style={ color }>{ `$${Number(item.close).toFixed(4)}` }</div>
        <div style={ color }>{ `${ isup ? '+' : '-' } ${Math.abs(item.changePercent).toFixed(2)}%` }</div>
        <div><Button>購買</Button></div>
      </Article>
    )
  })

  return (
    <Section>
      <Thead />
      { cryptoRender() }
    </Section>
  )
}

const Crypto = () => {
  return (
    <Wrapper>
      <CryptoList />
      <More to="/quote" >查看更多 ＞</More>
    </Wrapper>
  )
}

export default Crypto