import React, { useState, useEffect } from 'react'
import {  Wrapper, Section, Article, Button, Head, More } from './index.style'
import { colors } from 'style/index'
import { getCryptoHomeService } from '@/api/quote'
import Loading from '@/components/loading'

const Thead = React.memo(() => (
  <Head>
    <div>名稱</div>
    <div>價格</div>
    <div>24小時漲跌</div>
    <div>操作</div>
  </Head>
))

const CryptoList = () => {
  const [isLoading, setIsLoading ] = useState(true)
  const [CryptoList, setCryptoList ] = useState<Crypto[]>([])

  useEffect(() => {
    const timerID = setInterval(() => {
      setCryptoList(getCryptoHomeService())
      setIsLoading(false)
    }, 1500)
    return () => clearInterval(timerID)
  },[])

  const cryptoRender = () => CryptoList.map(item => {
    const isup = item.changePercent >= 0
    const color = { color: isup ? colors.green : colors.red }
    return (
      <Article key={ item.name }>
        <div>{ item.name }</div>
        <div style={ color }>{ item.close ? `$${Number(item.close).toFixed(4)}` : '–' }</div>
        <div style={ color }>{ item.changePercent ? `${ isup ? '+' : '-' } ${Math.abs(item.changePercent).toFixed(2)}%` : '–' }</div>
        <div><Button>購買</Button></div>
      </Article>
    )
  })

  return (
    isLoading ? <Loading /> :
    <>
      <Thead />
      <Section>
        { cryptoRender() }
      </Section>
      <More to="/quote" >查看更多 ＞</More>
    </>
  )
}

const Crypto = () => {
  return (
    <Wrapper>
      <CryptoList />
    </Wrapper>
  )
}

export default Crypto