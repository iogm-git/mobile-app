import { fetchActions } from "@root/redux/utils";
import { fetchAuthentication, fetchBeneficiary, fetchEmailSendToken, fetchEmailVerify, fetchPasswordChange, fetchPhoneNumberSendToken, fetchPhoneNumberVerify, fetchRegister, fetchUploadProfileImage } from "@root/service/user/member";

export const authenticationActions = fetchActions('AUTHENTICATION', fetchAuthentication)
export const uploadProfileImageActions = fetchActions('UPLOAD_PROFILE_IMAGE', fetchUploadProfileImage)
export const passwordChangeActions = fetchActions('PASSWORD_CHANGE', fetchPasswordChange)
export const emailSendTokenActions = fetchActions('EMAIL_SEND_TOKEN', fetchEmailSendToken)
export const emailVerifyActions = fetchActions('EMAIL_VERIFY', fetchEmailVerify)
export const phoneNumberSendTokenActions = fetchActions('PHONE_NUMBER_SEND_TOKEN', fetchPhoneNumberSendToken)
export const phoneNumberVerifyActions = fetchActions('PHONE_NUMBER_VERIFY', fetchPhoneNumberVerify)

// On IOGM Code
export const registerActions = fetchActions('CODE_REGISTER', fetchRegister)
export const beneficiaryActions = fetchActions('BENEFICIARY', fetchBeneficiary)