import React from 'react'
import { colors } from 'style/index'

interface FormError {
  msg: string;
}

const FormError = ({ msg }: FormError) => {
  return (
    <div style={{
      height: '16px',
      textAlign: 'left',
      fontSize: '12px',
      color: colors.red,
    }} >{ msg }</div>
  )
}

export default FormError