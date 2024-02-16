import type {PropsWithChildren} from 'react'
import React from 'react'
import {Stack, styled} from '@mui/material'
import {Header} from './Header'
import {Footer} from './Footer'
import {useMedia} from '../../hooks'

const Container = styled(Stack)(({theme}) => ({
  background: theme.palette.background.default,
  minHeight: '100vh'
}))

export const Layout: React.FC<PropsWithChildren> = ({children}) => {
  const media = useMedia()
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
