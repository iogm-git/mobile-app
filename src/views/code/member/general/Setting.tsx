import { View, Text } from 'react-native'
import React from 'react'
import Layouts from '../../Layouts'
import { textCustom } from '@root/utils/Styles'
import InputDateComp from '@root/components/common/form/InputDateComp'
import InputTextComp from '@root/components/common/form/InputTextComp'
import SubmitComp from '@root/components/common/button/SubmitComp'
import NavigateComp from '@root/components/common/button/NavigateComp'

const Setting = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>Setting</Text>
            <InputDateComp name='Date of birth' handleInputOnChange={value => console.log(value)} />
            <InputTextComp name='Address' handleInputOnChange={value => console.log(value)} />
            <SubmitComp text='Submit' type='primary' handleSubmitOnPress={() => console.log('asd')} />
            <NavigateComp text='Advance Setting' type='primary' to='user-member-Setting' />
        </Layouts>
    )
}

export default Setting