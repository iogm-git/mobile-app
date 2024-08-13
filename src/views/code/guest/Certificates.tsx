import { Text, View } from 'react-native'
import React from 'react'
import Layouts from '../Layouts'
import { size, textCustom } from '@root/utils/Styles'
import InputTextComp from '@root/components/common/form/InputTextComp'
import SubmitComp from '@root/components/common/button/SubmitComp'
import { useSelector } from 'react-redux'
import { RootState } from '@root/redux/store'

const Certificates = () => {
    const { theme } = useSelector((state: RootState) => state.theme)

    return (
        <Layouts>
            <View style={{
                rowGap: size.x
            }}>
                <Text style={textCustom(theme).textBold}>Certificates Verification</Text>
                <InputTextComp name='Certificate Identifier / id' handleInputOnChange={value => console.log(value)} />
                <SubmitComp text='Search' type='primary' onPress={() => console.log('asd')} />
            </View>
        </Layouts>
    )
}

export default Certificates