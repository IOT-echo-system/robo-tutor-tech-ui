import React from 'react'
import type {WidgetPropType} from './widget'
import {Stack, styled, Typography} from '@mui/material'
import type {CTAPropsType, ImageType} from '../atoms'
import {BoxedContainer, CTA} from '../atoms'
import {PUBLIC_URL} from '../../config/cmsApiConfig'
import {useMedia} from '../../hooks'

const Container = styled(Stack)<{src: string}>(({theme, src}) => ({
  background: src ? `url(${src})` : theme.palette.primary.light,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: theme.spacing(52),
  justifyContent: 'center',
  '& h1': {
    fontSize: theme.spacing(6),
    fontWeight: 500,
    [theme.breakpoints.up('md')]: {
      fontSize: theme.spacing(8)
    }
  }
}))

type HeroBannerPropsType = {
  cta: CTAPropsType
  title: string
  subtitle: string
  darkText: boolean
  image: ImageType
  mobileImage?: ImageType
}

export const HeroBanner: React.FC<WidgetPropType<HeroBannerPropsType>> = ({data}) => {
  const media = useMedia()
  return (
    <Container src={PUBLIC_URL + data.image.data.attributes.formats.large.url}>
      <BoxedContainer spacing={2} width={media.md ? '60%' : '100%'} border={1}>
        <Typography variant={media.md ? 'h1' : 'h3'} component={'h1'} color={data.darkText ? 'black' : 'white'}>
          {data.title}
        </Typography>
        <Typography variant={media.md ? 'h4' : 'subtitle1'} component={'h2'} color={data.darkText ? 'black' : 'white'}>
          {data.subtitle}
        </Typography>
        <CTA cta={data.cta} />
      </BoxedContainer>
    </Container>
  )
}
