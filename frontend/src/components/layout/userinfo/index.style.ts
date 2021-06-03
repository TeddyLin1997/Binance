import styled from 'styled-components'

export const Container = styled.div`
  margin-left: auto;
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