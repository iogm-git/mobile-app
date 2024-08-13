import { createReducer, initData } from "@root/redux/utils";
import { searchCourseActions, verifyCertificateActions } from "../actions/guest";

export const searchCourseReducer = createReducer({ ...initData }, searchCourseActions)
export const verifyCertificateReducer = createReducer({ ...initData }, verifyCertificateActions)