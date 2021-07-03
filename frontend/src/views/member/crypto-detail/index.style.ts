import styled from 'styled-components'

export const CardTitle = styled.h3`
  margin-bottom: 16px;
`

export const Container = styled.div`
  position: relative;
  padding-top: 32px;
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

  & > *:not(:nth-child(1)) {
    width: 100%;
    flex: 1;
  }

  & > *:nth-child(1) {
    flex: 0.5;
  }
`

export const Item = styled.article`
  padding: 12px 24px 12px 0;
  display: flex;
  align-items: center;
  min-width: 400px;

  & > *:not(:nth-child(1)) {
    width: 100%;
    flex: 1;
  }

  & > *:nth-child(1) {
    flex: 0.5;
  }
`

export const SpanAlign = styled.span<{ align?: string }>`
  text-align: ${ props => props.align || 'center' };
`