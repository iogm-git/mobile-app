import { createReducer, initData } from "@root/redux/utils";
import { authenticationActions, beneficiaryActions, emailSendTokenActions, emailVerifyActions, passwordChangeActions, phoneNumberSendTokenActions, phoneNumberVerifyActions, registerActions, uploadProfileImageActions } from "../actions/member";

export const authenticationReducer = createReducer({ ...initData }, authenticationActions)
export const uploadProfileImageReducer = createReducer({ ...initData }, uploadProfileImageActions)
export const passwordChangeReducer = createReducer({ ...initData }, passwordChangeActions)
export const emailSendTokenReducer = createReducer({ ...initData }, emailSendTokenActions)
export const emailVerifyReducer = createReducer({ ...initData }, emailVerifyActions)
export const phoneNumberSendTokenReducer = createReducer({ ...initData }, phoneNumberSendTokenActions)
export const phoneNumberVerifyReducer = createReducer({ ...initData }, phoneNumberVerifyActions)

// On IOGM Code
export const registerReducer = createReducer({ ...initData }, registerActions)
export const beneficiaryReducer = createReducer({ ...initData }, beneficiaryActions)