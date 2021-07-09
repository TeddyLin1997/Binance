import React from 'react'
import { CardTitle, Container, Head, Item, SpanAlign, moneyStyle } from './index.style'
import Card from '@/components/card'
import { cryptoData } from '@/api/quote'
import { NumberFormat } from '@/helper'

const Thead = () => (
  <Head>
    <SpanAlign align="left">名稱</SpanAlign>
    <SpanAlign align="right">數量</SpanAlign>
    <SpanAlign align="right">估值</SpanAlign>
  </Head>
)

const WalletTable = ({ list }: { list: WalletDetail[] }) => {
  const listRender = () => list.map(item => (
    <Item key={item.name}>
      <SpanAlign align="left">{item.name}</SpanAlign>
      <SpanAlign align="right">{item.amount}</SpanAlign>
      <SpanAlign align="right" style={moneyStyle}>$ { NumberFormat(Number(cryptoData[item.name + 'USDT']?.close ?? 0) * Number(item.amount)) }</SpanAlign>
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