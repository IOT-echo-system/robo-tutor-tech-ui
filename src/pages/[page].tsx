import type {GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage} from 'next'
import {pageList} from '../../data/pageList'
import type {PageContent, SiteMetaData} from '../components/templates'
import {PageTemplate} from '../components/templates'
import {pages} from '../../data/pages'
import {useRouter} from 'next/router'
import {siteDetails} from '../../data/siteDetails'

type PagePropsType = {pageContent: PageContent; siteMetaData: SiteMetaData}

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({pageContent, siteMetaData}) => {
  const router = useRouter()
  if (router.isFallback) {
    return <>Loader</>
  }

  return <PageTemplate pageContent={pageContent} siteMetaData={siteMetaData} />
}

export const getStaticProps: GetStaticProps<PagePropsType> = ({params}) => {
  const pageContent = pages[params?.page as keyof typeof pages] as PageContent | undefined
  const metaData: SiteMetaData = siteDetails.metadata
  if (!pageList.includes(`/${params?.page}`) && !pageContent) {
    return {notFound: true}
  }
  return {props: {pageContent: pageContent!, siteMetaData: metaData}, revalidate: 84600}
}

export const getStaticPaths: GetStaticPaths = () => {
  return {paths: pageList, fallback: true}
}

export default Page
