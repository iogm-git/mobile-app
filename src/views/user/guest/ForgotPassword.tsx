import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Layouts from '@root/views/user/Layouts'

import { RootState } from '@root/redux/store'

import { useForm } from '@root/utils/Form'
import { size, textCustom } from '@root/utils/Styles'

import { passwordSendLinkActions } from '@root/redux/user/actions/auth'

import BadgeComp from '@root/components/common/alert/BadgeComp'
import SubmitComp from '@root/components/common/button/SubmitComp'
import LoadingComp from '@root/components/common/LoadingComp'
import NavigateComp from '@root/components/common/button/NavigateComp'
import InputTextComp from '@root/components/common/form/InputTextComp'

const ForgotPassword = () => {
    const { theme } = useSelector((state: RootState) => state.theme)

    const dispatch = useDispatch()
    const { data: success, error, loading } = useSelector((state: RootState) => state.user.passwordSendLinkResult)

    const initialState = {
        username: ''
    }

    const { handleCustomChange, formData } = useForm(initialState)

    useEffect(() => {

    }, [success, error, loading])

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <Text style={textCustom(theme).textBold}>Forgot Password</Text>

                {success && success.message && <BadgeComp text={success.message} type='success' onClose={() => dispatch(passwordSendLinkActions.success(null))} />}

                {error && (typeof error === 'string') && <BadgeComp text={error} type='danger' onClose={() => dispatch(passwordSendLinkActions.failure(null))} />}

                <View style={{ rowGap: size.xs }}>
                    <InputTextComp defaultValue={formData.username} name='Username' type='text' handleInputOnChange={value => handleCustomChange(value, 'username')} />
                    {error && error.username && <BadgeComp text={error.username[0]} type='danger' onClose={() => dispatch(passwordSendLinkActions.failure(null))} />}
                </View>

                <Text style={textCustom(theme).textLight}>Enter your username that was used when registering for this application</Text>

                <View style={{ alignSelf: 'center' }}>
                    {loading ? <LoadingComp type='primary' />
                        : <SubmitComp text='Submit' type='primary' onPress={() => dispatch(passwordSendLinkActions.init(formData))} />}
                </View>

                <NavigateComp text='Back' type='warning' goBack />
            </View>
        </Layouts>
    )
}

export default ForgotPassword