import { codeMeActions, discussionForumActions, discussionForumsActions, dobAndAddressActions } from '@root/redux/code/actions/member'
import { meActions } from '@root/redux/user/actions/auth'
import BaseApi from '@root/service/utils'
import { getToken } from '@root/utils/Authentication'

export const fetchDiscussionForums = () => {
    return async dispatch => {
        const token = await getToken()
        if (token) {

            dispatch(discussionForumsActions.request())
            try {
                const { data } = await BaseApi.get(`code/member/general/discussion-forums`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(discussionForumsActions.success(data.data))
            } catch (error) {
                dispatch(discussionForumsActions.failure(error.response.data))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchDiscussionForum = () => {
    return async dispatch => {
        const token = await getToken()
        if (token) {

            dispatch(discussionForumActions.request())
            try {
                const { data } = await BaseApi.get(`code/member/general/discussion-forum`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(discussionForumActions.success())
            } catch (error) {
                dispatch(discussionForumActions.failure(error.response.data))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchCodeMe = () => {
    return async dispatch => {
        const token = await getToken()
        if (token) {

            dispatch(codeMeActions.request())
            try {
                const { data } = await BaseApi.get(`code/member/general/me`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(codeMeActions.success(data.data))
            } catch (error) {
                dispatch(codeMeActions.failure(error.response.data))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchDobAndAddress = (formData) => {
    return async dispatch => {
        const token = await getToken()
        if (token) {

            dispatch(dobAndAddressActions.request())
            try {
                const { data } = await BaseApi.put(`code/member/general/dob-address`, formData, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(dobAndAddressActions.success(data.message))
            } catch (error) {
                dispatch(dobAndAddressActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}