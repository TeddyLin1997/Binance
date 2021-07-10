import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px 24px;
  width: 100%;
  max-width: 1068px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const WrapAside = styled.aside`
  @media screen and (max-width: 1120px) { width: 100% };
  width: 300px;
`

export const WrapMain = styled.main`
  @media screen and (max-width: 1120px) { width: 100% };
  display: flex;
  flex-direction: column;
  width: 700px;
  & > *:nth-child(3) {
    flex: 1;
  }
`
