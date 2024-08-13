import { fetchActions } from '@root/redux/utils'
import { fetchLogin, fetchLoginWithGoogle, fetchLogout, fetchMe, fetchPasswordSendLink, fetchRegister } from '@root/service/user/auth'

export const registerActions = fetchActions('REGISTER', fetchRegister)
export const loginActions = fetchActions('LOGIN', fetchLogin)
export const meActions = fetchActions('ME', fetchMe)
export const logoutActions = fetchActions('LOGOUT', fetchLogout)
export const loginWithGoogleActions = fetchActions('LOGIN_WITH_GOOGLE', fetchLoginWithGoogle)
export const passwordSendLinkActions = fetchActions('PASSWORD_SEND_LINK', fetchPasswordSendLink)