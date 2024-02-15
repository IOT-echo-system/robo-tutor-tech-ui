import type {GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage} from 'next'
import {pageList} from '../../data/pageList'
import type {PageContent} from '../components/templates'
import {PageTemplate} from '../components/templates'
import {pages} from '../../data/pages'
import {useRouter} from 'next/router'

type PagePropsType = {pageContent: PageContent}

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({pageContent}) => {
  const router = useRouter()
  if (router.isFallback) {
    return <>Loader</>
  }

  return <PageTemplate pageContent={pageContent} />
}

export const getStaticProps: GetStaticProps<PagePropsType> = ({params}) => {
  const pageContent = pages[params?.page as keyof typeof pages] as PageContent | undefined

  if (!pageList.includes(`/${params?.page}`) && !pageContent) {
    return {notFound: true}
  }
  return {props: {pageContent: pageContent!}, revalidate: 84600}
}

export const getStaticPaths: GetStaticPaths = () => {
  return {paths: pageList, fallback: true}
}

export default Page
