export const cmsApiConfig = {
  baseUrl: '/api',
  assets: '/assets',
  siteInfo: '/site-info?populate[seo][populate][0]=metaImage',
  mainMenu: '/main-menu?populate=navLink',
  footer: '/footer?populate=sections.navLinks,social.socials',
  pageList: '/pages',
  officeLocation: '/office-location',
  pageDetails: '/pages?filters[slug][$eq]={slug}',
  contact: '/contacts'
} as const
