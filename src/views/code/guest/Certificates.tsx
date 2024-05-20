import { Text } from 'react-native'
import React from 'react'
import Layouts from '../Layouts'
import { textCustom } from '@root/utils/Styles'
import InputTextComp from '@root/components/common/form/InputTextComp'
import SubmitComp from '@root/components/common/button/SubmitComp'

const Certificates = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>Certificates Verification</Text>
            <InputTextComp name='Certificate Identifier / id' handleInputOnChange={value => console.log(value)} />
            <SubmitComp text='Search' type='primary' handleSubmitOnPress={() => console.log('asd')} />
        </Layouts>
    )
}

export default Certificates