import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    dark: '#12161c',
    gray: '#1e2126',
    active: '#f8d030',
    green: '#0caa6e',
    red: '#f6465d',
    cream: '#b6b0a6',
  }
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
    user-select: none;
  }

  body {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 320px;
    background-color: black;
  }

  a {
    color: black;
  }
`