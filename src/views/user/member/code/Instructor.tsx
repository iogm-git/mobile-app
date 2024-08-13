import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Alert, ScrollView, Text, TouchableOpacity, View, ViewStyle } from 'react-native'

import Layouts from '@root/views/user/Layouts'

import { RootState } from '@root/redux/store'
import { beneficiaryActions } from '@root/redux/user/actions/member'

import { useForm } from '@root/utils/Form'
import { CodeTabsStackParamList } from '@root/utils/Navigation'
import { _dataBanks, _searchData } from '@root/utils/Helper'
import { color, flexCustom, fontFamily, size, textCustom } from '@root/utils/Styles'

import ModalComp from '@root/components/common/alert/ModalComp'
import BadgeComp from '@root/components/common/alert/BadgeComp'
import SubmitComp from '@root/components/common/button/SubmitComp'
import HandleComp from '@root/components/common/button/HandleComp'
import LoadingComp from '@root/components/common/LoadingComp'
import BoxFormComp from '@root/components/specific/user/BoxFormComp'
import InputTextComp from '@root/components/common/form/InputTextComp'

const Instructor = () => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)
    const navigation = useNavigation<NavigationProp<CodeTabsStackParamList>>()

    const [show, setShow] = useState(false)
    const [bank, setBank] = useState('')
    const [banks, setBanks] = useState(_dataBanks)
    const modalClose = () => {
        setShow(false)
        setBanks(_dataBanks)
    }

    const { data: success, loading, error } = useSelector((state: RootState) => state.user.beneficiaryResult)
    const { data: member, loading: memberLoading } = useSelector((state: RootState) => state.user.meData)

    const initialState = {
        account: member ? member.account : '',
        bank: member ? member.bank : '',
        alias_name: member ? member.alias_name : ''
    }
    const { handleCustomChange, formData } = useForm(initialState)

    const dispatch = useDispatch()

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <Text style={textCustom(theme).textBold}>Instructor Bank</Text>

                <BoxFormComp>
                    <Text style={textCustom(theme).textMedium}>Info</Text>
                    <InputTextComp name='Name' defaultValue={member.name} type='disabled' />
                    <InputTextComp name='Email' defaultValue={member.email} type='disabled' />
                </BoxFormComp>

                <BoxFormComp>
                    <Text style={textCustom(theme).textMedium}>Account</Text>
                    {success &&
                        <BadgeComp text={success} type='success' onClose={() => dispatch(beneficiaryActions.success(null))} />
                    }
                    <View style={{ rowGap: size.xs }}>
                        <InputTextComp name='Number' defaultValue={formData.account} type='numeric' handleInputOnChange={value => handleCustomChange(value, 'account')} />
                        {error && error.account && <BadgeComp text={error.account[0]} type='danger' onClose={() => dispatch(beneficiaryActions.failure(null))} />}
                    </View>

                    <View style={{ rowGap: size.xs }}>
                        <View style={[flexCustom.flexRowBetween as ViewStyle, { columnGap: size.xxs }]}>
                            <TouchableOpacity onPress={() => setShow(true)} style={{ width: 212 }}>
                                <InputTextComp name='Bank Name' defaultValue={bank} type='disabled' />
                            </TouchableOpacity>
                            <HandleComp text='Show' type='primary' onPress={() => setShow(true)} small />
                        </View>
                        {error && error.bank && <BadgeComp text={error.bank[0]} type='danger' onClose={() => dispatch(beneficiaryActions.failure(null))} />}
                    </View>

                    {show &&
                        <ModalComp onClose={modalClose} title='Bank' children={
                            <View style={{ margin: size.m, rowGap: size.m }}>
                                <InputTextComp name='Bank Name' defaultValue={bank} handleInputOnChange={value => {
                                    _searchData(value.toLowerCase(), _dataBanks, (result: any) => setBanks(result))
                                    setBank(value)
                                }} />
                                <ScrollView style={{ maxHeight: 325, rowGap: size.m }}>
                                    {banks.map((value, index) => (
                                        <TouchableOpacity key={index} onPress={() => {
                                            modalClose()
                                            setBank(Object.keys(value)[0])
                                            handleCustomChange(Object.keys(value)[0], 'bank')
                                        }} style={{ backgroundColor: color.transBlue, padding: size.xxs, marginBottom: size.s, borderRadius: size.radiusS }}>
                                            <Text style={{ fontSize: size.s, fontFamily: fontFamily.regular, color: color.blue, }} key={index}>
                                                {Object.values(value)[0]}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </View>
                        } />
                    }

                    <View style={{ rowGap: size.xs }}>
                        <InputTextComp name='Alias Name' defaultValue={formData.alias_name} type='text' handleInputOnChange={value => handleCustomChange(value, 'alias_name')} />
                        {error && error.alias_name && <BadgeComp text={error.alias_name[0]} type='danger' onClose={() => dispatch(beneficiaryActions.failure(null))} />}
                    </View>

                    <View style={{ alignSelf: 'center' }}>
                        {loading ? <LoadingComp type='primary' /> :
                            <SubmitComp text='Submit' type='primary' onPress={() => dispatch(beneficiaryActions.init(formData))} />}
                    </View>
                </BoxFormComp>

            </View>
        </Layouts>
    )
}

export default Instructor