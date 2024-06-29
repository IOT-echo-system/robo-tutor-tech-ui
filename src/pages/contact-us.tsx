import React from 'react'
import type {GetStaticProps, InferGetStaticPropsType, NextPage} from 'next'
import {ContactUs} from '../components/templates'
import type {LocationPropsType} from '../components/molecules'
import {Location} from '../components/molecules'
import {BoxedContainer} from '../components/atoms'
import {Stack} from '@mui/material'
import {CMSService} from '../services'

const ContactUsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return <BoxedContainer
    justifyContent={'center'}
    alignItems={{xs: 'center', lg: 'start'}}
    pt={4}
    pb={4}
    spacing={{xs: 4, sm: 8, lg: 12}}
    direction={{xs: 'column', lg: 'row'}}
  >
    <Stack sx={{width: {xs: '100%', sm: '80%', md: '60%', lg: '50%'}}} spacing={2}>
      <ContactUs />
    </Stack>
    <Stack direction={'row'} sx={{width: {xs: '100%', sm: '80%', md: '60%', lg: 'auto'}}} spacing={2}>
      <Location {...props} />
    </Stack>
  </BoxedContainer>
}

export const getStaticProps: GetStaticProps<LocationPropsType> = async () => {
  const location = await CMSService.getOfficeLocation()
  return {props: location, revalidate: 84600}
}

export default ContactUsPage
