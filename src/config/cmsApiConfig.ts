export const PUBLIC_URL = 'https://www.robotutortech.com'
export const cmsApiConfig = {
  baseUrl: `${PUBLIC_URL}/api`,
  siteInfo: '/site-info',
  mainMenu: '/main-menu?populate=navLink',
  footer: '/footer?populate=sections.navLinks,social.socials'
} as const
