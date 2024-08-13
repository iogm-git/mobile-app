import { webCategoriesActions, webDetailsActions, webShowActions } from '@root/redux/shop/actions/guest'
import BaseApi from './../utils'

export const fetchWebDetails = (page) => {
    return async dispatch => {
        dispatch(webDetailsActions.request())
        try {
            const { data } = await BaseApi.get(`shop/guest/web/details?page=${page}`)
            dispatch(webDetailsActions.success(data.data))
        } catch (error) {
            dispatch(webDetailsActions.failure(error.response.data))
        }
    }
}

export const fetchWebCategory = (value) => {
    return async dispatch => {
        dispatch(webDetailsActions.request())
        try {
            const { data } = await BaseApi.get(`shop/guest/web/category?name=${value}`)
            dispatch(webDetailsActions.success(data.data))
        } catch (error) {
            dispatch(webDetailsActions.failure(error.response.data))
        }
    }
}

export const fetchWebSearch = (keyword, page) => {
    return async dispatch => {
        dispatch(webDetailsActions.request())
        try {
            const { data } = await BaseApi.get(`shop/guest/web/search?keyword=${keyword}&page=${page}`)
            dispatch(webDetailsActions.success(data.data))
        } catch (error) {
            dispatch(webDetailsActions.failure(error.response.data))
        }
    }
}

export const fetchWebCategories = () => {
    return async dispatch => {
        dispatch(webCategoriesActions.request())
        try {
            const { data } = await BaseApi.get(`shop/guest/web/categories`)
            dispatch(webCategoriesActions.success(data.data))
        } catch (error) {
            dispatch(webCategoriesActions.failure(error.response.data))
        }
    }
}

export const fetchWebShow = (category, type) => {
    return async dispatch => {
        dispatch(webShowActions.request())
        try {
            const { data } = await BaseApi.get(`shop/guest/web/show?category=${category}&type=${type}`)
            dispatch(webShowActions.success(data.data))
        } catch (error) {
            dispatch(webShowActions.failure(error.response.data))
        }
    }
}
