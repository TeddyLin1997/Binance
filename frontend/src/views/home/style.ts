import styled from 'styled-components'

export const Header = styled.header`
  background: #0b0e11;
`

export const Banner = styled.div`
  margin: auto;
  padding: 12px 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1024px;
  /* height: 256px; */
  & > * {
    @media screen and (max-width: 568px) {
      width: 100%;
    }
    width: 50%;
  }
`

export const Images = styled.img`
  height: auto;
  vertical-align: middle;
`

export const Title = styled.h1`
  color: white;
`

export const SubTitle = styled.div`
  margin-top: 24px;
  color: gray;
  font-weight: bold;
`