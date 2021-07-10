import React, { ReactNode } from 'react'
import styled from 'styled-components'
interface Card {
  width?: string;
  height?: string;
  children?: ReactNode;
}

const Wrapper = styled.div<{ width?: string, height?: string }>`
  @media screen and (max-width: 768px) { width: 100% };
  padding: 1rem 1.2rem;
  width: ${ props => props.width || '100%' };
  height: ${ props => props.height || '' };
  box-shadow: 0 0 4px 0px ${ props => props.theme.colors.cream };
  border-radius: 4px;
  color: white;
  background-color: ${ props => props.theme.colors.gray };
`

const Card = ({ width, height, children }: Card) => (
  <Wrapper width={width} height={height}>
    { children }
  </Wrapper>
)

export default Card