import { combineReducers } from "redux";

import {
    loginReducer,
    loginWithGoogleReducer,
    logoutReducer,
    meReducer,
    passwordSendLinkReducer,
    registerReducer
} from "./reducers/auth";
import {
    authenticationReducer,
    emailSendTokenReducer,
    emailVerifyReducer,
    passwordChangeReducer,
    phoneNumberSendTokenReducer,
    phoneNumberVerifyReducer,
    uploadProfileImageReducer,

    registerReducer as codeRegisterReducer,
    beneficiaryReducer,
} from "./reducers/member";

export const UserReducers = combineReducers({
    // auth
    loginResult: loginReducer,
    registerResult: registerReducer,
    meData: meReducer,
    logoutResult: logoutReducer,
    loginWithGoogleResult: loginWithGoogleReducer,
    passwordSendLinkResult: passwordSendLinkReducer,

    // member
    authenticationResult: authenticationReducer,
    uploadProfileImageResult: uploadProfileImageReducer,
    passwordChangeResult: passwordChangeReducer,
    emailSendTokenResult: emailSendTokenReducer,
    emailVerifyResult: emailVerifyReducer,
    phoneNumberSendTokenResult: phoneNumberSendTokenReducer,
    phoneNumberVerifyResult: phoneNumberVerifyReducer,

    // member on IOGM Code
    codeRegisterResult: codeRegisterReducer,
    beneficiaryResult: beneficiaryReducer,
})

