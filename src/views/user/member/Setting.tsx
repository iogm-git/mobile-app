import { Text, View } from 'react-native'
import React from 'react'
import Layouts from '@root/views/user/Layouts'
import { root, textCustom } from '@root/utils/Styles'
import InputImageComp from '@root/components/common/form/InputImageComp'
import InputTextComp from '@root/components/common/form/InputTextComp'
import SubmitComp from '@root/components/common/button/SubmitComp'
import LinkComp from '@root/components/common/button/NavigateComp'
import { styles } from './_style'

const Setting = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>Setting Profile</Text>

            <View style={[styles.boxForm, {
                backgroundColor: root.thirdBgColor
            }]}>
                <Text style={textCustom.textRegular}>You are registered as an instructor in the IOGM - Code application, if you want to set up a bank account, please click the button below</Text>
                <LinkComp text='Instructor' type='text' to='user-member-code-Instructor' />
            </View>

            <View style={styles.boxForm}>
                <Text style={textCustom.textMedium}>Update Image</Text>
                <InputImageComp name='Image' />
            </View>

            <View style={styles.boxForm}>
                <Text style={textCustom.textMedium}>Update Authentication</Text>
                <InputTextComp name='Username' handleInputOnChange={value => console.log(value)} />
                <InputTextComp name='Name' handleInputOnChange={value => console.log(value)} />
                <SubmitComp text='Update' type='primary' handleSubmitOnPress={() => console.log('asd')} />
            </View>

            <View style={styles.boxForm}>
                <Text style={textCustom.textMedium}>Change Password</Text>
                <InputTextComp name='Old Password' type='password' handleInputOnChange={value => console.log(value)} />
                <InputTextComp name='New Password' type='password' handleInputOnChange={value => console.log(value)} />
                <SubmitComp text='Update' type='primary' handleSubmitOnPress={() => console.log('asd')} />
            </View>

            <View style={styles.boxForm}>
                <Text style={textCustom.textMedium}>Verify Email</Text>
                <InputTextComp name='Email' type='email' handleInputOnChange={value => console.log(value)} />
                <SubmitComp text='Send Token' type='primary' handleSubmitOnPress={() => console.log('asd')} />
            </View>

            <View style={styles.boxForm}>
                <Text style={textCustom.textMedium}>Verify Phone Number</Text>
                <InputTextComp name='Phone Number' type='numeric' handleInputOnChange={value => console.log(value)} />
                <Text style={textCustom.textLight}>Ignore [0] in your phone number . Ex: 81272369357</Text>
                <SubmitComp text='Send Token' type='primary' handleSubmitOnPress={() => console.log('asd')} />
            </View>

            <View style={{ alignSelf: 'center' }}>
                <LinkComp text='Continue Register' to='user-member-Ballot' type='primary' />
            </View>
        </Layouts>
    )
}

export default Setting

