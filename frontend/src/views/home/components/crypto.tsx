import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../../assets/style'
import { getCryptoService } from '../../../api'

type Crypto = {
  label: string,
  value: string,
}

const Section = styled.section`
  margin: auto;
  max-width: 1024px;
  font-weight: bold;

  & > *:not(:last-child) {
    border-bottom: 1px solid lightgray;
  }
`

const Article = styled.article`
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  &:hover {
    background-color: whitesmoke;
    transition: all .4s;
  }
  & > * {
    width: 30%;
    text-align: left;
    font-size: 16px;
  }
`

const Button = styled.button`
  width: fit-content;
  padding: 8px 12px;
  border-radius: 6px;
  color: white;
  background-color: ${ colors.green };
`

const Head = styled.div`
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  & > * {
    font-size: 14px;
    color: gray;
  }
`

const More = styled(Link)`
  display: block;
  margin: 24px;
  font-size: 14px;
  text-align: center;
  color: gray;
  cursor: pointer;
  &:hover {
    color: ${ colors.active }
  }
`

const Thead = () => (
  <Head>
    <div style={ { 'textAlign':'left' } }>名稱</div>
    <div style={ { 'textAlign':'left' } }>最新價</div>
    <div style={ { 'textAlign':'right' } }>操作</div>
  </Head>
)

const Crypto = () => {
  const [CryptoList, setCryptoList ] = useState<Crypto[]>([])

  useEffect(() => {
    getCryptoService(5).then(res => setCryptoList(res))
  },[])

  const cryptoRender = () => CryptoList.map(item => {
    return (
      <Article key={ item.label }>
        <div>{ item.label.replace('USDT', '/USDT') }</div>
        <div>{ '$' + item.value }</div>
        <Button> 購買 </Button>
      </Article>
    )
  })

  return (
    <Section>
      <Thead />
      { cryptoRender() }
      <More to="/quote" >查看更多 ＞</More>
    </Section>
  )
}

export default Crypto