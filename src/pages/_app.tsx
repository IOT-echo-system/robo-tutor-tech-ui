import {ThemeProvider} from '@mui/material'
import '../../styles/globals.css'
import type {AppContext, AppProps} from 'next/app'
import App from 'next/app'
import theme from '../theme/theme'
import StoreProvider from '../store/configureStore'
import {Layout} from '../components/organisms'
import React from 'react'
import {CMSService} from '../services'
import type {SiteStateType} from '../store/reducers/site'
import {useRouter} from 'next/router'

interface MyAppProps extends AppProps {
  site: SiteStateType
}

const MyApp = ({Component, pageProps, site}: MyAppProps): React.JSX.Element => {
  const router = useRouter()
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <Layout site={site}>
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </ThemeProvider>
    </StoreProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  try {
    const siteInfo = await CMSService.getSiteInfo()
    const navLink = await CMSService.getMainMenu()
    const footer = await CMSService.getFooter()

    return {...appProps, site: {siteInfo, header: {menus: navLink}, footer}}
  } catch (error: unknown) {
    return {...appProps}
  }
}

export default MyApp
