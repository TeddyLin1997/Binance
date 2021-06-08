import styled from 'styled-components'
import { colors } from 'style/index'
import { Link } from 'react-router-dom'

export const Header = styled.header`
  position: fixed;
  top: 0;
  padding: 0 12px;
  display: flex;
  width: 100%;
  height: 64px;
  align-items: center;
  background: ${ colors.dark };
  z-index: 10;
`

export const Logo = styled.img`
  height: 100%;
  cursor: pointer;
  &:hover {
    opacity: .8;
  }
`

export const NavItem = styled(Link)`
  @media screen and (max-width: 568px) { display: none };
  margin: 0 8px;
  font-weight: bold;
  color: white;
  &:hover {
    color: ${colors.active};
  }
`