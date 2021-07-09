import styled from 'styled-components'
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
  color: ${ props => props.theme.colors.cream };
  text-align: center;
  
  background: ${ props => props.theme.colors.gray };
`

export const SubLink = styled(Link)`
  color: ${ props => props.theme.colors.active };
  &:hover {
    border-bottom: 1px solid ${ props => props.theme.colors.active };
  }
`

export const SubLogin = styled.label`
  margin-left: 12px;
  color: ${ props => props.theme.colors.active };
  &:hover {
    border-bottom: 1px solid ${ props => props.theme.colors.active };
  }
`
