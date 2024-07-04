import type {GetStaticProps, InferGetStaticPropsType, NextPage} from 'next'
import {CMSService} from '../services'
import type {PagePropsType} from './[page]'
import Page from './[page]'
import type {PageDetails} from '../services/typing/CMSService'

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({pageDetails}) => {
  return <Page pageDetails={pageDetails} />
}

export const getStaticProps: GetStaticProps<PagePropsType> = async () => {
  try {
    const pageDetails = await CMSService.getPageContent('index')
    const initialValue = await CMSService.getInitialValue()
    return {props: {pageDetails, initialValue}, revalidate: 84600}
  } catch (error) {
    const pageDetails: PageDetails = {ctaBanner: [], header: [], mainContent: [], seo: null, slug: ''}
    return {props: {pageDetails}, revalidate: 30}
  }
}

export default HomePage
