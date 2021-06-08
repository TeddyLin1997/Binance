import styled from 'styled-components'

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
  margin-right: 12px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1.2px;
  cursor: pointer;
`

export const ButtonGroup = styled.div`
  @media screen and (max-width: 568px) { display: none; }
  display: flex;
`

export const buttonStyle = {
  margin: '0 4px',
  padding: '6px 16px',
  fontSize: '14px',
}