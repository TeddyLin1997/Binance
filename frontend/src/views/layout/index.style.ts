import styled from 'styled-components'

export const MainView = styled.main`
  display: flex;
  margin-top: 64px;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 112px);
  overflow: auto;
  color: white;
  background-color: ${ props => props.theme.colors.gray };
`