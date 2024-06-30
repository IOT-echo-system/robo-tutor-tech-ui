// eslint-disable-next-line no-process-env
const API_BASE_URL = process.env.API_BASE_URL ?? ''
// eslint-disable-next-line no-process-env
const API_BASE_ASSETS_URL = process.env.API_BASE_ASSETS_URL ?? ''
export const cmsApiConfig = {
  baseUrl: `${API_BASE_URL}/api`,
  assets: `${API_BASE_ASSETS_URL}/assets`,
  siteInfo: '/site-info?populate[seo][populate][0]=metaImage',
  mainMenu: '/main-menu?populate=navLink',
  footer: '/footer?populate=sections.navLinks,social.socials',
  pageList: '/pages',
  officeLocation: '/office-location',
  pageDetails: '/pages?filters[slug][$eq]={slug}',
  contact: '/contacts'
} as const
