import React, { Dispatch, SetStateAction, ChangeEvent, useMemo, useState, useEffect } from 'react'
import { Content, Detail, Input, ButtonGroup } from './index.style'
import Button from "@/components/button";
import { theme } from '@/global.style'
import { useSelector } from 'react-redux'

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
  const cost = useMemo(() => (Number(amount) * price).toFixed(2), [price, amount])

  return (
    <Content>
      <h3>交易內容</h3>

      <Detail>
        <span>商品:</span>
        <span>{product}</span>
      </Detail>
      <Detail>
        <span>價格:</span>
        <span>$ { price.toFixed(2) }</span>
      </Detail>
      <Detail>
        <span>數量: </span>
        <Input value={ amount } onChange={ handleChange } type="number" />
      </Detail>
      <Detail>
        <span>總價: </span>
        <span>$ { cost }</span>
      </Detail>
      <Detail>
        <span>錢包餘額: </span>
        <span>$ { balance.toFixed(2) }</span>
      </Detail>

      <ButtonGroup>
        <Button label="買進" onClick={ () => {}} style={ getButtonStyle(theme.colors.green) }/>
        <Button label="賣出" onClick={ () => {}} style={ getButtonStyle(theme.colors.red) }/>
      </ButtonGroup>
    </Content>
  )
})

export default DialogContent