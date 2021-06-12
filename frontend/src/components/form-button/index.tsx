import React from 'react'
import styled from 'styled-components'

const Submit = styled.input`
  margin: 36px 0 24px;
  padding: 8px 0;
  display: block;
  width: 100%;
  border-radius: 4px;
  background-color: ${ props => props.theme.colors.active };
  cursor: pointer;
  &:hover {
    opacity: .8;
  }
  &:active {
    opacity: .5;
  }
`

interface FormButton {
  label: string
}

const FormButton = ({ label }: FormButton) => <Submit type="submit" value={ label } />

export default FormButton