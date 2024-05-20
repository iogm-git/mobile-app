import React from 'react'
import Layouts from '../Layouts'
import InputTextComp from '@root/components/common/form/InputTextComp'
import InputGoogleButton from '@root/components/common/form/InputGoogleButton'
import SubmitComp from '@root/components/common/button/SubmitComp'
import { Text, View } from 'react-native'
import { fontFamily, root, textCustom } from '@root/utils/Styles'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation = useNavigation()

    return (
        <Layouts>
            <Text style={textCustom.textBold}>Login</Text>
            <InputTextComp name='username' handleInputOnChange={value => console.log(value)} />
            <InputTextComp name='password' type='password' handleInputOnChange={value => console.log(value)} />
            <Text onPress={() => navigation.navigate('user-guest-password-Forgot')} style={{
                fontFamily: fontFamily.light,
                fontSize: root.sizeS,
                color: root.blueColor,
                textAlign: 'center'
            }}>Forgot Password</Text>
            <View style={{ alignSelf: 'center' }}>
                <SubmitComp text='Login' type='primary' handleSubmitOnPress={() => console.log('test')} />
            </View>
            <View style={{ alignSelf: 'center' }}>
                <InputGoogleButton />
            </View>
            <View style={{ alignSelf: 'center' }}>
                <Text style={{
                    fontFamily: fontFamily.light,
                    fontSize: root.sizeM,
                    color: root.linkColor
                }}>Doesn't have an account?</Text>
                <Text onPress={() => navigation.navigate('user-guest-Register')} style={{
                    fontFamily: fontFamily.light,
                    fontSize: root.sizeM,
                    color: root.blueColor,
                    textDecorationLine: 'underline'
                }}>Go Register</Text>
            </View>
        </Layouts>
    )
}

export default Login

