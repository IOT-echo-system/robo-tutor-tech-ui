import React from 'react'
import Head from 'next/head'

export type SEODetailsType = {
  keywords: string[]
  description: string
  title: string
  metaImage: string
}
export type SiteMetaData = {
  title: string
  hostname: string
  keywords: string[]
  metaImage: string
  description: string
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
      <meta content={details.description || siteMetaData.description} name="description" />
      <meta content={title} itemProp="name" />
      <meta content={details.description || siteMetaData.description} itemProp="description" />
      <meta content={details.metaImage || siteMetaData.metaImage} itemProp="image" />
      <meta content={details.metaImage || siteMetaData.metaImage} property="og:image" />
      <meta content={title} property="og:title" />
      <meta content={details.description || siteMetaData.description} property="og:description" />
      <meta content={details.title || siteMetaData.title} property="og:site_name" />
      <meta content={`https://${siteMetaData.hostname}`} property="og:url" />
      <meta content={details.keywords.concat(siteMetaData.keywords).join(', ')} name="keywords" />
      <meta content={details.keywords.concat(siteMetaData.keywords).join(', ')} name="news_keywords" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={title} name="twitter:title" />
      <meta content={details.description || siteMetaData.description} name="twitter:description" />
      <meta content={details.metaImage || siteMetaData.metaImage} name="twitter:image:src" />
      <title>{title}</title>
    </Head>
  )
}
