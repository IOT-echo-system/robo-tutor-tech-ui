export const PUBLIC_URL = 'http://localhost:1337'
export const cmsApiConfig = {
  baseUrl: `${PUBLIC_URL}/api`,
  siteInfo: '/site-info',
  mainMenu: '/main-menu?populate=navLink',
  footer: '/footer?populate=sections.navLinks,social.socials',
  pageList: '/pages',
  pageDetails: '/pages?filters[slug][$eq]={slug}'
} as const
