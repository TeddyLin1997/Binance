import React, { ChangeEvent, useMemo, useState } from 'react'
import { Content, Detail, Input, ButtonGroup } from './index.style'
import { useSelector } from 'react-redux'
import { tradeBuyService, tradeSellService } from '@/api/trade'
import { theme } from '@/global.style'
import { NumberFormat } from '@/helper'
import Button from "@/components/button";

interface DialogContent {
  product: string;
  data: Crypto[];
}

const getButtonStyle = (color: string) => ({
  padding: '8px 0',
  width: '45%',
  fontSize: '16px',
  background: color,
  color: '#fff',
})

const DialogContent = React.memo(({ product, data }: DialogContent) => {
  const balance = useSelector((state: RootState) => state.balance)

  const [ amount, setAmount ] = useState('0')

  const handleChange = (e: ChangeEvent) => {
    let value = (e.target as HTMLInputElement).value
    if (/^0[0-9]+$/.test(value)) value = value.replace('0', '')
    setAmount(value)
  }

  const price = useMemo(() => product ? Number(data.find(item => item.name === product)?.close ?? 0) : 0, [data])
  const cost = useMemo(() => (Number(amount) * price), [price, amount])

  const handleBuy = async () => {
    const buyForm = {
      name: product,
      amount: Number(amount),
      cost: Number(cost),
    }
    const result = await tradeBuyService(buyForm)
  }

  const handleSell = async () => {
    const sellForm = {
      name: product,
      amount: Number(amount),
      total: Number(cost),
    }
    const result = await tradeSellService(sellForm)
  }

  return (
    <Content>
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
    </Content>
  )
})

export default DialogContent