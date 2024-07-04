import type {GetStaticProps, InferGetStaticPropsType, NextPage} from 'next'
import {CMSService} from '../services'
import type {PagePropsType} from './[page]'
import Page from './[page]'
import type {PageDetails} from '../services/typing/CMSService'

const ErrorPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({pageDetails}) => {
  return <Page pageDetails={pageDetails} />
}

export const getStaticProps: GetStaticProps<PagePropsType> = async () => {
  try {
    const pageDetails = await CMSService.getPageContent('not-found')
    const initialValue = await CMSService.getInitialValue()
    return {props: {pageDetails, initialValue}, revalidate: 84600}
  } catch (error) {
    const pageDetails: PageDetails = {slug: 'not-found', header: [], mainContent: [], ctaBanner: [], seo: null}
    return {props: {pageDetails}, revalidate: 120}
  }
}

export default ErrorPage
