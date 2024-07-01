import React from 'react'

type ImageFormat = {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string | null
  size: number
  width: number
  height: number
  sizeInBytes?: number
}

export type ImageType = {
  data: {
    attributes: {
      alternativeText: string | null
      caption: string | null
      formats: {[P in 'large' | 'small' | 'medium' | 'thumbnail']: ImageFormat}
      previewUrl: string | null
      provider: string
      createdAt: string
      updatedAt: string
    } & ImageFormat
  }
}

export const Image: React.FC<{image: ImageType}> = () => {
  return <></>
}
