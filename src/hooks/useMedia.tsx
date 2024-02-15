import {useMediaQuery} from '@mui/material'
import theme from '../theme/theme'

type UseMediaReturnType = {[P in 'sm' | 'md' | 'lg' | 'xl']: boolean}

export const useMedia = (): UseMediaReturnType => {
  return {
    sm: useMediaQuery(theme.breakpoints.up('sm')),
    md: useMediaQuery(theme.breakpoints.up('md')),
    lg: useMediaQuery(theme.breakpoints.up('lg')),
    xl: useMediaQuery(theme.breakpoints.up('xl'))
  }
}
