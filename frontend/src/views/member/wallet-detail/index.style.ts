import styled from 'styled-components'
import { theme } from '@/global.style'

export const CardTitle = styled.h3`
  margin-bottom: 16px;
`

export const Container = styled.div`
  @media screen and (max-width: 568px) { height: 160px; };
  height: 192px;
  overflow: auto;
`

export const Head = styled.div`
  margin-bottom: .4rem;
  padding-right: 1.4rem;
  width: 100%;
  display: flex;
  font-size: 1rem;

  & > *:not(:last-child) {
    width: 100%;
    flex: 0.5;
  }

  & > *:last-child {
    flex: 1;
  }
`

export const Item = styled.article`
  padding: 1rem 1.4rem 1rem 0;
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    width: 100%;
    flex: 0.5;
  }

  & > *:last-child {
    flex: 1;
  }
`

export const SpanAlign = styled.span<{ align?: string }>`
  text-align: ${ props => props.align || 'center' };
`

export const moneyStyle = {
  color: theme.colors.active,
}