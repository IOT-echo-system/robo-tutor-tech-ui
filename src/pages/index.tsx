import type {GetStaticProps, InferGetStaticPropsType, NextPage} from 'next'
import {CMSService} from '../services'
import type {PageDetails} from '../services/typing/CMSService'
import Page from './[page]'
import {Loader} from '../components/atoms'

type PagePropsType = {pageDetails?: PageDetails}

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = props => {
  if (!props.pageDetails) {
    return <Loader />
  }
  return <Page pageDetails={props.pageDetails} />
}

export const getStaticProps: GetStaticProps<PagePropsType> = async () => {
  try {
    const pageResponse = await CMSService.getPageContent('index')
    if (!pageResponse) {
      return getStaticProps({params: {page: 'not-found'}})
    }
    return {props: {pageDetails: pageResponse}, revalidate: 84600}
  } catch (error) {
    return {props: {}, revalidate: 10}
  }
}

export default HomePage
