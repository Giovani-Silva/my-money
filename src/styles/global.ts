import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['primary-600']};
  }
  body {
    background-color: ${(props) => props.theme['background-100']};
    color: ${(props) => props.theme['text-500']};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font: 400 1rem  ${(props) => props.theme['font-default']}
  }

  h1, h2, h3 {
      font-family:${(props) => props.theme['font-title']};
      letter-spacing: 1.41px;
  }
`
