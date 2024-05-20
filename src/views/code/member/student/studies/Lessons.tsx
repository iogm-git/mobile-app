import { View, Text } from 'react-native'
import React from 'react'
import Layouts from '@root/views/code/Layouts'
import { textCustom } from '@root/utils/Styles'
import PaginationComp from '@root/components/common/PaginationComp'
import NavigateComp from '@root/components/common/button/NavigateComp'

const Lessons = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>PHP Dasar</Text>
            <NavigateComp text='Back' type='warning' goBack />
            <Text style={textCustom.textLight}>The finish button will appear on the last page.</Text>

            <PaginationComp />
        </Layouts>
    )
}

export default Lessons