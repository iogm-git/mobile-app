import { Text, View } from 'react-native'
import React from 'react'
import Layouts from '@root/views/user/Layouts'
import InputTextComp from '@root/components/common/form/InputTextComp'
import SubmitComp from '@root/components/common/button/SubmitComp'
import { textCustom } from '@root/utils/Styles'

const Reset = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>Reset Password</Text>
            <InputTextComp name='Password' type='password' handleInputOnChange={value => console.log(value)} />
            <InputTextComp name='Password Confirmation' type='password' handleInputOnChange={value => console.log(value)} />
            <View style={{ alignSelf: 'center' }}>
                <SubmitComp text='Submit' type='primary' handleSubmitOnPress={() => console.log('asd')} />
            </View>
        </Layouts>
    )
}

export default Reset