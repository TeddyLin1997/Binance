import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  margin-left: auto;
  margin-right: 12px;
  width: fit-content;
  display: flex;
  align-items: center;
`

export const Logout = styled.img`
  @media screen and (max-width: 568px) { display: none; }
  padding: 2px;
  height: 24px;
  cursor: pointer;
`

export const Name = styled.span`
  @media screen and (max-width: 568px) { display: none; }
  margin-right: 24px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1.2px;
  cursor: pointer;
`

export const SignButton = styled(Link)<{ primary?: 'true' | undefined }>`
  @media screen and (max-width: 568px) { display: none }
  margin-left: 16px;
  padding: 6px 16px;
  font-size: 14px;
  background-color: ${ props => props.primary ? props.theme.colors.active : 'white' };
  border-radius: 4px;
  transition: opacity .2s;
  &:hover {
    opacity: .8;
  }
`
