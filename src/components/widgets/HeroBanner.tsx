import React from 'react'
import type {WidgetPropType} from './widget'
import {Stack, styled, Typography} from '@mui/material'
import {BoxedContainer} from '../atoms'

const Container = styled(Stack)<{src: string; bg: 'color' | 'image'; size?: 'large' | 'normal'}>(
  ({theme, src, bg, size}) => ({
    background: bg === 'color' ? src : `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: theme.spacing(size === 'large' ? 60 : 40),
    justifyContent: 'center',
    alignItems: 'center',
    '& h1': {
      fontSize: theme.spacing(6),
      fontWeight: 500,
      [theme.breakpoints.up('md')]: {
        fontSize: theme.spacing(8)
      }
    }
  })
)

type HeroBannerPropsType = {
  bg: 'color' | 'image'
  color?: string
  image?: {src: string; alt: string}
  title: string
  titleColor?: 'light' | 'dark'
  size?: 'normal' | 'large'
}

export const HeroBanner: React.FC<WidgetPropType<HeroBannerPropsType>> = ({data}) => {
  return (
    <Container bg={data.bg} src={(data.bg === 'color' ? data.color : data.image?.src) ?? 'white'} size={data.size}>
      <BoxedContainer justifyContent={'center'} alignItems={'center'}>
        <Typography variant={'h1'} textAlign={'center'} color={data.titleColor === 'light' ? 'white' : 'black'}>
          {data.title}
        </Typography>
      </BoxedContainer>
    </Container>
  )
}
