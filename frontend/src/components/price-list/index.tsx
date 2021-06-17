import React, { useMemo } from 'react'
import { Container, Section, Head, Article, AmountNumber, Button } from './index.style'
import Loading from '@/components/loading'

interface PriceList {
  data: Crypto[];
  height?: string;
}

const PriceList = ({ data, height }: PriceList) => {
  const isLoading = useMemo(() => data.slice(0, 4).some(item => !item.changePercent), data)

  const listRender = () => data.map(item => {
    const isUp = item.changePercent >= 0

    return (
      <Article key={ item.name }>
        <div>{ item.name }</div>
        <AmountNumber isUp={ isUp }>
          { item.close ? `$${Number(item.close).toFixed(4)}` : '–' }
        </AmountNumber>
        <AmountNumber isUp={ isUp }>
          { item.changePercent ? `${ isUp ? '+' : '-' } ${Math.abs(item.changePercent).toFixed(2)}%` : '–' }
        </AmountNumber>
        <Button>購買</Button>
      </Article>
    )
  })

  return (
    <Container isLoading={ isLoading } height={ height || '100%' } >
      {
        isLoading ? <Loading /> :
        <>
          <Thead />
          <Section>
            { listRender() }
          </Section>
        </>
      }
    </Container>
  )
}

const Thead = React.memo(() => (
  <Head>
    <div>名稱</div>
    <div>價格</div>
    <div>24小時漲跌</div>
    <div>操作</div>
  </Head>
))

export default PriceList