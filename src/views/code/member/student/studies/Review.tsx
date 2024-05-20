import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Layouts from '@root/views/code/Layouts'
import { borderDefault, fontCustom, root, textCustom } from '@root/utils/Styles'
import SubmitComp from '@root/components/common/button/SubmitComp'
import NavigateComp from '@root/components/common/button/NavigateComp'

const Review = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>Review Course : PHP</Text>
            <View>
                <Text style={[fontCustom.fontBold, { fontSize: root.sizeM }]}>Title</Text>
                <TextInput readOnly defaultValue='php' style={[borderDefault.borderS, textCustom.textRegular]} />
            </View>
            <View>
                <Text style={[fontCustom.fontBold, { fontSize: root.sizeM }]}>My Review</Text>
                <TextInput
                    style={[textCustom.textRegular, borderDefault.borderS]}
                    multiline
                    numberOfLines={4}
                />
            </View>
            <View>
                <Text style={[fontCustom.fontBold, { fontSize: root.sizeM }]}>Rating</Text>
                <Text style={[fontCustom.fontBold, { color: root.orangeColor }]}>★☆</Text>
                <TextInput style={[borderDefault.borderS, textCustom.textRegular]} keyboardType='numeric' />
            </View>
            <SubmitComp text='Submit' type='primary' handleSubmitOnPress={() => console.log('asd')} />
            <NavigateComp text='Cancel' type='warning' goBack />
        </Layouts>
    )
}

export default Review