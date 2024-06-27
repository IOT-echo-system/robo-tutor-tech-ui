import React from 'react'
import {Stack, Typography, styled} from '@mui/material'
import {useSelector} from '../../hooks'
import {Menubar} from '../molecules'
import Link from 'next/link'

const Container = styled(Stack)(({theme}) => ({
  background: theme.palette.common.white,
  minHeight: theme.spacing(6),
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: theme.shadows[2],
  position: 'fixed',
  zIndex: 999,
  width: '100%',
  [theme.breakpoints.up('md')]: {
    minHeight: theme.spacing(8)
  }
}))

const SiteTitle = styled(Typography)(({theme}) => ({
  fontSize: theme.spacing(2.5),
  height: '100%',
  '&:hover': {
    textDecoration: 'none'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: theme.spacing(4)
  }
}))

export const Header: React.FC = () => {
  const metadata = useSelector(state => state.site.siteInfo)
  return (
    <Container>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} width={'90%'}>
        <Typography component={Link} href={'/'} sx={{'&:hover': {textDecoration: 'none'}}}>
          <SiteTitle>{metadata.title}</SiteTitle>
        </Typography>
        <Menubar />
      </Stack>
    </Container>
  )
}
