import React from 'react'
import { Accept, Check, SubLabel } from './style'

interface CheckBox {
  value: Boolean;
  handler: Function;
  content: String;
  style?: {
    [propsName: string]: string;
  }
}

const CheckBox = ({ value, handler, content, style }: CheckBox) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handler(event.target.checked)
  }

  return (
    <Accept style={ style }>
      <input onChange={ handleChange } style={ { display: 'none' } } id="agree" type="checkbox"/>
      <Check value={ value }/>
      <SubLabel htmlFor="agree" >{ content }</SubLabel>
    </Accept>
  )
}

export default CheckBox