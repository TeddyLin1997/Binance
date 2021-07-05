import React from 'react'
import { CardTitle, Container, Head, Item, SpanAlign } from './index.style'
import Card from '@/components/card'

const Thead = () => (
  <Head>
    <SpanAlign align="left">名稱</SpanAlign>
    <SpanAlign align="right">數量</SpanAlign>
    <SpanAlign align="right">成本</SpanAlign>
    <SpanAlign align="right">市值</SpanAlign>
  </Head>
)

const WalletTable = ({ list }: { list: WalletDetail[] }) => {
  const listRender = () => list.map(item => (
    <Item key={item.name}>
      <SpanAlign align="left">{item.name}</SpanAlign>
      <SpanAlign align="right">{item.amount}</SpanAlign>
      <SpanAlign align="right">{item.cost}</SpanAlign>
    </Item>
  ))

  return (
    <Container>
      <Thead />
      { listRender() }
    </Container>
  )
}

const WalletDetail = ({ list }: { list: WalletDetail[] }) => (
  <Card height={'384px'}>
    <CardTitle>持幣明細</CardTitle>
    <WalletTable list={list} />
  </Card>
)

export default WalletDetail