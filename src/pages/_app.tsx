import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import StoreWrapper from '../store'
import theme from 'themes/Default'
import GlobalStyles from 'themes/styles/globalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default StoreWrapper.withRedux(MyApp)
