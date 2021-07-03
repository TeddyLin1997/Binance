import styled from 'styled-components'

export const CardTitle = styled.h3`
  margin-bottom: 16px;
`

export const Container = styled.div`
  position: relative;
  padding-top: 28px;
  height: 312px;
  overflow: auto;
`

export const Head = styled.div`
  padding-right: 24px;
  position: absolute;
  width: 100%;
  min-width: 400px;
  top: 0;
  display: flex;
  font-size: 16px;

  & > * {
    width: 100%;
    flex: .8;
  }

  & > *:nth-child(1) {
    flex: 1;
  }
`

export const Item = styled.article`
  padding: 12px 24px 12px 0;
  display: flex;
  align-items: center;
  min-width: 400px;

  & > * {
    width: 100%;
    flex: .8;
  }
  & > *:nth-child(1) {
    flex: 1;
  }
`

export const SpanAlign = styled.span<{ align?: string }>`
  text-align: ${ props => props.align || 'center' };
`