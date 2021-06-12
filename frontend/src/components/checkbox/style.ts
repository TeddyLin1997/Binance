import styled from 'styled-components'
import check from 'images/check.svg'

export const Accept = styled.div`
  position: relative;
`

export const Check = styled.div<{ value: boolean }>`
  width: 15px;
  height: 15px;
  background-image: url(${ check });
  background-color: ${ props => props.value ? props.theme.colors.active : 'white' };
  background-size: contain;
`

export const SubLabel = styled.label`
  padding-left: 22px;
  position: absolute;
  top: -3px;
  left: 0;
  font-size: 14px;
  cursor: pointer;
`