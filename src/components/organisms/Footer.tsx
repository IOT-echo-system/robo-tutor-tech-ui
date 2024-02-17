import React from 'react'
import {Divider, Stack, styled, Typography} from '@mui/material'
import {useMedia, useSelector} from '../../hooks'
import {MenuItem} from '../atoms'
import * as icons from '@mui/icons-material'
import type {SvgIconComponent} from '@mui/icons-material'
import Link from 'next/link'

const Container = styled(Stack)(({theme}) => ({
  background: theme.palette.common.white
}))

const MenuContainer = styled(Stack)(({theme}) => ({
  padding: theme.spacing(2, 2),
  borderTop: `1px solid ${theme.palette.background.default}`,
  [theme.breakpoints.up('md')]: {
    border: 'unset'
  }
}))

export const Footer: React.FC = () => {
  const {sections, social, copyrights} = useSelector(state => state.site.footer)
  const media = useMedia()

  return (
    <Container spacing={media.md ? 4 : 0} p={media.md ? 4 : 0}>
      <Stack direction={media.md ? 'row' : 'column'} justifyContent={'space-evenly'}>
        {sections.map(({label, menus}) => {
          return (
            <MenuContainer spacing={1} key={label}>
              <Typography variant={'subtitle1'}>
                <strong>{label}</strong>
              </Typography>
              <Stack spacing={2} pl={2}>
                {menus.map(({link, label}) => (
                  <MenuItem key={link} link={link} label={label} />
                ))}
              </Stack>
            </MenuContainer>
          )
        })}
      </Stack>
      {!media.md && <Divider />}
      {social.socials.length > 0 && (
        <Stack m={1} spacing={1}>
          <Stack direction={'row'} justifyContent={'center'}>
            <Typography>
              <strong>{social.title}</strong>
            </Typography>
          </Stack>
          <Stack direction={'row'} justifyContent={'center'} spacing={1}>
            {social.socials.map(({link, icon}) => {
              const Icon = icons[icon as keyof typeof icons] as SvgIconComponent | undefined
              if (!Icon) {
                return <></>
              }
              return (
                <Link href={link} key={link}>
                  <Icon fontSize={'medium'} />
                </Link>
              )
            })}
          </Stack>
        </Stack>
      )}
      <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} m={1}>
        <Typography variant={'body2'}>{copyrights}</Typography>
      </Stack>
    </Container>
  )
}
