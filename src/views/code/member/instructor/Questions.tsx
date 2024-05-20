import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Layouts from '../../Layouts'
import { buttonDefault, flexCustom, root, textCustom } from '@root/utils/Styles'
import CardQuestions from '@root/components/specific/code/member/instructor/CardQuestions'

const Questions = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>Questions</Text>
            <View style={{ rowGap: root.sizeXxs }}>
                <Text style={textCustom.textLight}>Categories :</Text>
                <ScrollView horizontal>
                    <View style={[flexCustom.flexRowStart, { flexWrap: 'nowrap' }]}>
                        <TouchableOpacity style={[buttonDefault.buttonSmall, { borderColor: root.blueColor }]}>
                            <Text style={[textCustom.textLight, { color: root.blueColor }]}>All</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

            <View style={{ rowGap: root.sizeXxs }}>
                <Text style={textCustom.textLight}>Filter :</Text>
                <ScrollView horizontal>
                    <View style={[flexCustom.flexRowStart, { flexWrap: 'nowrap' }]}>
                        <TouchableOpacity style={buttonDefault.buttonSmall}>
                            <Text style={textCustom.textLight}>Old</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

            <CardQuestions order={1} />
        </Layouts>
    )
}

export default Questions