import styled from 'styled-components'
import { colors } from 'style/index'
import { Link } from 'react-router-dom'

export const SignForm = styled.form`
  @media screen and (max-width: 768px) {
    margin: 0;
    width: 100%;
    height: auto;
  }
  margin: 40px auto;
  padding: 24px;
  width: 386px;
  height: fit-content;
  color: ${ colors.cream };
  text-align: center;
  background: ${ colors.gray };
`

export const SubLink = styled(Link)`
  color: ${ colors.active };
  &:hover {
    border-bottom: 1px solid ${ colors.active };
  }
`
