import styled from "styled-components";

export const Content = styled.div`
  width: 240px;
  color: #fff;
`

export const Detail = styled.div`
  margin: 16px 0;
  display: flex;
  font-weight: bold;
  font-size: 18px;
  justify-content: space-between;
  align-items: center;
`

export const Input = styled.input`
  padding: 4px;
  width: 120px;
  color: #fff;
  text-align: right;
  font-weight: bold;
  font-size: 18px;
  border-bottom: 1px solid ${ props => props.theme.colors.active };
  background-color: transparent;

  // hidden up/down arrow
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type='number']{
    -moz-appearance: textfield;
  }
`

export const ButtonGroup = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
`