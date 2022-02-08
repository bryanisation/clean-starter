import '../styles/global.css'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'

import Layout from '../components/layout'


const GlobalStyle = createGlobalStyle`
${normalize}
* {
  text-decoration: none;
  // cursor: none;
}
html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 84%;  
}
body {
  font-size: 16px;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: peach;
  overscroll-behavior: none;
  overflow-x: hidden;
  // background: red;
}
#__next {
  height: 100%;
  width: 100%;
  margin: 0 auto;
  max-width: 100%;
}
a{
  position: relative;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}
 a:after {
   content: '';
   height: 4px;
   width: 100%;
   background: inherit;
   position: absolute;
   bottom: 0;
   left: 0;
 }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout >
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
