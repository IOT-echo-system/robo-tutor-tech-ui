import WebClient from 'web-client-starter'
import {cmsApiConfig} from '../config/cmsApiConfig'
import type {FooterInfo, MenuLink, SiteInfo} from '../store/reducers/site'
import type {FooterResponse, MainMenuResponse, SiteInfoResponse} from './typing/CMSService'

class CMSService_ {
  private readonly config = cmsApiConfig

  async getSiteInfo(): Promise<SiteInfo> {
    const response = await WebClient.get<SiteInfoResponse>({
      baseUrl: this.config.baseUrl,
      path: this.config.siteInfo
    })
    return response.data.attributes
  }

  async getMainMenu(): Promise<MenuLink[]> {
    const response = await WebClient.get<MainMenuResponse>({
      baseUrl: this.config.baseUrl,
      path: this.config.mainMenu
    })
    return response.data.attributes.navLink
  }

  async getFooter(): Promise<FooterInfo> {
    const response = await WebClient.get<FooterResponse>({
      baseUrl: this.config.baseUrl,
      path: this.config.footer
    })
    return response.data.attributes
  }
}

export const CMSService = new CMSService_()
