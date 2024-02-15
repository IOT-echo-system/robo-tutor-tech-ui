import type {NextPage} from 'next'
import React from 'react'
import {PageTemplate} from '../components/templates'
import {pages} from '../../data/pages'

const ErrorPage: NextPage = () => {
  const content = pages.error
  return <PageTemplate pageContent={content} />
}

export default ErrorPage
