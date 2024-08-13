import { searchCourseActions, verifyCertificateActions } from '@root/redux/code/actions/guest'
import BaseApi from '../utils'

export const fetchSearchCourse = (filter = '', instructor = '', keyword = 'all', page = 1) => {
    return async dispatch => {
        dispatch(searchCourseActions.request())
        try {
            const { data } = await BaseApi.get(
                `code/guest/visitor/search-course?filter=${filter}&instructor=${instructor}&keyword=${keyword}&page=${page}`)
            dispatch(searchCourseActions.success(data.data))
        } catch (error) {
            dispatch(searchCourseActions.failure(error.response.data))
        }
    }
}
export const fetchVerifyCertificate = () => {
    return async dispatch => {
        dispatch(verifyCertificateActions.request())
        try {
            const { data } = await BaseApi.get(`code/guest/visitor/verify-certificate`)
            dispatch(verifyCertificateActions.success())
        } catch (error) {
            dispatch(verifyCertificateActions.failure(error.response.data))
        }
    }
}