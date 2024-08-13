import BaseApi from './../utils'
import { destroyToken, getToken, storeToken } from '@root/utils/Authentication'

import {
    loginActions,
    loginWithGoogleActions,
    logoutActions,
    meActions,
    passwordSendLinkActions,
    registerActions
} from '@root/redux/user/actions/auth'

import {
    discussionForumsActions,

    instructorCourseReviewsActions,
    instructorEarningsActions,
    instructorQuestionsActions,
    instructorStudiesActions,

    studentAnswersActions,
    studentCertificatesActions,
    studentCourseProgressActions,
    studentCoursesActions,
    studentReviewsActions,
    studentStashesActions,
    studentTransactionsActions
} from '@root/redux/code/actions/member'

import {
    getStashActions,
    transactionHavePaidActions,
    transactionInformationActions,
    transactionLatestUnpaidActions
} from '@root/redux/shop/actions/member'


export const fetchRegister = (value) => {
    return async dispatch => {
        dispatch(registerActions.request())
        try {
            const { data } = await BaseApi.post('user/guest/auth/register', value)
            dispatch(registerActions.success(data))
        } catch (error) {
            dispatch(registerActions.failure(error.response.data.errors))
        }
    }
}

export const fetchLogin = (value) => {
    return async (dispatch) => {
        dispatch(loginActions.request())
        try {
            const { data } = await BaseApi.post('user/guest/auth/login', value)
            storeToken(data && data.access_token)

            dispatch(loginActions.success({ message: 'Login success!' }))

        } catch (error) {
            dispatch(loginActions.failure(error.response ? error.response.data : error.message))
        }
    }
}

export const fetchMe = () => {
    return async dispatch => {
        const auth_token = await getToken()

        if (auth_token) {
            dispatch(meActions.request())

            try {
                const { data: meData } = await BaseApi.post('user/guest/auth/me', null, {
                    headers: { Authorization: `Bearer ${auth_token}` }
                })

                let memberData = meData

                // -- shop --
                try {
                    dispatch(getStashActions.init())
                    dispatch(transactionInformationActions.init())
                    dispatch(transactionHavePaidActions.init())
                    dispatch(transactionLatestUnpaidActions.init())
                } catch (error) {
                    console.log(error);
                }
                // -- shop --

                // -- code --
                try {
                    const { data: codeUserData } = await BaseApi.get('/code/member/general/me', {
                        headers: { Authorization: `Bearer ${auth_token}` }
                    })

                    let cud = codeUserData.data

                    if (!('status' in cud)) {
                        memberData.address = cud.address
                        memberData.dob = cud.dob
                        memberData.role = cud.role
                        if (cud.role === 'instructor') {
                            memberData.account = cud.account
                            memberData.bank = cud.bank
                            memberData.alias_name = cud.alias_name
                        }
                    } else {
                        memberData.status = cud.status
                    }

                    dispatch(discussionForumsActions.init())

                    if (cud.role === 'student') {
                        dispatch(studentCertificatesActions.init())
                        dispatch(studentCoursesActions.init())
                        dispatch(studentReviewsActions.init())
                        dispatch(studentCourseProgressActions.init())
                        dispatch(studentAnswersActions.init())
                        dispatch(studentStashesActions.init())
                        dispatch(studentTransactionsActions.init())
                    } else if (cud.role === 'instructor') {
                        dispatch(instructorQuestionsActions.init())
                        dispatch(instructorCourseReviewsActions.init())
                        dispatch(instructorEarningsActions.init())
                        dispatch(instructorStudiesActions.init())
                    }
                } catch (error) {
                    console.log(error);
                }
                // -- code --

                dispatch(meActions.success(memberData))

            } catch (error) {
                console.log(error);
                dispatch(meActions.success(null))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchLogout = () => {
    return async dispatch => {
        const token = await getToken()

        if (token) {
            dispatch(logoutActions.request())
            try {
                const { data } = await BaseApi.post('user/guest/auth/logout', null, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                await destroyToken()
                dispatch(meActions.success(null))
                dispatch(logoutActions.success(data))
            } catch (error) {
                dispatch(logoutActions.failure(error.response.data))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchLoginWithGoogle = (value) => {
    return async dispatch => {
        dispatch(loginWithGoogleActions.request())
        try {
            const { data } = await BaseApi.post('user/guest/auth/google', value)
            dispatch(loginWithGoogleActions.success(data))
        } catch (error) {
            dispatch(loginWithGoogleActions.failure(error.response.data))
        }
    }
}

export const fetchPasswordSendLink = (value) => {
    return async dispatch => {
        dispatch(passwordSendLinkActions.request())
        try {
            const { data } = await BaseApi.put('user/guest/auth/password/send-link', value)
            dispatch(passwordSendLinkActions.success(data))
        } catch (error) {
            console.log(error);
            dispatch(passwordSendLinkActions.failure(error.response.data.message))
        }
    }
}