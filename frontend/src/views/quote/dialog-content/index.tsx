import React, { Dispatch, SetStateAction, ChangeEvent } from 'react'
import { Content, Detail, Input, ButtonGroup } from './index.style'
import Button from "@/components/button";
import { theme } from '@/global.style'

interface DialogContent {
  form: {
    name: string;
    price: string;
    amount: string;
  };
  setForm: Dispatch<SetStateAction<DialogContent['form']>>;
}
// const re = /^[1-9]+[0-9]*(\.[0-9]+)?$/

const getButtonStyle = (color: string) => ({
  padding: '8px 0',
  width: '45%',
  fontSize: '16px',
  background: color,
  color: '#fff',
})

const DialogContent = React.memo(({ form, setForm }: DialogContent) => {

  const handleChange = (e: ChangeEvent) => {
    let value = (e.target as HTMLInputElement).value
    if (/^0[0-9]+$/.test(value)) value = value.replace('0', '')
    setForm(prev => ({ ...prev, amount: value }))
  }

  return (
    <Content>
      <h3>交易內容</h3>

      <Detail>
        <span>商品:</span>
        <span>{form.name}</span>
      </Detail>
      <Detail>
        <span>價格:</span>
        <span>{Number(form.price).toFixed(4)}</span>
      </Detail>
      <Detail>
        <span>數量: </span>
        <Input value={ form.amount } onChange={ handleChange } type="number" />
      </Detail>

      <ButtonGroup>
        <Button label="買進" onClick={ () => {}} style={ getButtonStyle(theme.colors.green) }/>
        <Button label="賣出" onClick={ () => {}} style={ getButtonStyle(theme.colors.red) }/>
      </ButtonGroup>
    </Content>
  )
})

export default DialogContent