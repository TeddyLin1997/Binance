import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import PriceList from '@/components/price-list'
import Dialog from '@/components/dialog'
import TradeDialog from '@/components/trade-dialog'
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
  // price data
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

  // dialog
  const [openDialog, setOpenDialog] = useState(false)
  const [tradeForm, setTradeForm] = useState({ name: '', price: '', amount: '0' })

  const handleTrade = (item: Crypto) => {
    setTradeForm({ name: item.name, price: item.close, amount: '0' })
    setOpenDialog(true)
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