import React, { useState, useEffect, useMemo } from 'react'
import { Container, Wrapper, Section, Article, AmountNumber, Button, Head, More } from './index.style'
import { getCryptoHomeService, updateCryptoHomeService } from '@/api/quote'
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
  const [CryptoList, setCryptoList ] = useState<Crypto[]>(getCryptoHomeService())

  useEffect(() => {
    const timerID = setInterval(() => {
      setCryptoList(prev => {
        const updateData = updateCryptoHomeService()
        type Key =  keyof typeof updateData
        return prev.map(item => updateData[item.name as Key] ? { name: item.name, ...updateData[item.name as Key] } : item )
      })
    }, 1500)

    return () => clearInterval(timerID)
  },[])

  const cryptoRender = () => CryptoList.map(item => {
    const isUp = item.changePercent >= 0
    return (
      <Article key={ item.name }>
        <div>{ item.name }</div>
        <AmountNumber isUp={ isUp }>{ item.close ? `$${Number(item.close).toFixed(4)}` : '–' }</AmountNumber>
        <AmountNumber isUp={ isUp }>{ item.changePercent ? `${ isUp ? '+' : '-' } ${Math.abs(item.changePercent).toFixed(2)}%` : '–' }</AmountNumber>
        <Button>購買</Button>
      </Article>
    )
  })

  const isLoading = useMemo(() => CryptoList[0].changePercent === undefined, CryptoList)

  return (
    <Container isLoading={ isLoading } >
      {
        isLoading ? <Loading /> :
        <>
          <Thead />
          <Section>
            { cryptoRender() }
          </Section>
          <More to="/quote" >查看更多 ＞</More>
        </>
      }
    </Container>
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