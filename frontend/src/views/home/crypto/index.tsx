import React, { useState, useEffect } from 'react'
import { Wrapper, More } from './index.style'
import { getHomeListService, updateHomeListService } from '@/api/quote'
import PriceList from '@/components/price-list'

const initHomeList = getHomeListService()

const Crypto = () => {
  const [ homeList, setHomeList ] = useState<Crypto[]>(initHomeList)

  useEffect(() => {
    const timerID = setInterval(() => {
      setHomeList(prev => {
        const updateData = updateHomeListService()
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