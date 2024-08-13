import { meActions } from '@root/redux/user/actions/auth'
import {
    instructorQuestionsActions,
    instructorStoreAnswerActions,
    instructorUpdateAnswerActions,
    instructorCourseReviewsActions,
    instructorEarningsActions,
    instructorPayoutActions,
    instructorStudiesActions,
    instructorStoreCourseActions,
    instructorUpdateCourseActions,
    instructorDestroyCourseActions,
    instructorSectionsActions,
    instructorStoreSectionActions,
    instructorUpdateSectionActions,
    instructorDestroySectionActions,
    instructorLessonsActions,
    instructorStoreLessonActions,
    instructorUpdateLessonActions,
    instructorDestroyLessonActions
} from '@root/redux/code/actions/member'
import BaseApi from '@root/service/utils'
import { getToken } from '@root/utils/Authentication'


export const fetchInstructorQuestions = (courseTag = '', orderBy = 'latest', page = 1) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {

            dispatch(instructorQuestionsActions.request())
            try {
                const { data } = await BaseApi.get(`code/member/instructor/questions?course_tag=${courseTag}&order_by=${orderBy}&page=${page}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(instructorQuestionsActions.success(data.data))
            } catch (error) {
                dispatch(instructorQuestionsActions.failure(error.response.data))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchInstructorStoreAnswer = (formData) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {

            dispatch(instructorStoreAnswerActions.request())
            try {
                const { data } = await BaseApi.post(`code/member/instructor/answer`, formData, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(instructorStoreAnswerActions.success(data.message))
            } catch (error) {
                dispatch(instructorStoreAnswerActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchInstructorUpdateAnswer = (formData) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {

            dispatch(instructorUpdateAnswerActions.request())
            try {
                const { data } = await BaseApi.put(`code/member/instructor/answer`, formData, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(instructorUpdateAnswerActions.success(data.message))
            } catch (error) {
                dispatch(instructorUpdateAnswerActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchInstructorCourseReviews = (page = 1) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {

            dispatch(instructorCourseReviewsActions.request())
            try {
                const { data } = await BaseApi.get(`code/member/instructor/course-reviews?page=${page}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(instructorCourseReviewsActions.success(data.data))
            } catch (error) {
                dispatch(instructorCourseReviewsActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchInstructorEarnings = () => {
    return async dispatch => {
        const token = await getToken()

        if (token) {

            dispatch(instructorEarningsActions.request())
            try {
                const { data } = await BaseApi.get(`code/member/instructor/earnings`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(instructorEarningsActions.success(data.data))
            } catch (error) {
                dispatch(instructorEarningsActions.failure(error.response.data))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchInstructorPayout = () => {
    return async dispatch => {
        const token = await getToken()

        if (token) {

            dispatch(instructorPayoutActions.request())
            try {
                const { data } = await BaseApi.post(`code/member/instructor/payout`, null, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(instructorPayoutActions.success(data.message))
            } catch (error) {
                dispatch(instructorPayoutActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchInstructorStudies = (orderBy = 'old', page = 1) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {

            dispatch(instructorStudiesActions.request())
            try {
                const { data } = await BaseApi.get(`code/member/instructor/studies?order_by=${orderBy}&page=${page}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(instructorStudiesActions.success(data.data))
            } catch (error) {
                dispatch(instructorStudiesActions.failure(error.response.data))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchInstructorStoreCourse = (formData) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {

            dispatch(instructorStoreCourseActions.request())
            try {
                const { data } = await BaseApi.post(`code/member/instructor/course`, formData, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(instructorStoreCourseActions.success(data.message))
            } catch (error) {
                dispatch(instructorStoreCourseActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchInstructorUpdateCourse = (formData) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {

            dispatch(instructorUpdateCourseActions.request())
            try {
                const { data } = await BaseApi.put(`code/member/instructor/course`, formData, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(instructorUpdateCourseActions.success(data.message))
            } catch (error) {
                dispatch(instructorUpdateCourseActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchInstructorDestroyCourse = (courseId) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {

            dispatch(instructorDestroyCourseActions.request())
            try {
                const { data } = await BaseApi.delete(`code/member/instructor/course?id=${courseId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(instructorDestroyCourseActions.success(data.message))
            } catch (error) {
                dispatch(instructorDestroyCourseActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchinstructorSections = (courseId) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {

            dispatch(instructorSectionsActions.request())
            try {
                const { data } = await BaseApi.get(`code/member/instructor/sections?id=${courseId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(instructorSectionsActions.success(data.data))
            } catch (error) {
                dispatch(instructorSectionsActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchInstructorStoreSection = (formData) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {

            dispatch(instructorStoreSectionActions.request())
            try {
                const { data } = await BaseApi.post(`code/member/instructor/section`, formData, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(instructorStoreSectionActions.success(data.message))
            } catch (error) {
                dispatch(instructorStoreSectionActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchInstructorUpdateSection = (formData) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {

            dispatch(instructorUpdateSectionActions.request())
            try {
                const { data } = await BaseApi.put(`code/member/instructor/section`, formData, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(instructorUpdateSectionActions.success(data.message))
            } catch (error) {
                console.log(error)
                dispatch(instructorUpdateSectionActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchInstructorDestroySection = (courseId, sectionId) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {

            dispatch(instructorDestroySectionActions.request())
            try {
                const { data } = await BaseApi.delete(`code/member/instructor/section?id=${courseId}&section_id=${sectionId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(instructorDestroySectionActions.success(data.message))
            } catch (error) {
                dispatch(instructorDestroySectionActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchinstructorLessons = (sectionId, page) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {

            dispatch(instructorLessonsActions.request())
            try {
                const { data } = await BaseApi.get(`code/member/instructor/lessons?id=${sectionId}&page=${page}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(instructorLessonsActions.success(data.data))
            } catch (error) {
                dispatch(instructorLessonsActions.failure(error.response.data))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchInstructorStoreLesson = (formData) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {

            dispatch(instructorStoreLessonActions.request())
            try {
                const { data } = await BaseApi.post(`code/member/instructor/lesson`, formData, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(instructorStoreLessonActions.success(data.message))
            } catch (error) {
                dispatch(instructorStoreLessonActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchInstructorUpdateLesson = (formData) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {

            dispatch(instructorUpdateLessonActions.request())
            try {
                const { data } = await BaseApi.put(`code/member/instructor/lesson`, formData, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(instructorUpdateLessonActions.success(data.message))
            } catch (error) {
                dispatch(instructorUpdateLessonActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchInstructorDestroyLesson = (courseId, sectionId, lessonId) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {

            dispatch(instructorDestroyLessonActions.request())
            try {
                const { data } = await BaseApi.delete(`code/member/instructor/lesson?id=${courseId}&section_id=${sectionId}&lesson_id=${lessonId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(instructorDestroyLessonActions.success(data.message))
            } catch (error) {
                dispatch(instructorDestroyLessonActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}