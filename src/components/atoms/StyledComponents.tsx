import {Stack, styled} from '@mui/material'
import type {LinkProps} from 'next/link'
import LinkComponent from 'next/link'
import {LoadingButton} from '@mui/lab'

export const BoxedContainer = styled(Stack)(({theme}) => ({
  margin: 'auto',
  width: '95%',
  [theme.breakpoints.up('sm')]: {
    width: '90%'
  },
  [theme.breakpoints.up('md')]: {
    width: '80%'
  }
}))

export const Link = styled(LinkComponent)<LinkProps & {disableUnderline?: 'true' | 'false'}>(
  ({theme, disableUnderline}) => ({
    textDecoration: disableUnderline !== 'true' ? 'underline' : 'none',
    ['&:hover']: {
      color: theme.palette.primary.dark
    }
  })
)

export const Button = styled(LoadingButton)(({theme}) => ({
  textTransform: 'initial',
  padding: theme.spacing(1, 4)
}))
