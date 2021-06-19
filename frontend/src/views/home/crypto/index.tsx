import React, { useState, useEffect } from 'react'
import { Wrapper, More } from './index.style'
import { getHomeListService, updateHomeListService } from '@/api/quote'
import PriceList from '@/components/price-list'
import Dialog from '@/components/dialog'
import TradeDialog from '@/components/trade-dialog'

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

  // dialog
  const [openDialog, setOpenDialog] = useState(false)
  const [tradeForm, setTradeForm] = useState({ name: '', price: '', amount: '0' })

  const handleTrade = (item: Crypto) => {
    setTradeForm({ name: item.name, price: item.close, amount: '0' })
    setOpenDialog(true)
  }

  return (
    <Wrapper>
      <PriceList data={homeList} handleTrade={handleTrade} height="348px"/>
      <More to="/quote" >查看更多 ＞</More>

      <Dialog value={openDialog} handle={setOpenDialog}>
        <TradeDialog form={tradeForm} setForm={setTradeForm}/>
      </Dialog>
    </Wrapper>
  )
}

export default Crypto