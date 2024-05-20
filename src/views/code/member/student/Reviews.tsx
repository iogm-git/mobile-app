import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Layouts from '../../Layouts'
import { borderDefault, buttonDefault, flexCustom, fontCustom, root, textCustom } from '@root/utils/Styles'
import { useNavigation } from '@react-navigation/native'
import CardComp from '@root/components/specific/code/member/card/CardComp'

const Reviews = () => {
    const navigation = useNavigation()

    return (
        <Layouts>
            <Text style={textCustom.textBold}>Reviews</Text>
            <CardComp order={1} additional={
                <Text style={fontCustom.fontLight}>23 Mar 2024</Text>
            }>
                <Text style={[fontCustom.fontBold, styles.text]}>PHP</Text>
                <Text style={[fontCustom.fontRegular, borderDefault.borderS, styles.text, { padding: root.sizeXs }]}>student_one</Text>
                <Text style={[fontCustom.fontBold, styles.text, { color: root.orangeColor }]}>★☆</Text>

                <View style={flexCustom.flexRowCenter}>
                    <TouchableOpacity onPress={() => navigation.navigate('code-member-student-Review')} style={[buttonDefault.buttonSmall, { borderColor: root.orangeColor }]}>
                        <Text style={[textCustom.textLight, { color: root.orangeColor }]}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[buttonDefault.buttonSmall, { borderColor: root.redColor }]}>
                        <Text style={[textCustom.textLight, { color: root.redColor }]}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </CardComp>
        </Layouts>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: root.sizeM,
        textAlign: 'center'
    }
})

export default Reviews