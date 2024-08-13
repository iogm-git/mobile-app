import { loginActions, loginWithGoogleActions, logoutActions, meActions, passwordSendLinkActions, registerActions } from "../actions/auth";
import { initData, createReducer } from "@root/redux/utils";

export const registerReducer = createReducer({ ...initData }, registerActions)
export const loginReducer = createReducer({ ...initData }, loginActions)
export const meReducer = createReducer({ ...initData }, meActions)
export const logoutReducer = createReducer({ ...initData }, logoutActions)
export const loginWithGoogleReducer = createReducer({ ...initData }, loginWithGoogleActions)
export const passwordSendLinkReducer = createReducer({ ...initData }, passwordSendLinkActions)