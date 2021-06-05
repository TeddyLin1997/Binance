import styled from 'styled-components'

export const Container = styled.div`
  margin-left: auto;
  margin-right: 12px;
  width: fit-content;
  display: flex;
  align-items: center;
`

export const Avatar = styled.img`
  @media screen and (max-width: 568px) { display: none; }
  margin-left: 16px;
  padding: 2px;
  height: 24px;
  border-radius: 100%;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 2px 2px #fff;
  }
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