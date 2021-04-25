import { ThemeProvider } from 'styled-components'
import Meta from '../components/Atoms/Meta/meta'
import GlobalStyles from '../styles/global-style'
import theme from '../styles/theme'



export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
      <Meta />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
