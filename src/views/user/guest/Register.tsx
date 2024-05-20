import React from 'react'
import Layouts from '../Layouts'
import InputTextComp from '@root/components/common/form/InputTextComp'
import InputGoogleButton from '@root/components/common/form/InputGoogleButton'
import SubmitComp from '@root/components/common/button/SubmitComp'
import { Text, View } from 'react-native'
import { fontFamily, root, textCustom } from '@root/utils/Styles'
import { useNavigation } from '@react-navigation/native'

const Register = () => {
    const navigation = useNavigation()

    return (
        <Layouts>
            <Text style={textCustom.textBold}>Register</Text>
            <InputTextComp name='username' handleInputOnChange={value => console.log(value)} />
            <InputTextComp name='password' type='password' handleInputOnChange={value => console.log(value)} />
            <InputTextComp name='password confirmation' type='password' handleInputOnChange={value => console.log(value)} />
            <Text onPress={() => navigation.navigate('user-guest-password-Forgot')} style={{
                ...textCustom.textLight,
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
                }}>Have an account?</Text>
                <Text onPress={() => navigation.navigate('user-guest-Login')} style={{
                    fontFamily: fontFamily.light,
                    fontSize: root.sizeM,
                    color: root.blueColor,
                    textDecorationLine: 'underline'
                }}>Go Login</Text>
            </View>
        </Layouts>
    )
}

export default Register

