import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../../assets/style'

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  text-align: center;
`

export const Section = styled.section`
  height: 320px;
  font-weight: bold;
  & > * {
    border-bottom: 1px solid lightgray;
  }
`

export const Article = styled.article`
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  &:hover {
    background-color: whitesmoke;
    transition: all .4s;
  }
  & > * {
    font-size: 16px;
    &:nth-child(1) {
      width: 20%;
      text-align: left;
    }
    &:nth-child(2) {
      width: 20%;
      text-align: left;
    }
    &:nth-child(3) {
      @media screen and (max-width: 568px) { width: 30% };
      width: 14%;
      text-align: right;
    }
    &:nth-child(4) {
      @media screen and (max-width: 568px) { display: none };
      width: 20%;
      text-align: center;
    }
  }
`

export const Button = styled.button`
  width: fit-content;
  padding: 8px 12px;
  border-radius: 6px;
  color: white;
  background-color: ${ colors.green };
`

export const Head = styled.div`
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  & > * {
    font-size: 14px;
    text-align: center;
    color: gray;
    &:nth-child(1) {
      width: 20%;
      text-align: left;
    }
    &:nth-child(2) {
      width: 20%;
      text-align: left;
    }
    &:nth-child(3) {
      @media screen and (max-width: 568px) { width: 30% };
      width: 14%;
      text-align: right;
    }
    &:nth-child(4) {
      @media screen and (max-width: 568px) { display: none };
      width: 20%;
      text-align: center;
    }
  }
`

export const More = styled(Link)`
  margin: 16px auto;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: ${ colors.active };
  }
`