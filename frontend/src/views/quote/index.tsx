import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"
import PriceList from '@/components/price-list'
import Dialog from '@/components/dialog'
import TradeDialog from '@/components/trade-dialog'
import { getCryptoListService } from '@/api/quote'

const Wrapper = styled.div`
  margin: 16px auto;
  padding: 0 12px;
  width: 100%;
  max-width: 1024px;
  text-align: center;
`

const Quote = () => {
  // user
  const isLogin = useSelector((state: RootState) => state.user.account) !== ''

  // price
  const [ cryptoList, setCryptoList ] = useState(getCryptoListService())

  useEffect(() => {
    const timerID = setInterval(() => {
      setCryptoList(getCryptoListService())
    }, 1500)

    return () => clearInterval(timerID)
  },[])

  // dialog
  const [openDialog, setOpenDialog] = useState(false)
  const [tradeForm, setTradeForm] = useState({ name: '', price: '', amount: '0' })

  const handleTrade = (item: Crypto) => {
    if (isLogin) {
      setTradeForm({ name: item.name, price: item.close, amount: '0' })
      setOpenDialog(true)
    }
  }

  return (
    <Wrapper>
      <PriceList data={cryptoList} handleTrade={handleTrade}/>

      <Dialog value={openDialog} handle={setOpenDialog}>
        <TradeDialog form={tradeForm} setForm={setTradeForm}/>
      </Dialog>
    </Wrapper>
  )
}

export default Quote