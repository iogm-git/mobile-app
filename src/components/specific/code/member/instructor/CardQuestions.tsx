import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import { borderDefault, buttonCustom, buttonDefault, flexCustom, fontCustom, root, textCustom } from '@root/utils/Styles'
import SubmitComp from '@root/components/common/button/SubmitComp'
import CardComp from '../card/CardComp'

type CardQuestionsProps = PropsWithChildren<{
    order: number
}>

const CardQuestions = ({ order }: CardQuestionsProps) => {
    const [editMode, setEditMode] = useState(false)

    return (
        <CardComp order={order} additional={<Text style={textCustom.textLight}>23 Mar 2024</Text>}>
            <Text style={[fontCustom.fontBold, { fontSize: root.sizeM }]}>Fathia</Text>
            <View style={[borderDefault.borderS, { backgroundColor: root.secondBgColor }]}>
                <Text style={[textCustom.textLight, { textAlign: 'center' }]}>Question</Text>
                <Text style={[textCustom.textRegular, styles.text]}>asd asd asd</Text>
            </View>
            {editMode ?
                <>
                    <View style={{ backgroundColor: root.secondBgColor, padding: root.sizeXxs }}>
                        <Text style={[fontCustom.fontMedium, { fontSize: root.sizeS, textAlign: 'center' }]}>Your Answer</Text>
                        <TextInput
                            style={[textCustom.textRegular, borderDefault.borderS, { backgroundColor: root.bgColor }]}
                            multiline
                            numberOfLines={4}
                        />
                    </View>
                    <SubmitComp text='Submit' type='primary' handleSubmitOnPress={() => console.log('asd')} />
                    <TouchableOpacity onPress={() => setEditMode(false)} style={[buttonCustom.buttonCom, borderDefault.borderS, { backgroundColor: root.bgColor, borderColor: root.orangeColor }]}>
                        <Text style={[textCustom.textLight, { color: root.orangeColor }]}>Cancel</Text>
                    </TouchableOpacity>
                </>
                :
                <View style={[borderDefault.borderS, { backgroundColor: root.secondBgColor }]}>
                    <Text style={[textCustom.textLight, { textAlign: 'center' }]}>Answer</Text>
                    <Text style={[textCustom.textRegular, styles.text]}>asd asd asd</Text>
                </View>
            }
            <View style={flexCustom.flexRowBetween}>
                {!editMode &&
                    <TouchableOpacity style={[buttonDefault.buttonSmall, { borderColor: root.greenColor, backgroundColor: root.transgreenColor }]} onPress={() => setEditMode(!editMode)}>
                        <Text style={[textCustom.textLight, { color: root.greenColor }]}>Edit</Text>
                    </TouchableOpacity>
                }
                <Text style={textCustom.textLight}>Tag: Php</Text>
            </View>
        </CardComp>
    )
}

const styles = StyleSheet.create({
    text: {
        paddingHorizontal: root.sizeXxs,
        paddingVertical: 4,
        borderRadius: root.radiusS / 2
    },
})

export default CardQuestions
