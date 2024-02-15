import React from 'react'
import {Stack, styled} from '@mui/material'

const Container = styled(Stack)(({theme}) => ({
  background: theme.palette.common.white,
  minHeight: theme.spacing(6),
  padding: theme.spacing(0, 2),
  boxShadow: theme.shadows[1],
  [theme.breakpoints.up('md')]: {
    minHeight: theme.spacing(8),
    padding: theme.spacing(0, 8)
  }
}))

export const Footer: React.FC = () => {
  // const metadata = useSelector((state) => state.site.metadata)
  return <Container direction={'row'} alignItems={'center'} justifyContent={'space-between'}></Container>
}
