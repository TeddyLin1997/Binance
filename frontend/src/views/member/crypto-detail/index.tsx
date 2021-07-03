import React from 'react'
import { CardTitle, Container, Head, Item, SpanAlign } from './index.style'
import Card from '@/components/card'

const list = [
  {
    name: 'ETC',
    amount: 100.8712,
    cost: 6200100.33,
    value: 78159.44,
  },
  {
    name: 'BTC',
    amount: 0.87123,
    cost: 62000.33,
    value: 78159.44,
  },
]

const Thead = () => (
  <Head>
    <SpanAlign align="left">名稱</SpanAlign>
    <SpanAlign align="right">數量</SpanAlign>
    <SpanAlign align="right">成本</SpanAlign>
    <SpanAlign align="right">市值</SpanAlign>
  </Head>
)

const CryptoTable = () => {

  const listRender = () => list.map(item => (
    <Item key={item.name}>
      <SpanAlign align="left">{item.name}</SpanAlign>
      <SpanAlign align="right">{item.amount}</SpanAlign>
      <SpanAlign align="right">{item.cost}</SpanAlign>
      <SpanAlign align="right">{item.value}</SpanAlign>
    </Item>
  ))

  return (
    <Container>
      <Thead />
      { listRender() }
    </Container>
  )
}

const CryptoDetail = () => (
  <Card height={'384px'}>
    <CardTitle>持幣明細</CardTitle>
    <CryptoTable />
  </Card>
)

export default CryptoDetail