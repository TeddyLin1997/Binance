import styled from 'styled-components'
import { colors } from 'style/index'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  @media screen and (min-width: 569px) { display: none };
`

export const Icon = styled.img`
  height: 24px;
  vertical-align: middle;
`

export const Menu = styled.aside<{ isOpen: boolean }>`
  display: ${ props => props.isOpen ? 'block' : 'none' };
  position: fixed;
  top: 64px;
  right: 0;
  width: 180px;
  color: white;
  text-align: center;
  opacity: 1;
  background-color: ${ colors.dark };
  transition: opacity .2s;
`

export const MenuItem = styled(Link)`
  margin: 0;
  padding: 12px 0;
  display: block;
  color: white;
  font-weight: bold;
  font-size: 18px;
  border-top: 2px solid ${ colors.gray };
`

export const MenuLogOut = styled.div`
  margin: 0;
  padding: 12px 0;
  color: white;
  font-weight: bold;
  font-size: 18px;
  border-top: 2px solid ${ colors.gray };
`