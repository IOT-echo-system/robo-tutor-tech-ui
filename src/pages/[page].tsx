import type {GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage} from 'next'
import {PageTemplate} from '../components/templates'
import {CMSService} from '../services'
import type {PageDetails} from '../services/typing/CMSService'
import {Loader, SEODetails} from '../components/atoms'
import React from 'react'
import {useRouter} from 'next/router'

export type PagePropsType = {pageDetails: PageDetails}

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({pageDetails}) => {
  const router = useRouter()
  if (router.isFallback) {
    return <Loader />
  }

  return (
    <>
      <SEODetails seo={pageDetails.seo} />
      <PageTemplate pageDetails={pageDetails} />
    </>
  )
}

export const getStaticProps: GetStaticProps<PagePropsType> = async ({params}) => {
  try {
    const pageDetails = await CMSService.getPageContent(params?.page as string)
    const initialValue = await CMSService.getInitialValue()
    return {props: {pageDetails, initialValue}, revalidate: 84600}
  } catch (error) {
    return {notFound: true}
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const pageListResponse = await CMSService.getPageList()
    const pageList = pageListResponse.map(page => `/${page.slug}`)
    return {paths: pageList, fallback: true}
  } catch (error) {
    return {paths: [], fallback: true}
  }
}

export default Page
