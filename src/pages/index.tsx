import type {GetStaticProps, InferGetStaticPropsType, NextPage} from 'next'
import {CMSService} from '../services'
import type {PageDetails} from '../services/typing/CMSService'
import Page from './[page]'

type PagePropsType = {pageDetails: PageDetails}

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = Page

export const getStaticProps: GetStaticProps<PagePropsType> = async () => {
  const pageResponse = await CMSService.getPageContent('index')
  if (!pageResponse) {
    return getStaticProps({params: {page: 'not-found'}})
  }
  return {props: {pageDetails: pageResponse}, revalidate: 84600}
}

export default HomePage
