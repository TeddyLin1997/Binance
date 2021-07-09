import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  margin: auto;
  height: 48px;
  line-height: 48px;
  font-size: 14px;
  color: gray;
  text-align: center;
  border-top: 1px solid ${ props => props.theme.colors.gray };
  background-color: black;
  z-index: 10;
`

const FooterBar = () => <Footer>Chris Binance @ 2021</Footer>

export default React.memo(FooterBar)