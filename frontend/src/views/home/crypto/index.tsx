import React, { useState, useEffect } from 'react'
import { Wrapper, More } from './index.style'
import { getCryptoHomeService, updateCryptoHomeService } from '@/api/quote'
import PriceList from '@/components/price-list'

const Crypto = () => {
  const [ homeList, setHomeList ] = useState<Crypto[]>(getCryptoHomeService())

  useEffect(() => {
    const timerID = setInterval(() => {
      setHomeList(prev => {
        const updateData = updateCryptoHomeService()
        type Key =  keyof typeof updateData
        return prev.map(item => updateData[item.name as Key] ? { name: item.name, ...updateData[item.name as Key] } : item )
      })
    }, 1500)

    return () => clearInterval(timerID)
  },[])

  return (
    <Wrapper>
      <PriceList data={homeList} height="348px"/>
      <More to="/quote" >查看更多 ＞</More>
    </Wrapper>
  )
}

export default Crypto