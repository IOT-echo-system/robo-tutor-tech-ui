import {Stack, styled} from '@mui/material'

export const BoxedContainer = styled(Stack)(({theme}) => ({
  padding: theme.spacing(0, 2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(0, 8)
  }
}))
