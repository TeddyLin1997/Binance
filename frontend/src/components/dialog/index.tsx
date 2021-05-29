import React, { Dispatch, SetStateAction, ReactNode } from 'react'
import styled from 'styled-components'
import { colors } from '../../assets/style'
import Button from '../button'

const Mask = styled.div<{ isShow: boolean }>`
  position: fixed;
  display: ${ props => props.isShow ? 'flex' : 'none' };
  top: 0;
  left: 0;  
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: #00000088;
  transition: 'all .4s';
`

const Window = styled.div`
  position: relative;
  top: -10%;
  margin: auto;
  padding: 24px;
  width: fit-content;
  min-width: 240px;
  border-radius: 4px;
  background-color: ${ colors.gray };
`

interface Dialog {
  value: boolean;
  handler: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

const Dialog = ({ value, handler, children }: Dialog) => {
  const buttonStyle = {
    marginTop: '12px',
    padding: '6px 16px',
    textAlign: 'center',
  }

  return (
    <Mask isShow={ value } >
      <Window>
        { children }
        <Button style={ buttonStyle } label="確定" onClick={ () => handler(false) } primary />
      </Window>
    </Mask>
  )
}

export default Dialog