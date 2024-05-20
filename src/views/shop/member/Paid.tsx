import React from 'react'
import Layouts from '../Layouts'
import { Text } from 'react-native'
import { textCustom } from '@root/utils/Styles'

const Paid = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>Paid</Text>
        </Layouts>
    )
}

export default Paid