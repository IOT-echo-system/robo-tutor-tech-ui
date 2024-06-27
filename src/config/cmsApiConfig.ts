export const cmsApiConfig = {
  baseUrl: '/api',
  assets: '/assets',
  siteInfo: '/site-info',
  mainMenu: '/main-menu?populate=navLink',
  footer: '/footer?populate=sections.navLinks,social.socials',
  pageList: '/pages',
  pageDetails: '/pages?filters[slug][$eq]={slug}'
} as const
