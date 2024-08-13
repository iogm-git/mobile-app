import { SvgUri } from 'react-native-svg'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { Alert, Image, ScrollView, Text, TouchableOpacity, View, ViewStyle } from 'react-native'

import Layouts from '@root/views/user/Layouts'

import { RootState } from '@root/redux/store'

import NavigateComp from '@root/components/common/button/NavigateComp'
import ModalComp from '@root/components/common/alert/ModalComp'
import BadgeComp from '@root/components/common/alert/BadgeComp'
import SubmitComp from '@root/components/common/button/SubmitComp'
import LoadingComp from '@root/components/common/LoadingComp'
import BoxFormComp from '@root/components/specific/user/BoxFormComp'
import InputTextComp from '@root/components/common/form/InputTextComp'
import InputTokenComp from '@root/components/common/form/InputTokenComp'
import InputImageComp from '@root/components/common/form/InputImageComp'

import { useForm } from '@root/utils/Form'
import { _countryPhoneCodes, _getImage, _searchData } from '@root/utils/Helper'
import { borderDefault, buttonCustom, color, fontFamily, size, textCustom } from '@root/utils/Styles'

import { authenticationActions, emailSendTokenActions, emailVerifyActions, passwordChangeActions, phoneNumberSendTokenActions, phoneNumberVerifyActions, uploadProfileImageActions } from '@root/redux/user/actions/member'
import ChangeThemeComp from '@root/components/common/button/ChangeThemeComp'

const Setting = () => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    const dispatch = useDispatch()

    const alert = () => {
        Alert.alert(
            'Status Account',
            'U need verifiy email',
            [
                { text: 'Ok' }
            ]
        )
    }

    const { data: member, loading } = useSelector((state: RootState) => state.user.meData)

    const initialStateAuthentication = {
        username: member && member.username,
        name: member && member.name
    }
    const { handleCustomChange: authenticationCustomChange, formData: authenticationData } = useForm(initialStateAuthentication)
    const { data: authenticationSuccess, error: authenticationError, loading: authenticationLoading } = useSelector((state: RootState) => state.user.authenticationResult)

    const initialStateUploadProfileImage = {
        image: ''
    }
    const { handleCustomChange: uploadProfileImageCustomChange, formData: uploadProfileImageData, setFormData: setUploadProfileImageData } = useForm(initialStateUploadProfileImage)
    const { data: uploadProfileImageSuccess, error: uploadProfileImageError, loading: uploadProfileImageLoading } = useSelector((state: RootState) => state.user.uploadProfileImageResult)

    const initialStatePasswordChange = {
        password: '',
        password_confirmation: ''
    }
    const { handleCustomChange: passwordChangeCustomChange, formData: passwordChangeData, setFormData: setPasswordChangeData } = useForm(initialStatePasswordChange)
    const { data: passwordChangeSuccess, error: passwordChangeError, loading: passwordChangeLoading } = useSelector((state: RootState) => state.user.passwordChangeResult)

    const initialStateEmailSendToken = {
        email: member && member.email,
    }
    const { handleCustomChange: emailSendTokenCustomChange, formData: emailSendTokenData } = useForm(initialStateEmailSendToken)
    const { data: emailSendTokenSuccess, error: emailSendTokenError, loading: emailSendTokenLoading } = useSelector((state: RootState) => state.user.emailSendTokenResult)

    const initialStateEmailVerify = {
        email: member && member.email,
        token: ''
    }
    const { handleCustomChange: emailVerifyCustomChange, formData: emailVerifyData } = useForm(initialStateEmailVerify)
    const { data: emailVerifySuccess, error: emailVerifyError, loading: emailVerifyLoading } = useSelector((state: RootState) => state.user.emailVerifyResult)

    const initialStatePhoneNumberSendToken = {
        code: '',
        number: ''
    }
    const [phoneCodes, setPhoneCodes] = useState({ show: false, value: _countryPhoneCodes })
    const { handleCustomChange: phoneNumberSendCustomChange, formData: phoneNumberSendData } = useForm(initialStatePhoneNumberSendToken)
    const { data: phoneNumberSendTokenSuccess, error: phoneNumberSendTokenError, loading: phoneNumberSendTokenLoading } = useSelector((state: RootState) => state.user.phoneNumberSendTokenResult)

    const initialStatePhoneNumberVerify = {
        token: ''
    }
    const { handleCustomChange: phoneNumberVerifyCustomChange, formData: phoneNumberVerifyData } = useForm(initialStatePhoneNumberVerify)
    const { data: phoneNumberVerifySuccess, error: phoneNumberVerifyError, loading: phoneNumberVerifyLoading } = useSelector((state: RootState) => state.user.phoneNumberVerifyResult)


    useEffect(() => {

    }, [
        member,
        authenticationSuccess, authenticationError, authenticationLoading,
        uploadProfileImageSuccess, uploadProfileImageError, uploadProfileImageLoading,
        passwordChangeSuccess, passwordChangeError, passwordChangeLoading,
        emailSendTokenSuccess, emailSendTokenError, emailSendTokenLoading,
        emailVerifySuccess, emailVerifyError, emailVerifyLoading,
        phoneNumberSendTokenSuccess, phoneNumberSendTokenError, phoneNumberSendTokenLoading,
    ])

    return (
        <Layouts>
            <Text style={textCustom(theme).textBold}>Setting Profile</Text>

            {loading ? <LoadingComp type='primary' /> : member ?
                <>
                    {member.hasOwnProperty('role') && member.role === 'instructor' &&
                        <BoxFormComp>
                            <Text style={textCustom(theme).textRegular}>You are registered as an instructor in the IOGM - Code application, if you want to set up a bank account, please click the button below</Text>
                            <NavigateComp text='Instructor' type='text' to='Instructor' />
                        </BoxFormComp>
                    }

                    <BoxFormComp>
                        <Text style={textCustom(theme).textMedium}>Update Image</Text>
                        {member.image && member.image.includes('.svg') ?
                            <SvgUri height={200} width='100%' uri={_getImage(member.image)} /> :
                            <Image source={{ uri: _getImage(member.image) }} style={[borderDefault(theme).borderS, { height: 300 }]} />
                        }
                        {uploadProfileImageSuccess &&
                            <BadgeComp text={uploadProfileImageSuccess} type='success' onClose={() => {
                                dispatch(uploadProfileImageActions.success(null))
                                setUploadProfileImageData(initialStateUploadProfileImage)
                            }} />}
                        {uploadProfileImageLoading ? <LoadingComp type='primary' /> :
                            <InputImageComp name='Image' handleInputOnChange={value => uploadProfileImageCustomChange(value, 'image')} />}
                        {uploadProfileImageError && <BadgeComp text={uploadProfileImageError.image[0]} type='danger' onClose={() => dispatch(uploadProfileImageActions.failure(null))} />}
                        {uploadProfileImageLoading ? <LoadingComp type='warning' /> : !member.image.includes('profile.svg') &&
                            <SubmitComp text='Remove' type='warning' onPress={() => dispatch(uploadProfileImageActions.init({ image: 'profile.svg' }))} />}
                        {uploadProfileImageLoading ? <LoadingComp type='primary' /> :
                            <SubmitComp text='Upload' type='primary' onPress={() => dispatch(uploadProfileImageActions.init(uploadProfileImageData))} />}
                    </BoxFormComp>

                    <BoxFormComp>
                        <Text style={textCustom(theme).textMedium}>Update Authentication</Text>
                        {authenticationSuccess && <BadgeComp text={authenticationSuccess} type='success' onClose={() => dispatch(authenticationActions.success(null))} />}

                        <View style={{ rowGap: size.xs }}>
                            <InputTextComp defaultValue={authenticationData.username} name='Username' handleInputOnChange={value => authenticationCustomChange(value, 'username')} />
                            {authenticationError && authenticationError.username && <BadgeComp text={authenticationError.username[0]} type='danger' onClose={() => dispatch(authenticationActions.failure(null))} />}
                        </View>

                        <View style={{ rowGap: size.xs }}>
                            <InputTextComp defaultValue={authenticationData.name} name='Name' handleInputOnChange={value => authenticationCustomChange(value, 'name')} />
                            {authenticationError && authenticationError.name && <BadgeComp text={authenticationError.name[0]} type='danger' onClose={() => dispatch(authenticationActions.failure(null))} />}
                        </View>
                        {authenticationLoading ? <LoadingComp type='primary' /> :
                            <SubmitComp text='Update' type='primary' onPress={() => dispatch(authenticationActions.init(authenticationData))} />}
                    </BoxFormComp>

                    <BoxFormComp>
                        <Text style={textCustom(theme).textMedium}>Change Password</Text>
                        {passwordChangeSuccess && <BadgeComp text={passwordChangeSuccess} type='success' onClose={() => {
                            dispatch(passwordChangeActions.success(null))
                            setPasswordChangeData(initialStatePasswordChange)
                        }} />}

                        <InputTextComp defaultValue={passwordChangeData.password} name='New Password' type='password' handleInputOnChange={value => passwordChangeCustomChange(value, 'password')} />

                        <View style={{ rowGap: size.xs }}>
                            <InputTextComp defaultValue={passwordChangeData.password_confirmation} name='New Password Confirmation' type='password' handleInputOnChange={value => passwordChangeCustomChange(value, 'password_confirmation')} />
                            {passwordChangeError && passwordChangeError.password && passwordChangeError.password.map((value: any, index: number) => (
                                <BadgeComp text={value} key={index} type='danger' onClose={() => dispatch(passwordChangeActions.failure(null))} />
                            ))}
                        </View>

                        {passwordChangeLoading ? <LoadingComp type='primary' /> :
                            <SubmitComp text='Update' type='primary' onPress={() => dispatch(passwordChangeActions.init(passwordChangeData))} />}
                    </BoxFormComp>

                    <BoxFormComp>
                        <Text style={textCustom(theme).textMedium}>Verify Email</Text>
                        {emailSendTokenData.email === null && <BadgeComp type='danger' text="You haven't verified your email, so you can't make transactions in this application" />}
                        {emailSendTokenSuccess && <BadgeComp text={emailSendTokenSuccess} type='success' onClose={() => dispatch(emailSendTokenActions.success(null))} />}

                        <View style={{ rowGap: size.xs }}>
                            <InputTextComp defaultValue={emailSendTokenData.email} name='Email' type='email' handleInputOnChange={value => {
                                emailSendTokenCustomChange(value, 'email')
                                emailVerifyCustomChange(value, 'email')
                            }} />
                            {emailSendTokenError && emailSendTokenError.email && <BadgeComp text={emailSendTokenError.email[0]} type='danger' onClose={() => dispatch(emailSendTokenActions.failure(null))} />}
                        </View>

                        {emailSendTokenLoading ? <LoadingComp type='primary' /> :
                            <SubmitComp text='Send Token' type='primary' onPress={() => dispatch(emailSendTokenActions.init(emailSendTokenData))} />}
                    </BoxFormComp>

                    {member && member.token &&
                        <BoxFormComp>
                            <Text style={textCustom(theme).textMedium}>Verify Email Token</Text>
                            {emailVerifySuccess && <BadgeComp text={emailVerifySuccess} type='success' onClose={() => dispatch(emailVerifyActions.success(null))} />}

                            <View style={{ rowGap: size.xs }}>
                                <InputTokenComp name='token email' length={4} handleInputOnChange={value => { emailVerifyCustomChange(value, 'token') }} />
                                {emailVerifyError && emailVerifyError.token && <BadgeComp text={emailVerifyError.token[0]} type='danger' onClose={() => dispatch(emailVerifyActions.failure(null))} />}
                            </View>

                            {emailVerifyLoading ? <LoadingComp type='primary' /> :
                                <SubmitComp text='Send Token' type='primary' onPress={() => dispatch(emailVerifyActions.init(emailVerifyData))} />}
                        </BoxFormComp>}

                    <BoxFormComp>
                        <Text style={textCustom(theme).textMedium}>Verify Phone Number</Text>
                        {phoneNumberSendTokenSuccess && <BadgeComp text={phoneNumberSendTokenSuccess} type='success' onClose={() => dispatch(phoneNumberSendTokenActions.success(null))} />}

                        <View style={{ rowGap: size.xs }}>
                            <InputTextComp name='Phone Code' defaultValue={phoneNumberSendData.code} type='disabled' />
                            <TouchableOpacity onPress={() => setPhoneCodes(prev => ({ ...prev, show: !prev.show }))}>
                                <Text style={[textCustom(theme).textLight, {
                                    textDecorationLine: 'underline',
                                    color: color.blue,
                                }]}>Show Phone Code</Text>
                            </TouchableOpacity>
                            {phoneCodes.show &&
                                <ModalComp onClose={() => setPhoneCodes(prev => ({ ...prev, show: !prev.show }))} title='Phone Code' children={
                                    <View style={{
                                        margin: size.m,
                                        rowGap: size.m
                                    }}>
                                        <InputTextComp name='Phone Code Name' defaultValue={phoneNumberSendData.code} handleInputOnChange={value => {
                                            phoneNumberSendCustomChange(value, 'code')
                                            _searchData(value.toLowerCase(), _countryPhoneCodes, (result: any) => setPhoneCodes(prev => ({ ...prev, value: result })))
                                        }} />
                                        <ScrollView style={{
                                            maxHeight: 325,
                                            rowGap: size.m
                                        }}>
                                            {phoneCodes.value.map((value, index) => (
                                                <TouchableOpacity key={index} style={{
                                                    backgroundColor: color.transBlue,
                                                    padding: size.xxs,
                                                    marginBottom: size.s,
                                                    borderRadius: size.radiusS
                                                }} onPress={() => {
                                                    phoneNumberSendCustomChange(Object.values(value)[0], 'code')
                                                    setPhoneCodes({ show: false, value: _countryPhoneCodes })
                                                }}>
                                                    <Text style={{
                                                        fontSize: size.s,
                                                        fontFamily: fontFamily.regular,
                                                        color: color.blue,
                                                    }}>{Object.values(value)[0]} - {Object.keys(value)[0]}</Text>
                                                </TouchableOpacity>
                                            ))}
                                        </ScrollView>
                                    </View>
                                } />
                            }
                        </View>

                        <View style={{ rowGap: size.xs }}>
                            <InputTextComp defaultValue={phoneNumberSendData.number} name='Phone Number' type='numeric' handleInputOnChange={value => phoneNumberSendCustomChange(value, 'number')} />
                            <Text style={[textCustom(theme).textLight, { color: colors.link }]}>Ignore [0] in your phone number . Ex: 81272369357</Text>
                            {phoneNumberSendTokenError && phoneNumberSendTokenError.number && <BadgeComp text={phoneNumberSendTokenError.number[0]} type='danger' />}
                        </View>

                        {phoneNumberSendTokenLoading ? <LoadingComp type='primary' /> :
                            <SubmitComp text='Send Token' type='primary' onPress={() => dispatch(phoneNumberSendTokenActions.init(phoneNumberSendData))} />
                        }
                    </BoxFormComp>

                    <BoxFormComp>
                        <Text style={textCustom(theme).textMedium}>Change Theme</Text>
                        <ChangeThemeComp />
                    </BoxFormComp>

                    {member && member.token &&
                        <BoxFormComp>
                            <Text style={textCustom(theme).textMedium}>Verify Phone Number Token</Text>
                            {phoneNumberVerifySuccess && <BadgeComp text={phoneNumberVerifySuccess} type='success' onClose={() => dispatch(phoneNumberVerifyActions.success(null))} />}

                            <View style={{ rowGap: size.xs }}>
                                <InputTokenComp name='token phone number' length={4} handleInputOnChange={value => { phoneNumberVerifyCustomChange(value, 'token') }} />
                                {phoneNumberVerifyError && phoneNumberVerifyError.token && <BadgeComp text={phoneNumberVerifyError.token[0]} type='danger' onClose={() => dispatch(phoneNumberVerifyActions.failure(null))} />}
                            </View>

                            {phoneNumberVerifyLoading ? <LoadingComp type='primary' /> :
                                <SubmitComp text='Send Token' type='primary' onPress={() => dispatch(phoneNumberVerifyActions.init(phoneNumberVerifyData))} />}
                        </BoxFormComp>}

                    <View style={{ alignSelf: 'center' }}>
                        {member && member.email ?
                            <NavigateComp text='Continue Register' to='Ballot' type='primary' />
                            : <TouchableOpacity onPress={alert} style={[buttonCustom(theme).buttonCom as ViewStyle, {
                                backgroundColor: colors.bg,
                                borderColor: colors.border,
                                borderWidth: 1.5,
                            }]}>
                                <Text style={[textCustom(theme).textRegular, {
                                    color: color.red
                                }]}>Continue Register</Text>
                            </TouchableOpacity>
                        }
                    </View>
                </>
                : <NavigateComp text='Login Now' type='primary' to='Login' />
            }
        </Layouts>
    )
}

export default Setting

