import type {GetStaticProps, InferGetStaticPropsType, NextPage} from 'next'
import {CMSService} from '../services'
import type {PagePropsType} from './[page]'
import Page from './[page]'

const ErrorPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = Page

export const getStaticProps: GetStaticProps<PagePropsType> = async () => {
  try {
    const pageDetails = await CMSService.getPageContent('not-found')
    const site = await CMSService.getSiteInfoWithHeaderAndFooter()
    return {props: {pageDetails, site}, revalidate: 84600}
  } catch (error) {
    return {notFound: true}
  }
}

export default ErrorPage
