import { View, Text, TouchableOpacity } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { borderDefault, buttonDefault, flexCustom, root, textCustom } from '@root/utils/Styles'
import { useNavigation } from '@react-navigation/native'
import CardComp from '../card/CardComp'
import ElementComp from '../card/ElementComp'

type CardSectionLessonProps = PropsWithChildren<{
    type: string,
    order: number,
}>

const CardSectionLessonComp = ({ type, order }: CardSectionLessonProps) => {
    const navigation = useNavigation()
    return (
        <CardComp order={order} additional={
            <ElementComp keyword={`Order In ${type === 'section' ? 'Course' : 'Section'}`} value={order} />
        }>
            <ElementComp keyword={`${type === 'section' ? 'Section' : 'Lesson'} Title`} value={'PHP'} />
            <ElementComp keyword='created at' value={'04 May 2024 at 01:51 AM'} />
            <ElementComp keyword='updated at' value={'04 May 2024 at 01:51 AM'} />
            <View style={[borderDefault.borderS, { rowGap: 2, padding: root.sizeXxs }]}>
                <Text style={[textCustom.textLight, { textAlign: 'center', textDecorationLine: 'underline' }]}>Actions</Text>
                <View style={flexCustom.flexRowBetween}>
                    {type === 'section' &&
                        <TouchableOpacity style={[buttonDefault.buttonSmall, { borderColor: root.greenColor }]} onPress={() => navigation.navigate('code-member-instructor-Lessons')}>
                            <Text style={[textCustom.textLight, { color: root.greenColor }]}>Show</Text>
                        </TouchableOpacity>
                    }
                    <TouchableOpacity style={[buttonDefault.buttonSmall, { borderColor: root.orangeColor }]} onPress={() => navigation.navigate(`code-member-instructor-Update-${type === 'section' ? 'Section' : 'Lesson'}`)}>
                        <Text style={[textCustom.textLight, { color: root.orangeColor }]}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[buttonDefault.buttonSmall, { borderColor: root.redColor }]}>
                        <Text style={[textCustom.textLight, { color: root.redColor }]}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </CardComp>
    )
}

export default CardSectionLessonComp