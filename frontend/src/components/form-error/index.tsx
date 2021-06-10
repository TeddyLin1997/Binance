import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { colors } from 'style/index'

interface FormError {
  msg: string;
}

const ErrorLabel = styled.div<{ isShow: boolean }>`
  height: 16px;
  text-align: left;
  font-size: 12px;
  color: ${ colors.red };
  opacity: ${ props => props.isShow ? 1 : 0 };
  transition: opacity .2s;
`

const FormError = ({ msg }: FormError) => {
  const [label, setLabel] = useState('')

  useEffect(() => {
    if (msg) setLabel(msg)
  }, [msg])

  return <ErrorLabel isShow={ msg !== '' }>{ label }</ErrorLabel>
}

export default React.memo(FormError)