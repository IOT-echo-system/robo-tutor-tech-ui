import type {GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage} from 'next'
import {PageTemplate} from '../components/templates'
import {useRouter} from 'next/router'
import {CMSService} from '../services'
import type {PageDetails} from '../services/typing/CMSService'

type PagePropsType = {pageDetails: PageDetails}

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({pageDetails}) => {
  const router = useRouter()
  if (router.isFallback) {
    return <>Loader</>
  }

  return <PageTemplate pageDetails={pageDetails} />
}

export const getStaticProps: GetStaticProps<PagePropsType> = async ({params}) => {
  const pageResponse = await CMSService.getPageContent(params?.page as string)
  if (!pageResponse) {
    return getStaticProps({params: {page: 'not-found'}})
  }
  return {props: {pageDetails: pageResponse}, revalidate: 84600}
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pageListResponse = await CMSService.getPageList()
  const pageList = pageListResponse.map(page => `/${page.slug}`)
  return {paths: pageList, fallback: true}
}

export default Page
