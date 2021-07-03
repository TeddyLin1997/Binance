import React, { useState, useEffect } from 'react'
import { Wrapper, More } from './index.style'
import { getHomeListService } from '@/api/quote'
import PriceList from '@/components/price-list'
import Dialog from '@/components/dialog'
import TradeDialog from '@/components/trade-dialog'

const Crypto = () => {
  // price
  const [ homeList, setHomeList ] = useState<Crypto[]>(getHomeListService())

  useEffect(() => {
    const timerID = setInterval(() => {
      setHomeList(getHomeListService())
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