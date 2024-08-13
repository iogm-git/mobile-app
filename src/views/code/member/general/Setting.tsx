import React from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Layouts from '../../Layouts'

import { useForm } from '@root/utils/Form'
import { size, textCustom } from '@root/utils/Styles'
import { _convertDateFormat } from '@root/utils/Helper'

import BadgeComp from '@root/components/common/alert/BadgeComp'
import ModalComp from '@root/components/common/alert/ModalComp'
import HandleComp from '@root/components/common/button/HandleComp'
import SubmitComp from '@root/components/common/button/SubmitComp'
import LoadingComp from '@root/components/common/LoadingComp'
import NavigateComp from '@root/components/common/button/NavigateComp'
import InputDateComp from '@root/components/common/form/InputDateComp'
import InputTextComp from '@root/components/common/form/InputTextComp'

import { RootState } from '@root/redux/store'
import { codeMeActions, dobAndAddressActions } from '@root/redux/code/actions/member'

const Setting = () => {
    const { theme } = useSelector((state: RootState) => state.theme)

    const dispatch = useDispatch()

    const { data: member } = useSelector((state: RootState) => state.user.meData)
    const { data: success, error, loading } = useSelector((state: RootState) => state.code.dobAndAddressResult)

    const initialState = {
        address: member.address ? member.address : '',
        dob: member.dob ? member.dob : ''
    }
    const { handleCustomChange, formData, setFormData } = useForm(initialState)

    const modalClose = () => {
        dispatch(dobAndAddressActions.success(null))
        dispatch(codeMeActions.init())
        setFormData(initialState)
    }

    return (
        <Layouts>
            {success && <ModalComp title='Register on IOGM Code' onClose={modalClose} children={
                <View style={{ rowGap: size.s }}>
                    <BadgeComp text={success} type='success' />
                    <HandleComp type='primary' text='Ok' onPress={modalClose} />
                </View>} />}

            <View style={{ rowGap: size.l }}>
                <Text style={textCustom(theme).textBold}>Setting</Text>
                <View style={{ rowGap: size.xs }}>
                    <InputDateComp name='Date of birth' defaultValue={formData.dob} handleInputOnChange={value => handleCustomChange(_convertDateFormat(value), 'dob')} />
                    {error && error.dob && <BadgeComp text={error.dob[0]} type='danger' onClose={() => dispatch(dobAndAddressActions.failure(null))} />}
                </View>
                <View style={{ rowGap: size.xs }}>
                    <InputTextComp name='Address' defaultValue={formData.address} handleInputOnChange={value => handleCustomChange(value, 'address')} />
                    {error && error.address && <BadgeComp text={error.address[0]} type='danger' onClose={() => dispatch(dobAndAddressActions.failure(null))} />}
                </View>
                {loading ? <LoadingComp type='primary' /> :
                    <SubmitComp text='Submit' type='primary' onPress={() => dispatch(dobAndAddressActions.init(formData))} />}
                <NavigateComp text='Advance Setting' type='primary' to='User' isNested nested={{ screen: 'Member', params: { screen: 'Setting' } }} />
            </View>
        </Layouts>
    )
}

export default Setting