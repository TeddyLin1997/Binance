import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  margin: 16px auto;
  padding: 0 12px;
  width: 100%;
  max-width: 1024px;
  text-align: center;
`

export const More = styled(Link)`
  margin-top: 36px;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: ${ props => props.theme.colors.active };
  }
`