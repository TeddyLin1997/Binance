import React, { Children } from 'react'
// import { useHistory } from "react-router-dom"
import styled from 'styled-components'
import { colors } from '../../assets/style'

interface Button {
  type?: 'primary';
  label: String;
  style?: { [propsName: string]: String };
}

const StyleButton = styled.div<{ isPrimary?: Boolean }>`
  color: black;
  border-radius: 4px;
  background-color: ${ prop => prop.isPrimary ? colors.active : 'white' };
  cursor: pointer;
  &:hover {
    opacity: .8;
  }
`

const Button = ({ type, style, label }: Button) => {
  return (
    <StyleButton style={ style } isPrimary={ type === 'primary' } >
      { label }
    </StyleButton>
  )
}

export default React.memo(Button)