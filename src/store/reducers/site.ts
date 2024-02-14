import { siteDetails } from "../../../data/siteDetails";
import type { TRootActions } from "../../typing/store";

export const SiteAction = {
  SITE_UPDATE_STATE: "SITE_UPDATE_STATE",
} as const;

export type SiteStateType = {
  metadata: {
    title: string;
    subtitle?: string;
  };
  header: {
    menus: Array<{ link: string; label: string }>;
  };
};
export const initSiteState: SiteStateType = siteDetails;

const siteReducer = (
  state: SiteStateType,
  action: TRootActions,
): SiteStateType => {
  switch (action.type) {
    case SiteAction.SITE_UPDATE_STATE:
      return { ...state, ...action.payload.site };
    default:
      return state;
  }
};

export default siteReducer;
