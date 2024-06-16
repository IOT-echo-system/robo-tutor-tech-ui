import type {MenuLink, SiteInfo, Section} from '../../store/reducers/site'

export type SiteInfoResponse = {data: {attributes: SiteInfo}}
export type MainMenuResponse = {data: {attributes: {navLink: MenuLink[]}}}
export type FooterResponse = {data: {attributes: {sections: Section[]; copyrights: string}}}
