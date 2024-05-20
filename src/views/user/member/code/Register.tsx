import { Text, View } from 'react-native'
import React from 'react'
import Layouts from '@root/views/user/Layouts'
import InputTextComp from '@root/components/common/form/InputTextComp'
import { styles } from '../_style'
import InputSelectComp from '@root/components/common/form/InputSelectComp'
import InputDateComp from '@root/components/common/form/InputDateComp'
import SubmitComp from '@root/components/common/button/SubmitComp'
import { textCustom } from '@root/utils/Styles'

const Register = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>Register For IOGM - Code</Text>

            <View style={styles.boxForm}>
                <Text style={textCustom.textMedium}>Info</Text>
                <InputTextComp name='Username' type='disabled' handleInputOnChange={value => console.log(value)} />
                <InputTextComp name='Email' type='disabled' handleInputOnChange={value => console.log(value)} />
                <InputTextComp name='Name' type='disabled' handleInputOnChange={value => console.log(value)} />
            </View>

            <View style={styles.boxForm}>
                <Text style={textCustom.textMedium}>Form</Text>
                <InputSelectComp name='Select Role' option={[3, 4, 5]} handleInputOnChange={value => console.log(value)} />
                <InputTextComp name='Address' type='text' handleInputOnChange={value => console.log(value)} />
                <InputDateComp name='Date Of Birth' handleInputOnChange={value => console.log(value)} />
                <View style={{ alignSelf: 'center' }}>
                    <SubmitComp text='Submit' type='primary' handleSubmitOnPress={() => console.log('submit')} />
                </View>
            </View>
        </Layouts>
    )
}

export default Register