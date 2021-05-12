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

export const NavItem = styled.span`
  @media screen and (max-width: 568px) { display: none };
  margin: 0 8px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  &:hover {
    color: ${colors.active};
  }
`

export const ButtonGroup = styled.div`
  @media screen and (max-width: 568px) { display: none; }
  margin-left: auto;
`

export const Button = styled.button<{ primary?: boolean }>`
  margin: 0 4px;
  padding: 6px 16px;
  border-radius: 4px;
  background-color: ${ props => props.primary ? colors.active : 'white' };
  cursor: pointer;
  &:hover {
    opacity: .9;
  }
`

export const Menu = styled.img`
  @media screen and (min-width: 568px) { display: none };
  margin-right: 12px;
  margin-left: auto;
  width: auto;
  height: 24px;
`

export const AsideMenu = styled.aside<{ isOpen: boolean }>`
  @media screen and (min-width: 568px) { display: none };
  display: ${ props => props.isOpen ? 'block' : 'none' };
  position: fixed;
  top: 64px;
  right: 0;
  width: 180px;
  color: white;
  text-align: center;
  background-color: ${ colors.gray };
  & > div {
    padding: 12px 0;
    border-bottom: 1px solid gray;
  }
`