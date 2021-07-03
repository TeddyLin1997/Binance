import React from 'react'
import { CardTitle, Container, Head, Item, SpanAlign } from './index.style'
import Card from '@/components/card'

const list = [
  {
    id: '1',
    time: '2021/07/01 12:32:11',
    type: '1',
    name: 'ETH',
    amount: '0.1',
    cost: '190',
  },
]

const Thead = () => (
  <Head>
    <SpanAlign align="left">日期</SpanAlign>
    <SpanAlign>類別</SpanAlign>
    <SpanAlign>名稱</SpanAlign>
    <SpanAlign align="right">數量</SpanAlign>
    <SpanAlign align="right">成本</SpanAlign>
  </Head>
)

const CashFlowTable = () => {

  const listRender = () => list.map(item => (
    <Item key={item.id}>
      <SpanAlign align="left">{item.time}</SpanAlign>
      <SpanAlign>{item.type === '1' ? '購買' : '出售'}</SpanAlign>
      <SpanAlign>{item.name}</SpanAlign>
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

const CashFlow = () => {
  return (
    <Card height={'384px'}>
      <CardTitle>資金明細</CardTitle>
      <CashFlowTable />
    </Card>
  )
}

export default CashFlow