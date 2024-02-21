import React from 'react'
import Head from 'next/head'
import type {SiteMetaData} from '../templates'

export type SEODetailsType = {
  keywords: string[]
  description: string
  title: string
  metaImage: string
}
type SeoDetailsPropsType = {details: SEODetailsType; siteMetaData: SiteMetaData}
export const SEODetails: React.FC<SeoDetailsPropsType> = ({details, siteMetaData}) => {
  const title = `${details.title}${details.title ? ' | ' : ''}${siteMetaData.title}`

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta
        content="default-src 'self' 'unsafe-eval' 'unsafe-inline' * blob: data: filesystem:; object-src 'none';"
        httpEquiv="Content-Security-Policy"
      />
      <meta content="basic-page" name="template" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="index,follow" name="robots" />
      <meta content={details.description} name="description" />
      <meta content={title} itemProp="name" />
      <meta content={details.description} itemProp="description" />
      <meta content={details.metaImage} itemProp="image" />
      <meta content={details.metaImage} property="og:image" />
      <meta content={title} property="og:title" />
      <meta content={details.description} property="og:description" />
      <meta content={details.title} property="og:site_name" />
      <meta content={`https://${siteMetaData.hostname}`} property="og:url" />
      <meta content={details.keywords.join(', ')} name="keywords" />
      <meta content={details.keywords.join(', ')} name="news_keywords" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={title} name="twitter:title" />
      <meta content={details.description} name="twitter:description" />
      <meta content={details.metaImage} name="twitter:image:src" />
      <title>{title}</title>
    </Head>
  )
}
