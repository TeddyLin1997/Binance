import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import PriceList from '@/components/price-list'
import { getCryptoListService, updateCryptoListService } from '@/api/quote'

const Wrapper = styled.div`
  margin: 16px auto;
  padding: 0 12px;
  width: 100%;
  max-width: 1024px;
  text-align: center;
`

const initCryptoList = getCryptoListService()

const Quote = () => {
  const [ cryptoList, setCryptoList ] = useState(initCryptoList)

  useEffect(() => {
    const timerID = setInterval(() => {
      setCryptoList(prev => {
        const updateData = updateCryptoListService()
        type Key =  keyof typeof updateData
        return prev.map(item => updateData[item.name as Key] ? { name: item.name, ...updateData[item.name as Key] } : item )
      })
    }, 1500)

    return () => clearInterval(timerID)
  },[])

  return (
    <Wrapper>
      <PriceList data={cryptoList}/>
    </Wrapper>
  )
}

export default Quote