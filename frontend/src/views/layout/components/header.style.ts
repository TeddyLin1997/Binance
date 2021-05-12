import styled from 'styled-components'
import { colors } from '../../../assets/style'

export const Header = styled.header`
  padding: 0 12px;
  display: flex;
  height: 64px;
  align-items: center;
  background: #12161c;
`
export const Logo = styled.img`
  height: 100%;
  cursor: pointer;
  &:hover {
    opacity: .8;
  }
`

export const Menu = styled.img`
  @media screen and (min-width: 568px) {
    display: none
  };
  margin-right: 12px;
  margin-left: auto;
  width: auto;
  height: 24px;
`

export const NavItem = styled.span`
  @media screen and (max-width: 568px) {
    display: none;
  }
  margin: 0 8px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  &:hover {
    color: ${colors.active};
  }
`

export const ButtonGroup = styled.div`
  @media screen and (max-width: 568px) {
    display: none;
  }
  margin-left: auto;
`

export const Button = styled.button<{ primary?: Boolean }>`
  margin: 0 4px;
  padding: 6px 16px;
  border-radius: 4px;
  background: ${ props => props.primary ? colors.active : colors.white };
  cursor: pointer;
  &:hover {
    opacity: .9;
  }
`