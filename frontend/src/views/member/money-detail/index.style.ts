import styled, { keyframes } from 'styled-components'

export const CardHead = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const CardTitle = styled.h3`
  margin-bottom: 16px;
`

export const MoneyTotal = styled.div`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: bold;
  text-align: right;
  color: ${ props => props.theme.colors.active };
`

export const MoneyNum = styled.div`
  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;
  & > span:nth-child(2) {
    color: ${ props => props.theme.colors.active };
    font-weight: bold;
  }
`

export const Update = styled.img<{ isLoad: boolean }>`
  width: 20px;
  height: 20px;
  cursor: pointer;
  animation: ${ props => props.isLoad ? animationUpdate : '' } 1s linear infinite;
  &:hover {
    opacity: .4;
  }
`

const animationUpdate = keyframes`
  100% { transform: rotate(360deg) };
`
