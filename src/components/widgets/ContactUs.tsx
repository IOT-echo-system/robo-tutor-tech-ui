import React, {useState} from 'react'
import type {WidgetPropType} from './widget'
import type {TextFieldProps} from '@mui/material'
import {Button, Checkbox, Stack, TextField, Typography} from '@mui/material'
import {BoxedContainer} from '../atoms'
import Link from 'next/link'
import theme from '../../theme/theme'
import {useForm} from '../../hooks'
import WebClient from 'web-client-starter'

type ContactUsPropsType = {
  title: string
}

export const ContactUs: React.FC<WidgetPropType<ContactUsPropsType>> = ({data}) => {
  const initialValue = {name: '', email: '', subject: '', message: '', consent: false}
  const {values, onChange, onSubmit} = useForm(initialValue)
  const [submitted, setSubmitted] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')
  const [error, setError] = useState(false)

  const fields: TextFieldProps[] = [
    {
      label: 'Full name',
      required: true,
      value: values.name,
      onChange: event => {
        onChange('name', event.target.value)
      }
    },
    {
      label: 'Email',
      required: true,
      type: 'email',
      value: values.email,
      onChange: event => {
        onChange('email', event.target.value)
      }
    },
    {
      label: 'Subject',
      value: values.subject,
      onChange: event => {
        onChange('subject', event.target.value)
      }
    },
    {
      label: 'How can we help?',
      required: true,
      multiline: true,
      rows: 4,
      value: values.message,
      onChange: event => {
        onChange('message', event.target.value)
      }
    }
  ]

  const handleSubmit = () => {
    setError(false)
    setResponseMessage('')
    WebClient.post({
      baseUrl: '/api',
      path: '/contact',
      body: values
    })
      .then(() => {
        setSubmitted(true)
        setResponseMessage('Thank you contacting us! Our team will reach out to you soon.')
      })
      .catch(() => {
        setError(true)
        setResponseMessage('Something went wrong, please try again!')
      })
  }

  return (
    <BoxedContainer justifyContent={'center'} alignItems={'center'} mt={4} mb={4} spacing={2}>
      <Stack sx={{width: {sx: '100%', sm: '80%', md: '60%', lg: '40%'}}}>
        <Stack>
          <Typography variant={'h4'} component={'h2'}>
            {data.title}
          </Typography>
          {responseMessage && <Typography color={error ? 'error' : 'success'}>{responseMessage}</Typography>}
        </Stack>
        {!submitted && (
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
        )}
      </Stack>
    </BoxedContainer>
  )
}
