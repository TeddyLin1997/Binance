import React, { useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { Accept, Check, SubLabel } from './style'

interface CheckBox {
  initValue: boolean;
  value: UseFormRegisterReturn;
  content: string;
  style?: {
    [propsName: string]: string;
  }
}

const CheckBox =  ({ initValue, value, content, style }: CheckBox) => {
  const [ isCheck, setIsCheck ] = useState(initValue)
  const handleClick = () => setIsCheck(prev => !prev)

  return (
    <Accept style={ style }>
      <input { ...value } id="agree" type="checkbox" style={ { display: 'none' } } />
      <Check value={ isCheck } />
      <SubLabel htmlFor="agree" onClick={ handleClick } >{ content }</SubLabel>
    </Accept>
  )
}

export default CheckBox