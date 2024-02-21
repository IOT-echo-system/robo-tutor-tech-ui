import type {NextPage} from 'next'
import React from 'react'
import {PageTemplate} from '../components/templates'
import {pages} from '../../data/pages'
import {siteDetails} from '../../data/siteDetails'

const ErrorPage: NextPage = () => {
  const content = pages.error
  return <PageTemplate pageContent={content} siteMetaData={siteDetails.metadata} />
}

export default ErrorPage
