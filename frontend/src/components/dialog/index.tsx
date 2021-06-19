import React, { Dispatch, SetStateAction, ReactNode } from 'react'
import Button from '@/components/button'
import styled from 'styled-components'
import close from 'images/close.svg'

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
  background-color: ${ props => props.theme.colors.gray };

  .close {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 10px;
    cursor: pointer;
    &:hover {
      opacity: .3;
    }
  }
`

interface Dialog {
  value: boolean;
  handle: Dispatch<SetStateAction<boolean>>;
  confirm?: true;
  children?: ReactNode;
}

const Dialog = ({ value, handle, confirm, children }: Dialog) => {
  const buttonStyle = {
    marginTop: '12px',
    padding: '6px 16px',
    textAlign: 'center',
  }

  return (
    <Mask isShow={ value } onClick={ () => handle(false) }>
      <Window onClick={ (event) => event.stopPropagation() }>
        <img className="close" src={close} onClick={ () => handle(false) } />
        { children }
        { confirm ? <Button style={ buttonStyle } label="確定" onClick={ () => handle(false) } primary /> : null }
      </Window>
    </Mask>
  )
}

export default Dialog