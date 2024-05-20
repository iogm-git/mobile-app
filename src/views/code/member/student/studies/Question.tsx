import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Layouts from '@root/views/code/Layouts'
import { borderDefault, fontCustom, root, textCustom } from '@root/utils/Styles'
import SubmitComp from '@root/components/common/button/SubmitComp'
import NavigateComp from '@root/components/common/button/NavigateComp'

const Question = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>Ask : PHP</Text>
            <View>
                <Text style={[fontCustom.fontBold, { fontSize: root.sizeM }]}>Title</Text>
                <TextInput readOnly defaultValue='php' style={[borderDefault.borderS, textCustom.textRegular]} />
            </View>
            <View>
                <Text style={[fontCustom.fontBold, { fontSize: root.sizeM }]}>My Question</Text>
                <TextInput
                    style={[textCustom.textRegular, borderDefault.borderS]}
                    multiline
                    numberOfLines={4}
                />
            </View>
            <SubmitComp text='Submit' type='primary' handleSubmitOnPress={() => console.log('asd')} />
            <NavigateComp text='Cancel' type='warning' goBack />
        </Layouts>
    )
}

export default Question