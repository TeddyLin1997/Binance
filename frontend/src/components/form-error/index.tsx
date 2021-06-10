import React from 'react'
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
  transition: opacity .4s;
`

const FormError = ({ msg }: FormError) => <ErrorLabel isShow={ msg !== '' }>{ msg }</ErrorLabel>

export default React.memo(FormError)