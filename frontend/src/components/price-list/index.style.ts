import styled from 'styled-components'

export const Container = styled.div<{ isLoading: boolean, height: string }>`
  display: ${ props => props.isLoading ? 'flex' : 'block' };
  height: ${ props => props.height };
`

export const Section = styled.section`
  font-weight: bold;
  & > article {
    border-bottom: 1px solid lightgray;
  }
`

export const Head = styled.div`
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  color: gray;
  font-size: 14px;

  & > * {
    &:nth-child(1) {
      @media screen and (min-width: 569px) {width: 30% };
      min-width: 80px;
      text-align: left;
    }
    &:nth-child(2) {
      @media screen and (min-width: 569px) { width: 20% };
      min-width: 100px;
      text-align: left;
    }
    &:nth-child(3) {
      @media screen and (min-width: 569px) { width: 20% };
      min-width: 60px;
      text-align: right;
    }
    &:nth-child(4) {
      @media screen and (max-width: 568px) { display: none };
      margin-left: auto;
      padding: 0 12px;
      text-align: center;
    }
  }
`

export const Article = styled.article`
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  cursor: pointer;
  transition: all .2s;
  &:hover {
    background-color: ${ props => props.theme.colors.dark };
  }
  & > * {
    font-size: 16px;
    &:nth-child(1) {
      @media screen and (min-width: 569px) { width: 30% };
      min-width: 80px;
      text-align: left;
    }
    &:nth-child(2) {
      @media screen and (min-width: 569px) { width: 20% };
      min-width: 100px;
      text-align: left;
    }
    &:nth-child(3) {
      @media screen and (min-width: 569px) { width: 20% };
      min-width: 60px;
      text-align: right;
    }
    &:nth-child(4) {
      @media screen and (max-width: 568px) { display: none };
      margin-left: auto;
    }
  }
`

export const AmountNumber = styled.div<{ isUp: boolean }>`
  color: ${ props => props.isUp ? props.theme.colors.green : props.theme.colors.red };
`

export const Button = styled.button`
  width: fit-content;
  padding: 8px 12px;
  border-radius: 6px;
  color: ${ props => props.theme.colors.dark };
  background-color: ${ props => props.theme.colors.active };
  cursor: pointer;
  &:hover { opacity: .8 };
`