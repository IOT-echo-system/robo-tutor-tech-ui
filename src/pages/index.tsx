import type {GetStaticProps, InferGetStaticPropsType, NextPage} from 'next'
import {CMSService} from '../services'
import type {PagePropsType} from './[page]'
import Page from './[page]'

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = Page

export const getStaticProps: GetStaticProps<PagePropsType> = async () => {
  try {
    const pageDetails = await CMSService.getPageContent('index')
    const site = await CMSService.getSiteInfoWithHeaderAndFooter()
    return {props: {pageDetails, site}, revalidate: 84600}
  } catch (error) {
    return {notFound: true}
  }
}

export default HomePage
