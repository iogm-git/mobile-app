import { createReducer, initData } from "@root/redux/utils";
import { webCategoriesActions, webDetailsActions, webShowActions } from "../actions/guest";

export const webDetailsReducer = createReducer({ ...initData }, webDetailsActions)
export const webCategoriesReducer = createReducer({ ...initData }, webCategoriesActions)
export const webShowReducer = createReducer({ ...initData }, webShowActions)