import styled from 'styled-components'

export const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    padding: 24px;
  }
  padding: 24px 76px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #0b0e11;
  & > * {
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    width: 50%;
    max-width: 512px;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  color: white;
`

export const SubTitle = styled.div`
  margin-top: 24px;
  color: gray;
  font-weight: bold;
`

export const Images = styled.img`
  height: auto;
  vertical-align: middle;
`