import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Layouts from '@root/views/user/Layouts'

import { RootState } from '@root/redux/store'

import { useForm } from '@root/utils/Form'
import { size, textCustom } from '@root/utils/Styles'

import { registerActions } from '@root/redux/user/actions/member'

import BadgeComp from '@root/components/common/alert/BadgeComp'
import ModalComp from '@root/components/common/alert/ModalComp'
import SubmitComp from '@root/components/common/button/SubmitComp'
import LoadingComp from '@root/components/common/LoadingComp'
import BoxFormComp from '@root/components/specific/user/BoxFormComp'
import NavigateComp from '@root/components/common/button/NavigateComp'
import InputTextComp from '@root/components/common/form/InputTextComp'
import InputDateComp from '@root/components/common/form/InputDateComp'
import InputSelectComp from '@root/components/common/form/InputSelectComp'
import { _convertDateFormat } from '@root/utils/Helper'

const Register = () => {
    const { theme } = useSelector((state: RootState) => state.theme)

    const dispatch = useDispatch()

    const { data: member } = useSelector((state: RootState) => state.user.meData)

    const initialState = {
        role: '',
        address: '',
        dob: ''
    }
    const { handleCustomChange, formData } = useForm(initialState)
    const { data: success, error, loading } = useSelector((state: RootState) => state.user.codeRegisterResult)

    useEffect(() => {

    }, [success, error, loading])

    return (
        <Layouts>
            <View style={{ rowGap: size.x }}>
                <Text style={textCustom(theme).textBold}>Register For IOGM - Code</Text>
                {member &&
                    <BoxFormComp>
                        <Text style={textCustom(theme).textMedium}>Info</Text>
                        <InputTextComp name='Username' type='disabled' defaultValue={member.username} />
                        <InputTextComp name='Email' type='disabled' defaultValue={member.email} />
                        <InputTextComp name='Name' type='disabled' defaultValue={member.name} />
                    </BoxFormComp>
                }

                {success && <ModalComp title='Register on IOGM Code' onClose={() => {
                    dispatch(registerActions.success(null))
                }} children={
                    <View style={{ rowGap: size.s }}>
                        <BadgeComp text={success} type='success' />
                        <NavigateComp text='Go to IOGM Code' type='primary' to='Code' isNested nested={{ screen: 'CodeHomeScreen' }} />
                    </View>} />}

                <BoxFormComp>
                    <Text style={textCustom(theme).textMedium}>Form</Text>
                    <View style={{ rowGap: size.xs }}>
                        <InputSelectComp name='Select Role' option={['student', 'instructor']} handleInputOnChange={value => handleCustomChange(value, 'role')} />
                        {error && error.role && <BadgeComp text={error.role[0]} type='danger' onClose={() => dispatch(registerActions.failure(null))} />}
                    </View>
                    <View style={{ rowGap: size.xs }}>
                        <InputTextComp defaultValue={formData.address} name='Address' type='text' handleInputOnChange={value => handleCustomChange(value, 'address')} />
                        {error && error.address && <BadgeComp text={error.address[0]} type='danger' onClose={() => dispatch(registerActions.failure(null))} />}
                    </View>
                    <View style={{ rowGap: size.xs }}>
                        <InputDateComp name='Date Of Birth' handleInputOnChange={value => handleCustomChange(_convertDateFormat(value), 'dob')} />
                        {error && error.dob && <BadgeComp text={error.dob[0]} type='danger' onClose={() => dispatch(registerActions.failure(null))} />}
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        {loading ? <LoadingComp type='primary' /> :
                            <SubmitComp text='Submit' type='primary' onPress={() => dispatch(registerActions.init(formData))} />}
                    </View>
                </BoxFormComp>
            </View>
        </Layouts>
    )
}

export default Register