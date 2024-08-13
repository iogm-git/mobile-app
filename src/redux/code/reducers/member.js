import { createReducer, initData } from "@root/redux/utils";
import {
    codeMeActions,
    discussionForumActions,
    discussionForumsActions,
    dobAndAddressActions,

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
    instructorDestroyLessonActions,

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
    studentDestroyTransactionActions,
} from "../actions/member";

export const discussionForumsReducer = createReducer({ ...initData }, discussionForumsActions)
export const discussionForumReducer = createReducer({ ...initData }, discussionForumActions)
export const codeMeReducer = createReducer({ ...initData }, codeMeActions)
export const dobAndAddressReducer = createReducer({ ...initData }, dobAndAddressActions)

export const instructorQuestionsReducer = createReducer({ ...initData }, instructorQuestionsActions)
export const instructorStoreAnswerReducer = createReducer({ ...initData }, instructorStoreAnswerActions)
export const instructorUpdateAnswerReducer = createReducer({ ...initData }, instructorUpdateAnswerActions)
export const instructorCourseReviewsReducer = createReducer({ ...initData }, instructorCourseReviewsActions)
export const instructorEarningsReducer = createReducer({ ...initData }, instructorEarningsActions)
export const instructorPayoutReducer = createReducer({ ...initData }, instructorPayoutActions)
export const instructorStudiesReducer = createReducer({ ...initData }, instructorStudiesActions)
export const instructorStoreCourseReducer = createReducer({ ...initData }, instructorStoreCourseActions)
export const instructorUpdateCourseReducer = createReducer({ ...initData }, instructorUpdateCourseActions)
export const instructorDestroyCourseReducer = createReducer({ ...initData }, instructorDestroyCourseActions)
export const instructorSectionsReducer = createReducer({ ...initData }, instructorSectionsActions)
export const instructorStoreSectionReducer = createReducer({ ...initData }, instructorStoreSectionActions)
export const instructorUpdateSectionReducer = createReducer({ ...initData }, instructorUpdateSectionActions)
export const instructorDestroySectionReducer = createReducer({ ...initData }, instructorDestroySectionActions)
export const instructorLessonsReducer = createReducer({ ...initData }, instructorLessonsActions)
export const instructorStoreLessonReducer = createReducer({ ...initData }, instructorStoreLessonActions)
export const instructorUpdateLessonReducer = createReducer({ ...initData }, instructorUpdateLessonActions)
export const instructorDestroyLessonReducer = createReducer({ ...initData }, instructorDestroyLessonActions)

export const studentCertificatesReducer = createReducer({ ...initData }, studentCertificatesActions)
export const studentCertificateReducer = createReducer({ ...initData }, studentCertificateActions)
export const studentReviewsReducer = createReducer({ ...initData }, studentReviewsActions)
export const studentStoreReviewReducer = createReducer({ ...initData }, studentStoreReviewActions)
export const studentUpdateReviewReducer = createReducer({ ...initData }, studentUpdateReviewActions)
export const studentDestroyReviewReducer = createReducer({ ...initData }, studentDestroyReviewActions)
export const studentAnswersReducer = createReducer({ ...initData }, studentAnswersActions)
export const studentQuestionReducer = createReducer({ ...initData }, studentQuestionActions)
export const studentStashesReducer = createReducer({ ...initData }, studentStashesActions)
export const studentStoreStashReducer = createReducer({ ...initData }, studentStoreStashActions)
export const studentDestroyStashReducer = createReducer({ ...initData }, studentDestroyStashActions)
export const studentCoursesReducer = createReducer({ ...initData }, studentCoursesActions)
export const studentSectionsReducer = createReducer({ ...initData }, studentSectionsActions)
export const studentLessonsReducer = createReducer({ ...initData }, studentLessonsActions)
export const studentCourseProgressReducer = createReducer({ ...initData }, studentCourseProgressActions)
export const studentUpdateCompletedLecturesReducer = createReducer({ ...initData }, studentUpdateCompletedLecturesActions)
export const studentTransactionsReducer = createReducer({ ...initData }, studentTransactionsActions)
export const studentStoreTransactionReducer = createReducer({ ...initData }, studentStoreTransactionActions)
export const studentStoreTransactionFreeReducer = createReducer({ ...initData }, studentStoreTransactionFreeActions)
export const studentDestroyTransactionReducer = createReducer({ ...initData }, studentDestroyTransactionActions) 