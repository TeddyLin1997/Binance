import styled from 'styled-components'
import { colors } from '../../assets/style'

export const FormItem = styled.div`
  margin-top: 24px;
  position: relative;
  text-align: left;

  &:focus-within {
    color: ${ colors.active };
    input {
      border-color: ${ colors.active };
    }
  }

  &:hover {
    color: ${ colors.active };
    input {
      border-color: ${ colors.active };
    }
  }
`

export const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
`

export const Input = styled.input`
  padding: 8px;
  width: 100%;
  height: 32px;
  color: ${ colors.cream };
  border-radius: 4px;
  border: 1px solid ${ colors.cream };
  background: ${ colors.gray };
`

export const Look = styled.img`
  position: absolute;
  top: 26px;
  right: 8px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    opacity: .5;
  }
`