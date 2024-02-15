import React from 'react'
import type {WidgetPropType} from './widget'
import {Stack, styled, Typography} from '@mui/material'
import {BoxedContainer} from '../atoms'

const Container = styled(Stack)<{src: string; bg: 'color' | 'image'}>(({theme, src, bg}) => ({
  background: bg === 'color' ? src : `url(${src})`,
  minHeight: theme.spacing(40),
  justifyContent: 'center',
  alignItems: 'center',
  '& h1': {
    fontSize: theme.spacing(6),
    fontWeight: 500,
    [theme.breakpoints.up('md')]: {
      fontSize: theme.spacing(8)
    }
  }
}))

type HeroBannerPropsType = {
  bg: 'color' | 'image'
  color?: string
  image?: {src: string; alt: string}
  title: string
}

export const HeroBanner: React.FC<WidgetPropType<HeroBannerPropsType>> = ({data}) => {
  return (
    <Container bg={data.bg} src={(data.bg === 'color' ? data.color : data.image?.src) ?? 'white'}>
      <BoxedContainer justifyContent={'center'} alignItems={'center'}>
        <Typography variant={'h1'} textAlign={'center'}>
          {data.title}
        </Typography>
      </BoxedContainer>
    </Container>
  )
}
