import React from 'react'
import type {WidgetPropType} from './widget'
import {Button, Card, CardActions, CardContent, CardMedia, Stack, styled, Typography} from '@mui/material'
import {BoxedContainer} from '../atoms'
import {useMedia} from '../../hooks'

const Container = styled(Stack)(({theme}) => ({
  justifyContent: 'center',
  background: theme.palette.background.default,
  padding: theme.spacing(4, 0),
  alignItems: 'center',
  '& h2': {
    fontSize: theme.spacing(4),
    fontWeight: 500,
    [theme.breakpoints.up('md')]: {
      fontSize: theme.spacing(6)
    }
  }
}))

type ContentCardsPropsType = {
  title: string
  cards: Array<{
    title: string
    image: {src: string; alt: string}
    content: string
    ctaText?: string
    ctaLink?: string
  }>
}

const getCardWidth = (numberOfCards: number): string => {
  return `calc(${100 / numberOfCards}% - 32px)`
}

export const ContentCards: React.FC<WidgetPropType<ContentCardsPropsType>> = ({data}) => {
  const media = useMedia()
  const cardWidth = getCardWidth(Math.min(data.cards.length, 4))
  return (
    <Container>
      <BoxedContainer justifyContent={'center'} alignItems={'center'}>
        <Typography variant={'h2'} textAlign={'center'}>
          {data.title}
        </Typography>
        <Stack direction={media.md ? 'row' : 'column'} flexWrap={'wrap'}>
          {data.cards.map((card, index) => {
            return (
              <Card
                key={`card_${index}`}
                sx={{margin: 2, minWidth: 320, width: media.md ? cardWidth : 'calc(100% - 32px)'}}
              >
                <CardMedia
                  component="img"
                  alt={card.image.alt}
                  height={media.md ? '220' : '180'}
                  image={card.image.src}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.content}
                  </Typography>
                </CardContent>
                {card.ctaLink && card.ctaText && (
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                )}
              </Card>
            )
          })}
        </Stack>
      </BoxedContainer>
    </Container>
  )
}
