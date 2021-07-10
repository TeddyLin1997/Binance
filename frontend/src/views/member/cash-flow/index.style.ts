import styled from 'styled-components'

export const CardTitle = styled.h3`
  margin-bottom: 16px;
`

export const Container = styled.div`
  padding-top: .4rem;
  height: 384px;
  overflow: auto;
`

export const Head = styled.div`
  margin-bottom: .4rem;
  padding-right: .8rem;
  width: 100%;
  display: flex;
  font-size: .8rem;

  & > * {
    flex: .5;
  }
  & > *:nth-child(1) {
    flex: .8;
  }
  & > *:last-child {
    flex: 1;
  }
`

export const Item = styled.article`
  padding: .8rem .8rem .8rem 0;
  display: flex;
  align-items: center;
  font-size: .8rem;

  & > * {
    flex: .5;
  }
  & > *:nth-child(1) {
    flex: .8;
  }
  & > *:last-child {
    flex: 1;
  }
`

export const SpanAlign = styled.span<{ align?: string }>`
  text-align: ${ props => props.align || 'center' };
`