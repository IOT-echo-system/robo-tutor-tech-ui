import React from 'react'
import {Stack} from '@mui/material'
import * as widgets from '../widgets'
import type {Content} from '../widgets/widget'
import type {SEODetailsType} from '../atoms'
import {SEODetails} from '../atoms'

export type PageContent = {contents: Content[]; seoDetails: SEODetailsType}
export type SiteMetaData = {title: string}
type PageTemplatePropsType = {pageContent: PageContent; siteMetaData: SiteMetaData}
export const PageTemplate: React.FC<PageTemplatePropsType> = ({pageContent, siteMetaData}) => {
  const {contents} = pageContent
  return (
    <Stack>
      <SEODetails details={pageContent.seoDetails} siteMetaData={siteMetaData} />
      {contents.map((content, index) => {
        const Component = widgets[content.widget as keyof typeof widgets]
        return <Component key={`content_${index}`} styles={content.styles} data={content.data} />
      })}
    </Stack>
  )
}
