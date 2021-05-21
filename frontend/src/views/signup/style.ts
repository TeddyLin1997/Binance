import styled from 'styled-components'
import { colors } from '../../assets/style'
import { Link } from 'react-router-dom'

export const SignForm = styled.div`
  @media screen and (max-width: 768px) {
    margin: 0;
    width: 100%;
    height: calc(100vh - 112px);
  }
  margin: 40px auto;
  padding: 24px;
  width: 386px;
  height: fit-content;
  color: ${ colors.cream };
  text-align: center;
  border-radius: 2px;
  background: ${ colors.gray };
`

export const FormItem = styled.div`
  margin: 24px 0;
  position: relative;
  text-align: left;

  &:focus-within {
    color: ${ colors.active };
    & > input {
      border-color: ${ colors.active };
    }
  }

  &:hover {
    color: ${ colors.active };
    & > input {
      border-color: ${ colors.active };
    }
  }

  & > div {
    font-size: 14px;
    font-weight: bold;
  }

  & > input {
    padding: 8px;
    width: 100%;
    height: 40px;
    color: ${ colors.cream };
    border-radius: 4px;
    border: 1px solid ${ colors.cream };
    background: ${ colors.gray };
  }
`

export const Look = styled.img`
  position: absolute;
  top: 26px;
  right: 8px;
  width: 28px;
  height: 28px;
  cursor: pointer;
  &:hover {
    opacity: .5;
  }
`

export const Login = styled(Link)`
  color: ${ colors.active };
  &:hover {
    border-bottom: 1px solid ${ colors.active };
  }
`