import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Layouts from '../../Layouts'
import { borderDefault, buttonDefault, flexCustom, root, textCustom } from '@root/utils/Styles'
import CardComp from '@root/components/specific/code/member/card/CardComp'
import ElementComp from '@root/components/specific/code/member/card/ElementComp'

const Answers = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>Answers</Text>

            <View style={{ rowGap: root.sizeXxs }}>
                <Text style={textCustom.textLight}>Categories :</Text>
                <ScrollView horizontal>
                    <View style={[flexCustom.flexRowStart, { flexWrap: 'nowrap' }]}>
                        <TouchableOpacity style={buttonDefault.buttonSmall}>
                            <Text style={textCustom.textLight}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={buttonDefault.buttonSmall}>
                            <Text style={textCustom.textLight}>C++</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={buttonDefault.buttonSmall}>
                            <Text style={textCustom.textLight}>Docer</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

            <View style={{ rowGap: root.sizeXxs }}>
                <Text style={textCustom.textLight}>Filter :</Text>
                <View style={flexCustom.flexRowStart}>
                    <TouchableOpacity style={buttonDefault.buttonSmall}>
                        <Text style={textCustom.textLight}>New</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={buttonDefault.buttonSmall}>
                        <Text style={textCustom.textLight}>Old</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <CardComp order={1}>
                <ElementComp keyword='course' value={'PHP'} />
                <ElementComp keyword='instructor' value={'Ilham Rahmat Akbar'} />
                <ElementComp keyword='created at' value={'04 May 2024 at 01:51 AM'} />
                <ElementComp keyword='question' value={'asd? asd'} />
                <ElementComp keyword='answer' value={'settlement'} />
            </CardComp>
        </Layouts>
    )
}

export default Answers