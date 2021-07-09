import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"
import PriceList from '@/components/price-list'
import Dialog from '@/components/dialog'
import TradeDialog from '@/components/trade-dialog'
import useBinance from '@/hooks/useBinance'

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
  const cryptoList = useBinance(false)

  // dialog
  const [openDialog, setOpenDialog] = useState(false)
  const [product, setProduct] = useState('')

  const handleTrade = (item: Crypto) => {
    if (isLogin) {
      setProduct(item.name)
      setOpenDialog(true)
    }
  }

  return (
    <Wrapper>
      <PriceList data={cryptoList} handleTrade={handleTrade}/>

      <Dialog value={openDialog} handle={setOpenDialog}>
        <TradeDialog product={product} data={cryptoList}/>
      </Dialog>
    </Wrapper>
  )
}

export default Quote