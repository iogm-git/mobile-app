import { View, Text } from 'react-native'
import React from 'react'
import Layouts from '@root/views/code/Layouts'
import { flexCustom, root, textCustom } from '@root/utils/Styles'
import NavigateComp from '@root/components/common/button/NavigateComp'
import CardSectionLessonComp from '@root/components/specific/code/member/instructor/CardSectionLessonComp'

const Lessons = () => {

    return (
        <Layouts>
            <Text style={textCustom.textBold}>PHP Dasar</Text>
            <View style={flexCustom.flexRowStart}>
                <NavigateComp text='Back' type='warning' goBack />
                <NavigateComp text='Add new Lesson' type='primary' to='code-member-instructor-Store-Lesson' />
            </View>

            <View style={{ rowGap: root.sizeM }}>
                <CardSectionLessonComp order={1} type='lesson' />
            </View>
        </Layouts>
    )
}

export default Lessons