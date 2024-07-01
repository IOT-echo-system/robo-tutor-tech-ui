import {ThemeProvider} from '@mui/material'
import '../../styles/globals.css'
import theme from '../theme/theme'
import StoreProvider from '../store/configureStore'
import {Layout} from '../components/organisms'
import React from 'react'
import type {AppProps} from 'next/app'

const MyApp: React.FC<AppProps> = ({Component, pageProps, router}) => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </ThemeProvider>
    </StoreProvider>
  )
}

export default MyApp
