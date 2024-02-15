import React from 'react'
import {Stack, Typography, styled} from '@mui/material'
import {useSelector} from '../../hooks'
import {Menubar} from '../molecules'
import {BoxedContainer} from '../atoms'
import Link from 'next/link'

const Container = styled(Stack)(({theme}) => ({
  background: theme.palette.common.white,
  minHeight: theme.spacing(6),
  boxShadow: theme.shadows[2],
  [theme.breakpoints.up('md')]: {
    minHeight: theme.spacing(8)
  }
}))

const SiteTitle = styled(Typography)(({theme}) => ({
  fontSize: theme.spacing(2.5),
  '&:hover': {
    textDecoration: 'none'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: theme.spacing(4)
  }
}))

export const Header: React.FC = () => {
  const metadata = useSelector(state => state.site.metadata)
  return (
    <Container>
      <BoxedContainer direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <Link href={'/'}>
          <SiteTitle>{metadata.title}</SiteTitle>
        </Link>
        <Menubar />
      </BoxedContainer>
    </Container>
  )
}
