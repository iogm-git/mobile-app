import { fetchActions } from "@root/redux/utils";
import { fetchSearchCourse, fetchVerifyCertificate } from "@root/service/code/guest";

export const searchCourseActions = fetchActions('SEARCH_COURSE', fetchSearchCourse)
export const verifyCertificateActions = fetchActions('VERIFY_CERTIFICATE', fetchVerifyCertificate)