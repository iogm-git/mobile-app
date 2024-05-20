import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Layouts from '../../Layouts'
import { buttonDefault, root, textCustom } from '@root/utils/Styles'
import CardComp from '@root/components/specific/code/member/card/CardComp'
import ElementComp from '@root/components/specific/code/member/card/ElementComp'

const Certificates = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>Certificates</Text>
            <CardComp order={1} additional={
                <TouchableOpacity style={[buttonDefault.buttonSmall, { borderColor: root.greenColor }]}>
                    <Text style={[textCustom.textLight, { color: root.greenColor }]}>Download</Text>
                </TouchableOpacity>
            }>
                <ElementComp keyword='name' value={'PHP'} />
                <ElementComp keyword='instructor' value={'Ilham Rahmat Akbar'} />
                <ElementComp keyword='created at' value={'20 Mei 2024'} />
            </CardComp>
        </Layouts>
    )
}

export default Certificates