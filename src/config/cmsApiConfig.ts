export const cmsApiConfig = {
  baseUrl: '/api',
  siteInfo: '/site-info',
  mainMenu: '/main-menu?populate=navLink',
  footer: '/footer?populate=sections.navLinks,social.socials'
} as const
