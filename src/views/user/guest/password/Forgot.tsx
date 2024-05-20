import { Text, View } from 'react-native'
import React from 'react'
import Layouts from '@root/views/user/Layouts'
import InputTextComp from '@root/components/common/form/InputTextComp'
import SubmitComp from '@root/components/common/button/SubmitComp'
import { textCustom } from '@root/utils/Styles'

const Forgot = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>Forgot Password</Text>
            <InputTextComp name='Username' type='text' handleInputOnChange={value => console.log(value)} />
            <Text style={textCustom.textLight}>Enter your username that was used when registering for this application</Text>
            <View style={{ alignSelf: 'center' }}>
                <SubmitComp text='Submit' type='primary' handleSubmitOnPress={() => console.log('asd')} />
            </View>
        </Layouts>
    )
}

export default Forgot