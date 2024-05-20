import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Layouts from '../../Layouts'
import { borderDefault, fontCustom, root, textCustom } from '@root/utils/Styles'
import CardComp from '@root/components/specific/code/member/card/CardComp'

const Reviews = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>Reviews</Text>
            <CardComp order={1} additional={<Text style={fontCustom.fontLight}>23 Mar 2024</Text>}>
                <Text style={[fontCustom.fontMedium, styles.text]}>student_one</Text>
                <Text style={[fontCustom.fontBold, styles.text]}>PHP</Text>
                <Text style={[fontCustom.fontRegular, borderDefault.borderS, styles.text, { padding: root.sizeXs }]}>student_one</Text>
                <Text style={[fontCustom.fontBold, styles.text, { color: root.orangeColor }]}>★☆</Text>
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