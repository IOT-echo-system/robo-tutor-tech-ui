import React from 'react'
import type {WidgetPropType} from '../widget'
import {Button, Checkbox, Stack, TextField, Typography} from '@mui/material'
import {BoxedContainer} from '../../atoms'
import Link from 'next/link'
import theme from '../../../theme/theme'
import type {LocationProps} from '../../molecules'
import {Location} from '../../molecules'
import {useContactForm} from './useContactForm'

type ContactUsPropsType = {
  title: string,
  location: LocationProps
}

export const ContactUs: React.FC<WidgetPropType<ContactUsPropsType>> = ({data}) => {
  const {handleSubmit, responseMessage, error, onSubmit, submitted, fields, values, onChange} = useContactForm()

  return (
    <BoxedContainer justifyContent={'center'} alignItems={{xs: 'center', lg: 'start'}} mt={4} mb={4}
                    spacing={{xs: 4, sm: 8, lg: 12}}
                    direction={{xs: 'column', lg: 'row'}}>
      <Stack sx={{width: {xs: '100%', sm: '80%', md: '60%', lg: '50%'}}} spacing={2}>
        <Stack spacing={2}>
          <Typography variant={'h4'} component={'h2'}>
            {data.title}
          </Typography>
          {responseMessage && <Typography color={error ? 'error' : 'success'}>{responseMessage}</Typography>
          }
        </Stack>
        {
          !submitted && (
            <Stack component={'form'} spacing={2} onSubmit={onSubmit(handleSubmit)}>
              {fields.map((props, index) => {
                return <TextField key={`text-field-${index}`} {...props} />
              })}
              <Stack
                direction={'row'}
                alignItems={'start'}
                spacing={1}
                p={1}
                sx={{background: theme.palette.background.default}}
              >
                <Checkbox
                  sx={{padding: 0}}
                  value={values.consent}
                  onChange={event => {
                    onChange('consent', event.target.checked)
                  }}
                  required
                />
                <Typography variant={'body2'}>
                  I agree to share my information with you and understand it will be used as described in{' '}
                  <Typography
                    component={Link}
                    href={'/privacy-policy'}
                    sx={{fontSize: 'inherit', textDecoration: 'underline'}}
                  >
                    Robotutor Tech's privacy policy
                  </Typography>
                  .
                </Typography>
              </Stack>
              <Stack direction={'row'}>
                <Button
                  size={'large'}
                  type={'submit'}
                  variant={'contained'}
                  sx={{padding: '8px 64px', textTransform: 'initial'}}
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
          )
        }
      </Stack>
      <Stack direction={'row'} sx={{width: {xs: '100%', sm: '80%', md: '60%', lg: 'auto'}}} spacing={2}>
        <Location {...data.location} />
      </Stack>
    </BoxedContainer>
  )
}
