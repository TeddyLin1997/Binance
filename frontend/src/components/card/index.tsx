import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Card {
  width?: string;
  height?: string;
  children: ReactNode;
}

const Wrapper = styled.div<{ width?: string, height?: string }>`
  @media screen and (max-width: 568px) { width: 100% };
  padding: 16px 24px;
  width: ${ props => props.width || '' };
  height: ${ props => props.height || '' };
  border: 1px solid ${ props => props.theme.colors.gray };
  border-radius: 4px;
`

const Card = ({ width, height, children }: Card) => {
  <Wrapper width={width} height={height}>
    { children }
  </Wrapper>
}

export default Card