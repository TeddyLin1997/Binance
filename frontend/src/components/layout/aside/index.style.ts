import styled from 'styled-components'
import { colors } from 'style/index'
import { Link } from 'react-router-dom'

export const Menu = styled.aside<{ isOpen: boolean }>`
  @media screen and (min-width: 568px) { display: none };
  display: ${ props => props.isOpen ? 'block' : 'none' };
  position: fixed;
  top: 64px;
  right: 0;
  width: 180px;
  color: white;
  text-align: center;
  background-color: ${ colors.dark };
`

export const MenuItem = styled(Link)`
  margin: 0;
  padding: 12px 0 ;
  display: block;
  color: white;
  font-weight: bold;
  font-size: 18px;
  padding: 12px 0;
  border-top: 2px solid ${ colors.gray };
  cursor: pointer;
  &:hover {
    color: ${colors.active};
  }
`

export const Icon = styled.img`
  @media screen and (min-width: 569px) { display: none };
  margin-right: 12px;
  margin-left: auto;
  width: auto;
  height: 24px;
`