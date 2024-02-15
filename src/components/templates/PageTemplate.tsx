import React from 'react'
import {Stack} from '@mui/material'
import * as widgets from '../widgets'
import type {Content} from '../widgets/widget'

export type PageContent = {contents: Content[]; title?: string}
export const PageTemplate: React.FC<{pageContent: PageContent}> = ({pageContent}) => {
  const {contents} = pageContent
  return (
    <Stack>
      {contents.map((content, index) => {
        const Component = widgets[content.widget as keyof typeof widgets]
        return <Component key={`content_${index}`} styles={content.styles} data={content.data} />
      })}
    </Stack>
  )
}
