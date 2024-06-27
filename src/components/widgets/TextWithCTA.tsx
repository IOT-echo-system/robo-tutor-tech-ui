import React from 'react'
import type {WidgetPropType} from './widget'
import type {CTAPropsType} from '../atoms'
import {BoxedContainer, CTA} from '../atoms'
import {Stack, styled, Typography} from '@mui/material'
import {useMedia} from '../../hooks'

const Container = styled(Stack)(({theme}) => ({
  minHeight: theme.spacing(32),
  background: 'skyblue',
  '& .MuiTypography-h2': {
    fontSize: theme.spacing(3),
    fontWeight: 500,
    [theme.breakpoints.up('md')]: {
      fontSize: theme.spacing(3.5)
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.spacing(5)
    }
  },
  '& .MuiButton-root': {
    fontSize: theme.spacing(2),
    textTransform: 'initial',
    fontWeight: 500,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1, 4),
      fontSize: theme.spacing(2.5)
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.spacing(3)
    }
  }
}))

type TextWithCTADataType = {text: string; cta: CTAPropsType}

export const TextWithCTA: React.FC<WidgetPropType<TextWithCTADataType>> = ({data}) => {
  const media = useMedia()
  return (
    <Container justifyContent={'center'}>
      <BoxedContainer
        direction={media.md ? 'row' : 'column'}
        justifyContent={media.md ? 'space-between' : 'center'}
        alignItems={'center'}
        spacing={4}
      >
        <Typography variant={'h2'} textAlign={'center'}>
          {data.text}
        </Typography>
        <CTA cta={data.cta} />
      </BoxedContainer>
    </Container>
  )
}
