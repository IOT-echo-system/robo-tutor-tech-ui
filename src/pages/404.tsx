import type {GetStaticProps, InferGetStaticPropsType, NextPage} from 'next'
import {CMSService} from '../services'
import type {PagePropsType} from './[page]'
import Page from './[page]'
import {initSiteState} from '../store/reducers/site'
import type {PageDetails} from '../services/typing/CMSService'

const ErrorPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = Page

export const getStaticProps: GetStaticProps<PagePropsType> = async () => {
  try {
    const pageDetails = await CMSService.getPageContent('not-found')
    const site = await CMSService.getSiteInfoWithHeaderAndFooter()
    return {props: {pageDetails, site}, revalidate: 84600}
  } catch (error) {
    const pageDetails: PageDetails = {slug: 'not-found', header: [], mainContent: [], ctaBanner: []}
    return {props: {pageDetails, site: initSiteState}, revalidate: 120}
  }
}

export default ErrorPage
