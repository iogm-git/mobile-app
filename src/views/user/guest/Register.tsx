import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import Layouts from '../Layouts'

import { RootState } from '@root/redux/store'

import ModalComp from '@root/components/common/alert/ModalComp'
import BadgeComp from '@root/components/common/alert/BadgeComp'
import SubmitComp from '@root/components/common/button/SubmitComp'
import LoadingComp from '@root/components/common/LoadingComp'
import NavigateComp from '@root/components/common/button/NavigateComp'
import InputTextComp from '@root/components/common/form/InputTextComp'
import InputGoogleButton from '@root/components/common/form/InputGoogleButton'

import { useForm } from '@root/utils/Form'
import { color, flexCustom, fontFamily, size, textCustom } from '@root/utils/Styles'

import { registerActions } from '@root/redux/user/actions/auth'
import { AuthStackParamList } from '@root/utils/Navigation'

const Register = () => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    const navigation = useNavigation<NavigationProp<AuthStackParamList>>()

    const dispatch = useDispatch()
    const { data: success, error, loading } = useSelector((state: RootState) => state.user.registerResult)

    const initialState = {
        username: '',
        password: '',
        password_confirmation: ''
    }

    const { handleCustomChange, formData, setFormData } = useForm(initialState)

    useEffect(() => {

    }, [success, error, loading])

    return (
        <Layouts>
            {success &&
                <ModalComp title='Register' onClose={() => {
                    dispatch(registerActions.success(null))
                    setFormData(initialState)
                }}>
                    <View style={{ rowGap: size.s }}>
                        <BadgeComp text={success.message} type='success' />
                        <NavigateComp text='Login' type='primary' to='Login'
                            onPress={() => {
                                dispatch(registerActions.success(null))
                                setFormData(initialState)
                            }} />
                    </View>
                </ModalComp>
            }
            <View style={{ rowGap: size.l }}>
                <Text style={[textCustom(theme).textBold, { textAlign: 'center' }]}>Register</Text>

                <View style={{ rowGap: size.xs }}>
                    <InputTextComp defaultValue={formData.username} name='username' handleInputOnChange={value => handleCustomChange(value, 'username')} />
                    {error && error.username && <BadgeComp onClose={registerActions.failure(null)} text={error.username[0]} type='danger' />}
                </View>

                <InputTextComp defaultValue={formData.password} name='password' type='password' handleInputOnChange={value => handleCustomChange(value, 'password')} />

                <View style={{ rowGap: size.xs }}>
                    <InputTextComp defaultValue={formData.password_confirmation} name='password confirmation' type='password' handleInputOnChange={value => handleCustomChange(value, 'password_confirmation')} />
                    {error && error.password && error.password.map((value: any, index: number) => (
                        <BadgeComp onClose={registerActions.failure(null)} text={value} key={index} type='danger' />
                    ))}
                </View>

                <TouchableOpacity onPress={() => {
                    setFormData(initialState)
                    navigation.navigate('ForgotPassword')
                    dispatch(registerActions.failure(null))
                }}>
                    <Text style={{
                        ...textCustom(theme).textLight,
                        color: color.blue,
                        textAlign: 'center'
                    }}>Forgot Password</Text>
                </TouchableOpacity>


                <View style={flexCustom.flexRowCenter as ViewStyle}>
                    {loading ? <LoadingComp type='primary' /> :
                        <SubmitComp text='Register' type='primary' onPress={() => dispatch(registerActions.init(formData))} />
                    }
                    <SubmitComp text='Reset' type='danger' onPress={() => setFormData(initialState)} />
                </View>

                <View style={{ alignSelf: 'center' }}>
                    <InputGoogleButton />
                </View>

                <View style={{ alignSelf: 'center' }}>
                    <Text style={{
                        fontFamily: fontFamily.light,
                        fontSize: size.m,
                        color: colors.link
                    }}>Have an account?</Text>
                    <Text onPress={() => {
                        setFormData(initialState)
                        navigation.navigate('Login')
                        dispatch(registerActions.failure(null))
                    }} style={{
                        fontFamily: fontFamily.light,
                        fontSize: size.m,
                        color: color.blue,
                        textDecorationLine: 'underline'
                    }}>Go Login</Text>
                </View>
            </View>
        </Layouts>
    )
}

export default Register

