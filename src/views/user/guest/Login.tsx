import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import Layouts from '../Layouts'

import { RootState } from '@root/redux/store'

import ModalComp from '@root/components/common/alert/ModalComp'
import BadgeComp from '@root/components/common/alert/BadgeComp'
import SubmitComp from '@root/components/common/button/SubmitComp'
import HandleComp from '@root/components/common/button/HandleComp'
import LoadingComp from '@root/components/common/LoadingComp'
import InputTextComp from '@root/components/common/form/InputTextComp'
import InputGoogleButton from '@root/components/common/form/InputGoogleButton'

import { useForm } from '@root/utils/Form'
import { AuthStackParamList } from '@root/utils/Navigation'
import { color, flexCustom, fontFamily, size, textCustom } from '@root/utils/Styles'

import { loginActions, meActions } from '@root/redux/user/actions/auth'

const Login = () => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    const navigation = useNavigation<NavigationProp<AuthStackParamList>>()

    const dispatch = useDispatch()
    const { loading: loadingAfterLogin } = useSelector((state: RootState) => state.user.meData)
    const { data: success, error, loading } = useSelector((state: RootState) => state.user.loginResult)

    const initialState = {
        username: '',
        password: ''
    }

    const { handleCustomChange, formData, setFormData } = useForm(initialState)

    useEffect(() => {

    }, [success, error, loading])

    const handleAfterLogin = () => {
        dispatch(loginActions.success(null))
        dispatch(meActions.init())
        setFormData(initialState)
    }

    return (
        <Layouts>
            {loadingAfterLogin ? <>
                <BadgeComp text='Login Success' type='primary' />
                <LoadingComp type='primary' />
            </> :
                <>
                    {success &&
                        <ModalComp title='Login' onClose={handleAfterLogin}>
                            <View style={{ rowGap: size.s }}>
                                <BadgeComp text={success.message} type='success' />
                                <HandleComp text='Ok' type='primary' onPress={handleAfterLogin} />
                            </View>
                        </ModalComp>
                    }
                    <View style={{ rowGap: size.l }}>
                        <Text style={[textCustom(theme).textBold, { textAlign: 'center' }]}>Login</Text>

                        {error && error.error && <BadgeComp text={error.error} type='danger' />}

                        <View style={{ rowGap: size.xs }}>
                            <InputTextComp defaultValue={formData.username} name='username' handleInputOnChange={value => handleCustomChange(value, 'username')} />
                            {error && error.username && <BadgeComp text={error.username[0]} type='danger' onClose={loginActions.failure(null)} />}
                        </View>
                        <View style={{ rowGap: size.xs }}>
                            <InputTextComp defaultValue={formData.password} name='password' type='password' handleInputOnChange={value => handleCustomChange(value, 'password')} />
                            {error && error.password && <BadgeComp text={error.password[0]} type='danger' onClose={loginActions.failure(null)} />}
                        </View>

                        <TouchableOpacity onPress={() => {
                            setFormData(initialState)
                            navigation.navigate('ForgotPassword')
                            dispatch(loginActions.failure(null))
                        }}>
                            <Text style={{
                                fontFamily: fontFamily.light,
                                fontSize: size.s,
                                color: color.blue,
                                textAlign: 'center'
                            }}>Forgot Password</Text>
                        </TouchableOpacity>

                        <View style={flexCustom.flexRowCenter as ViewStyle}>
                            {loading ? <LoadingComp type='primary' /> :
                                <SubmitComp text='Login' type='primary' onPress={() => dispatch(loginActions.init(formData))} />
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
                            }}>Doesn't have an account?</Text>
                            <Text onPress={() => {
                                setFormData(initialState)
                                navigation.navigate('Register')
                                dispatch(loginActions.failure(null))
                            }} style={{
                                fontFamily: fontFamily.light,
                                fontSize: size.m,
                                color: color.blue,
                                textDecorationLine: 'underline'
                            }}>Go Register</Text>
                        </View>
                    </View>
                </>
            }
        </Layouts>
    )
}

export default Login
