import type {MenuLink, SiteInfo, Section} from '../../store/reducers/site'
import type {Content, ContentCTABanner, ContentHeader} from '../../components/widgets/widget'
import type {SEODetailsType} from '../../components/atoms'
import type {LocationPropsType} from '../../components/molecules'

export type SiteInfoResponse = {data: {attributes: SiteInfo}}
export type MainMenuResponse = {data: {attributes: {navLink: MenuLink[]}}}
export type FooterResponse = {data: {attributes: {sections: Section[]; copyrights: string}}}
export type OfficeLocationResponse = {data: {attributes: LocationPropsType}}
export type PageSummaryResponse = {title: string; slug: string}
export type PageListResponse = {data: Array<{attributes: PageSummaryResponse}>}
export type PageDetails = {
  title: string
  slug: string
  header: ContentHeader[]
  mainContent: Content[]
  ctaBanner: ContentCTABanner[]
  seo?: SEODetailsType
}
export type PageDetailsResponse = {data: Array<{attributes: PageDetails}>}
