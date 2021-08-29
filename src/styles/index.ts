import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
    }
    ::-webkit-scrollbar-thumb {
      background: #cfcfcf;
      &:hover {
        background: #bfbfbf;
      }
    }
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  a, a:hover {
    color: inherit;
  }

  #root > div:last-child {
    height: 100vh;
  }
`

export { GlobalStyle }
