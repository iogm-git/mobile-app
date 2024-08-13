import {
    studentCertificatesActions,
    studentCertificateActions,
    studentReviewsActions,
    studentStoreReviewActions,
    studentUpdateReviewActions,
    studentDestroyReviewActions,
    studentAnswersActions,
    studentQuestionActions,
    studentStashesActions,
    studentStoreStashActions,
    studentDestroyStashActions,
    studentCoursesActions,
    studentSectionsActions,
    studentLessonsActions,
    studentCourseProgressActions,
    studentUpdateCompletedLecturesActions,
    studentTransactionsActions,
    studentStoreTransactionActions,
    studentStoreTransactionFreeActions,
    studentDestroyTransactionActions
} from '@root/redux/code/actions/member'
import { meActions } from '@root/redux/user/actions/auth'
import BaseApi from '@root/service/utils'
import { getToken } from '@root/utils/Authentication'
import { _getDateNow, _requestStoragePermission } from '@root/utils/Helper'
import NotifService from '@root/utils/notifications/Service'
import RNFS from 'react-native-fs';
import { Buffer } from 'buffer';

export const fetchStudentCertificates = () => {
    return async dispatch => {
        const token = await getToken()
        if (token) {
            dispatch(studentCertificatesActions.request())
            try {
                const { data } = await BaseApi.get(`code/member/student/certificates`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(studentCertificatesActions.success(data.data))
            } catch (error) {
                dispatch(studentCertificatesActions.failure(error.response.data))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchStudentCertificate = (certificateName, courseId) => {
    return async dispatch => {
        const token = await getToken()
        if (token) {

            dispatch(studentCertificateActions.request())
            try {
                _requestStoragePermission();

                const response = await BaseApi.get(`code/member/student/certificate?course_id=${courseId}`, {
                    headers: { Authorization: `Bearer ${token}` },
                    responseType: 'arraybuffer'
                })

                const fileName = `${certificateName} - ${_getDateNow()}.pdf`

                const filePath = `${RNFS.DownloadDirectoryPath}/${fileName}`

                // Convert response data to base64
                const base64Data = Buffer.from(response.data, 'binary').toString('base64');

                await RNFS.writeFile(filePath, base64Data, 'base64')

                NotifService.localNotification({
                    title: 'Download Success',
                    message: 'Filename : ' + fileName,
                    actions: ['Ok']
                })

                dispatch(studentCertificateActions.success(null))
            } catch (error) {
                console.error(error);
                dispatch(studentCertificateActions.failure(error.response.data))
                return null
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchStudentReviews = (page = 1) => {
    return async dispatch => {
        const token = await getToken()
        if (token) {

            dispatch(studentReviewsActions.request())
            try {
                const { data } = await BaseApi.get(`code/member/student/reviews?page=${page}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(studentReviewsActions.success(data.data))
            } catch (error) {
                dispatch(studentReviewsActions.failure(error.response.data))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchStudentStoreReview = (formData) => {
    return async dispatch => {
        const token = await getToken()
        if (token) {

            dispatch(studentStoreReviewActions.request())
            try {
                const { data } = await BaseApi.post(`code/member/student/review`, formData, {
                    headers: { Authorization: `Bearer ${token}` }
                })

                dispatch(studentStoreReviewActions.success(data.message))
            } catch (error) {
                dispatch(studentStoreReviewActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchStudentUpdateReview = (formData) => {
    return async dispatch => {
        const token = await getToken()
        if (token) {

            dispatch(studentUpdateReviewActions.request())
            try {
                const { data } = await BaseApi.put(`code/member/student/review`, formData, {
                    headers: { Authorization: `Bearer ${token}` }
                })

                dispatch(studentUpdateReviewActions.success(data.message))
            } catch (error) {
                dispatch(studentUpdateReviewActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchStudentDestroyReview = (courseId) => {
    return async dispatch => {
        const token = await getToken()
        if (token) {

            dispatch(studentDestroyReviewActions.request())
            try {
                const { data } = await BaseApi.delete(`code/member/student/review?course_id=${courseId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(studentDestroyReviewActions.success(data.message))
            } catch (error) {
                dispatch(studentDestroyReviewActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchStudentAnswers = (page = 1, course_tag = 'all', order_by = 'new') => {
    return async dispatch => {
        const token = await getToken()
        if (token) {

            dispatch(studentAnswersActions.request())
            try {
                const { data } = await BaseApi.get(`code/member/student/answers?page=${page}&course_tag=${course_tag}&order_by=${order_by}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(studentAnswersActions.success(data.data))
            } catch (error) {
                dispatch(studentAnswersActions.failure(error.response.data))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchStudentQuestion = (formData) => {
    return async dispatch => {
        const token = await getToken()
        if (token) {

            dispatch(studentQuestionActions.request())
            try {
                const { data } = await BaseApi.post(`code/member/student/question`, formData, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(studentQuestionActions.success(data.message))
            } catch (error) {
                dispatch(studentQuestionActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchStudentStashes = (page = 1) => {
    return async dispatch => {
        const token = await getToken()
        if (token) {

            dispatch(studentStashesActions.request())
            try {
                const { data } = await BaseApi.get(`code/member/student/stashes?page=${page}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(studentStashesActions.success(data.data))
            } catch (error) {
                dispatch(studentStashesActions.failure(error.response.data))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchStudentStoreStash = (courseId) => {
    return async dispatch => {
        const token = await getToken()
        if (token) {

            dispatch(studentStoreStashActions.request())
            try {
                const { data } = await BaseApi.post(`code/member/student/stash`, { course_id: courseId }, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(studentStoreStashActions.success(data.message))
            } catch (error) {
                dispatch(studentStoreStashActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchStudentDestroyStash = (courseId) => {
    return async dispatch => {
        const token = await getToken()
        if (token) {

            dispatch(studentDestroyStashActions.request())
            try {
                const { data } = await BaseApi.delete(`code/member/student/stash?course_id=${courseId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(studentDestroyStashActions.success(data.message))
            } catch (error) {
                dispatch(studentDestroyStashActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchStudentCourses = (page = 1) => {
    return async dispatch => {
        const token = await getToken()
        if (token) {

            dispatch(studentCoursesActions.request())
            try {
                const { data } = await BaseApi.get(`code/member/student/courses?page=${page}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(studentCoursesActions.success(data.data))
            } catch (error) {
                dispatch(studentCoursesActions.failure(error.response.data))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchStudentSections = (courseId) => {
    return async dispatch => {
        const token = await getToken()
        if (token) {

            dispatch(studentSectionsActions.request())
            try {
                const { data } = await BaseApi.get(`code/member/student/sections?course_id=${courseId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(studentSectionsActions.success(data.data))
            } catch (error) {
                dispatch(studentSectionsActions.failure(error.response.data))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchStudentLessons = (page = 1, sectionId, courseId) => {
    return async dispatch => {
        const token = await getToken()
        if (token) {

            dispatch(studentLessonsActions.request())
            try {
                const { data } = await BaseApi.get(`code/member/student/lessons?page=${page}&section_id=${sectionId}&course_id=${courseId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(studentLessonsActions.success(data.data))
            } catch (error) {
                dispatch(studentLessonsActions.failure(error.response.data))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchStudentCourseProgress = () => {
    return async dispatch => {
        const token = await getToken()
        if (token) {

            dispatch(studentCourseProgressActions.request())
            try {
                const { data } = await BaseApi.get(`code/member/student/course-progress`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(studentCourseProgressActions.success(data.data))
            } catch (error) {
                dispatch(studentCourseProgressActions.failure(error.response.data))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchStudentUpdateCompletedLectures = (formData) => {
    return async dispatch => {
        const token = await getToken()
        if (token) {

            dispatch(studentUpdateCompletedLecturesActions.request())
            try {
                const { data } = await BaseApi.put(`code/member/student/completed-lectures`, formData, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(studentUpdateCompletedLecturesActions.success(data.message))
            } catch (error) {
                dispatch(studentUpdateCompletedLecturesActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchStudentTransactions = (page = 1) => {
    return async dispatch => {
        const token = await getToken()
        if (token) {

            dispatch(studentTransactionsActions.request())
            try {
                const { data } = await BaseApi.get(`code/member/student/transactions?page=${page}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(studentTransactionsActions.success(data.data))
            } catch (error) {
                dispatch(studentTransactionsActions.failure(error.response.data))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchStudentStoreTransaction = (courseId) => {
    return async dispatch => {
        const token = await getToken()
        if (token) {

            dispatch(studentStoreTransactionActions.request())
            try {
                const { data } = await BaseApi.post(`code/member/student/transaction`, { course_id: courseId }, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(studentStoreTransactionActions.success(data.message))
            } catch (error) {
                dispatch(studentStoreTransactionActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchStudentStoreTransactionFree = (courseId) => {
    return async dispatch => {
        const token = await getToken()
        if (token) {

            dispatch(studentStoreTransactionFreeActions.request())
            try {
                const { data } = await BaseApi.post(`code/member/student/transaction/free`, { course_id: courseId }, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(studentStoreTransactionFreeActions.success(data.message))
            } catch (error) {
                dispatch(studentStoreTransactionFreeActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchStudentDestroyTransaction = (courseId, orderId) => {
    return async dispatch => {
        const token = await getToken()
        if (token) {

            dispatch(studentDestroyTransactionActions.request())
            try {
                const { data } = await BaseApi.delete(`code/member/student/transaction?course_id=${courseId}&order_id=${orderId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(studentDestroyTransactionActions.success(data.message))
            } catch (error) {
                dispatch(studentDestroyTransactionActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}