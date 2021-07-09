import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Wrapper, More } from './index.style'
import { getHomeListService } from '@/api/quote'
import PriceList from '@/components/price-list'
import Dialog from '@/components/dialog'
import TradeDialog from '@/components/trade-dialog'

const Crypto = () => {
  // user
  const isLogin = useSelector((state: RootState) => state.user.account) !== ''

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
  const [product, setProduct] = useState('')

  const handleTrade = (item: Crypto) => {
    if (isLogin) {
      setProduct(item.name)
      setOpenDialog(true)
    }
  }

  return (
    <Wrapper>
      <PriceList data={homeList} handleTrade={handleTrade} height="348px"/>
      <More to="/quote" >查看更多</More>

      <Dialog value={openDialog} handle={setOpenDialog}>
        <TradeDialog product={product} data={homeList}/>
      </Dialog>
    </Wrapper>
  )
}

export default Crypto