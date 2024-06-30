import type {PropsWithChildren} from 'react'
import {useEffect} from 'react'
import React from 'react'
import {Stack, styled} from '@mui/material'
import {Header} from './Header'
import {useDispatch, useMedia} from '../../hooks'
import type {SiteStateType} from '../../store/reducers/site'
import {updateSite} from '../../store/actions/site'
import {Footer} from './Footer'

const Container = styled(Stack)(() => ({
  minHeight: '100vh'
}))

export const Layout: React.FC<PropsWithChildren<{site?: SiteStateType}>> = ({children, site}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (site) {
      dispatch(updateSite(site))
    }
  }, [site])

  const media = useMedia()

  if (!site) {
    return <div>Loader</div>
  }

  return (
    <Container justifyContent={'space-between'}>
      <Stack>
        <header>
          <Header />
        </header>
        <main>
          <Stack mt={media.md ? 8 : 6}>{children}</Stack>
        </main>
      </Stack>
      <footer>
        <Footer />
      </footer>
    </Container>
  )
}
