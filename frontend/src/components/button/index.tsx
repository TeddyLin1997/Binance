import React from 'react'
import styled from 'styled-components'
import { colors } from '../../assets/style'

interface Button {
  primary?: Boolean;
  label: String;
  style?: { [propsName: string]: String };
  onClick: Function;
}

const StyleButton = styled.div<{ isPrimary?: Boolean }>`
  color: black;
  border-radius: 4px;
  background-color: ${ prop => prop.isPrimary ? colors.active : 'white' };
  cursor: pointer;
  &:hover {
    opacity: .8;
  }
  &:active {
    opacity: .5;
  }
`

const Button = ({ primary, label, style, onClick }: Button) => {
  return (
    <StyleButton
      style={ style }
      isPrimary={ primary }
      onClick={ () => onClick() }
    >
      { label }
    </StyleButton>
  )
}

export default React.memo(Button)