import type {PropsWithChildren} from 'react'
import React from 'react'
import {Stack, styled} from '@mui/material'
import {Header} from './Header'
import {Footer} from './Footer'

const Container = styled(Stack)(({theme}) => ({
  background: theme.palette.background.default,
  minHeight: '100vh'
}))

export const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <Container justifyContent={'space-between'}>
      <Stack>
        <header>
          <Header />
        </header>
        <main>{children}</main>
      </Stack>
      <footer>
        <Footer />
      </footer>
    </Container>
  )
}
