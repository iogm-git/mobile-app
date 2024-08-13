import { fetchActions } from "@root/redux/utils";
import { fetchWebCategories, fetchWebCategory, fetchWebDetails, fetchWebSearch, fetchWebShow } from "@root/service/shop/guest";

export const webDetailsActions = fetchActions('WEB_DETAILS', fetchWebDetails)
export const webCategoryActions = fetchActions('WEB_CATEGORY', fetchWebCategory)
export const webSearchActions = fetchActions('WEB_SEARCH', fetchWebSearch)
export const webCategoriesActions = fetchActions('WEB_CATEGORIES', fetchWebCategories)
export const webShowActions = fetchActions('WEB_SHOW', fetchWebShow)