import BaseApi from './../utils'
import { meActions } from '@root/redux/user/actions/auth'
import { getToken, storeToken } from '@root/utils/Authentication'
import { authenticationActions, beneficiaryActions, emailSendTokenActions, emailVerifyActions, passwordChangeActions, phoneNumberSendTokenActions, phoneNumberVerifyActions, registerActions, uploadProfileImageActions } from '@root/redux/user/actions/member'

export const fetchAuthentication = (formData) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {
            dispatch(authenticationActions.request())
            try {
                const { data } = await BaseApi.put('user/member/authentication', formData, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                setTimeout(() => {
                    data && storeToken(data.data.access_token)
                }, 300);
                setTimeout(() => {
                    dispatch(meActions.init())
                    dispatch(authenticationActions.success(data.message))
                }, 500);
            } catch (error) {
                dispatch(authenticationActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchUploadProfileImage = (formData) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {
            dispatch(uploadProfileImageActions.request())
            try {
                const { data } = await BaseApi.post('user/member/upload-profile-image', formData, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                setTimeout(() => {
                    dispatch(meActions.init())
                    dispatch(uploadProfileImageActions.success(data.message))
                }, 500);
            } catch (error) {
                dispatch(uploadProfileImageActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchPasswordChange = (formData) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {
            dispatch(passwordChangeActions.request())
            try {
                const { data } = await BaseApi.put('user/member/password/change', formData, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                setTimeout(() => {
                    dispatch(meActions.init())
                    dispatch(passwordChangeActions.success(data.message))
                }, 500);
            } catch (error) {
                dispatch(passwordChangeActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchEmailSendToken = (formData) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {
            dispatch(emailSendTokenActions.request())
            try {
                const { data } = await BaseApi.post('user/member/email/send-token', formData, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                setTimeout(() => {
                    dispatch(meActions.init())
                    dispatch(emailSendTokenActions.success(data.message))
                }, 500);
            } catch (error) {
                dispatch(emailSendTokenActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchEmailVerify = (formData) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {
            dispatch(emailVerifyActions.request())
            try {
                const { data } = await BaseApi.put('user/member/email/verify', formData, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                setTimeout(() => {
                    dispatch(meActions.init())
                    dispatch(emailVerifyActions.success(data.message))
                }, 500);
            } catch (error) {
                dispatch(emailVerifyActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchPhoneNumberSendToken = (formData) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {
            dispatch(phoneNumberSendTokenActions.request())
            try {
                const { data } = await BaseApi.post('user/member/phone-number/send-token', formData, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                setTimeout(() => {
                    dispatch(meActions.init())
                    dispatch(phoneNumberSendTokenActions.success(data.message))
                }, 500)
            } catch (error) {
                dispatch(phoneNumberSendTokenActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchPhoneNumberVerify = (formData) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {
            dispatch(phoneNumberVerifyActions.request())
            try {
                const { data } = await BaseApi.put('user/member/phone-number/verify', formData, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                setTimeout(() => {
                    dispatch(meActions.init())
                    dispatch(phoneNumberVerifyActions.success(data.message))
                }, 500)
            } catch (error) {
                dispatch(phoneNumberVerifyActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchRegister = (formData) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {
            dispatch(registerActions.request())
            try {
                const { data } = await BaseApi.post('user/code/member/register', formData, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                setTimeout(() => {
                    dispatch(meActions.init())
                    dispatch(registerActions.success(data.message))
                }, 500)
            } catch (error) {
                dispatch(registerActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchBeneficiary = (formData) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {
            dispatch(beneficiaryActions.request())
            try {
                const { data } = await BaseApi.post('user/code/instructor/beneficiary', formData, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                setTimeout(() => {
                    dispatch(meActions.init())
                    dispatch(beneficiaryActions.success(data.message))
                }, 500)
            } catch (error) {
                dispatch(beneficiaryActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}