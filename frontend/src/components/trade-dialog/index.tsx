import React, { ChangeEvent, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Content, Detail, Input, ButtonGroup, getButtonStyle, comfirmBtn } from './index.style'
import { theme } from '@/global.style'
import { tradeBuyService, tradeSellService } from '@/api/trade'
import { getAssetsBalance } from '@/api/assets'
import { setBalance } from 'action/balance'
import { NumberFormat } from '@/helper'
import Button from "@/components/button";

interface DialogContent {
  product: string;
  data: Crypto[];
}

const DialogContent = React.memo(({ product, data }: DialogContent) => {
  const balance = useSelector((state: RootState) => state.balance)
  const [ amount, setAmount ] = useState('1')
  const [ message, setMessage ] = useState('')
  const hasMsg = useMemo(() => message !== '', [message])

  const handleChange = (e: ChangeEvent) => {
    let value = (e.target as HTMLInputElement).value
    if (/^0[0-9]+$/.test(value)) value = value.replace('0', '')
    setAmount(value)
  }

  const price = useMemo(() => product ? Number(data.find(item => item.name === product)?.close ?? 0) : 0, [data, product])
  const cost = useMemo(() => (Number(amount) * price), [price, amount])

  const dispatch = useDispatch()
  const updateBalance = async () => {
    const balanceRes = await getAssetsBalance()
    if (typeof balanceRes.result === 'string') return
    dispatch(setBalance(balanceRes.result))
  }

  const handleBuy = async () => {
    if (amount === '0') return

    const buyForm = {
      name: product,
      amount: Number(amount),
      cost: Number(cost),
    }
    const result = await tradeBuyService(buyForm)
    setMessage(result.result)
    if (result.result === '交易完成') updateBalance()
  }

  const handleSell = async () => {
    if (amount === '0') return

    const sellForm = {
      name: product,
      amount: Number(amount),
      total: Number(cost),
    }
    const result = await tradeSellService(sellForm)
    setMessage(result.result)
    if (result.result === '交易完成') updateBalance()
  }

  return (
    <Content>
      {
        hasMsg ?
        <>
          <h3>{ message }</h3>
          <Button label="確認" onClick={ () => setMessage('') } style={comfirmBtn} primary />
        </>
        :
        <>
          <h3>交易內容</h3>

          <Detail>
            <span>商品:</span>
            <span>{product}</span>
          </Detail>
          <Detail>
            <span>價格:</span>
            <span>$ { NumberFormat(price) }</span>
          </Detail>
          <Detail>
            <span>數量: </span>
            <Input value={ amount } onChange={ handleChange } type="number" />
          </Detail>
          <Detail>
            <span>總價: </span>
            <span>$ { NumberFormat(cost) }</span>
          </Detail>
          <Detail>
            <span>錢包餘額: </span>
            <span>$ { NumberFormat(balance) }</span>
          </Detail>

          <ButtonGroup>
            <Button label="買進" onClick={ () => handleBuy() } style={ getButtonStyle(theme.colors.green) }/>
            <Button label="賣出" onClick={ () => handleSell() } style={ getButtonStyle(theme.colors.red) }/>
          </ButtonGroup>
        </>
      }
    </Content>
  )
})

export default DialogContent