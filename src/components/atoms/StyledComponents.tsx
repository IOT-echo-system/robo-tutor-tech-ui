import {Stack, styled} from '@mui/material'
import type {LinkProps} from 'next/link'
import LinkComponent from 'next/link'

export const BoxedContainer = styled(Stack)(({theme}) => ({
  padding: theme.spacing(0, 2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(0, 8)
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
