import type {GetServerSideProps, NextPage} from 'next'
import {siteDetails} from '../../data/siteDetails'
import {pageList} from '../../data/pageList'
import {formatDate} from '../utils/utils'
import type {SiteMetaData} from '../components/atoms'

const Sitemap: NextPage = () => null
export default Sitemap
const generateSiteMap = async (): Promise<string> => {
  const site: SiteMetaData = await new Promise(resolve => {
    resolve(siteDetails.metadata)
  })
  const urls = pageList.map(page => {
    return `<url>
                <loc>https://${site.hostname}${page}</loc>
                <lastmod>${formatDate(new Date(), 'YYYY-MM-DD')}</lastmod>
            </url>`
  })
  return `<?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
              ${urls.join('')}
          </urlset>`
}

export const getServerSideProps: GetServerSideProps<Record<string, unknown>> = async ctx => {
  ctx.res.setHeader('Content-Type', 'text/xml')
  const xml = await generateSiteMap()
  ctx.res.write(xml)
  ctx.res.end()

  return {props: {}}
}
