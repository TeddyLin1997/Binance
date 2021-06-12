import React from 'react'
import styled from 'styled-components'

interface Button {
  primary?: boolean;
  label: string;
  style?: { [propsName: string]: string };
  onClick: () => void;
}

const StyleButton = styled.button<{ isPrimary?: boolean }>`
  display: block;
  width: 100%;
  color: black;
  border-radius: 4px;
  background-color: ${ props => props.isPrimary ? props.theme.colors.active : 'white' };
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
      onClick={ onClick }
    >
      { label }
    </StyleButton>
  )
}

export default React.memo(Button)