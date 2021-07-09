import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Wrapper, More } from './index.style'
import PriceList from '@/components/price-list'
import Dialog from '@/components/dialog'
import TradeDialog from '@/components/trade-dialog'
import useBinance from '@/hooks/useBinance'

const Crypto = () => {
  // user
  const isLogin = useSelector((state: RootState) => state.user.account) !== ''

  // price
  const cryptoList = useBinance(true)

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
      <PriceList data={cryptoList} handleTrade={handleTrade} height="348px"/>
      <More to="/quote" >查看更多</More>

      <Dialog value={openDialog} handle={setOpenDialog}>
        <TradeDialog product={product} data={cryptoList}/>
      </Dialog>
    </Wrapper>
  )
}

export default Crypto