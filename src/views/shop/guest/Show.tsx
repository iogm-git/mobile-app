import React from 'react'
import Layouts from '../Layouts'
import ImgCardComp from '@root/components/specific/shop/ImgCardComp'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { flexCustom, fontCustom, fontFamily, root, textCustom } from '@root/utils/Styles'

const Show = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>Sport</Text>
            <ImgCardComp picture='sport-app_a.webp' />
            <View style={flexCustom.flexRowCenter}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        See Another
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Demo
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Buy
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.detailsBox}>
                <Text style={textCustom.textMedium}>Description</Text>
                <View style={styles.textBox}>
                    <View style={styles.detailPack}>
                        <Text style={styles.detailKey}>Id</Text>
                        <Text style={textCustom.textRegular}>: 312</Text>
                    </View>
                    <View style={styles.detailPack}>
                        <Text style={styles.detailKey}>Category</Text>
                        <Text style={textCustom.textRegular}>: Sport</Text>
                    </View>
                    <View style={styles.detailPack}>
                        <Text style={styles.detailKey}>Type</Text>
                        <Text style={textCustom.textRegular}>: App_a</Text>
                    </View>
                    <View style={styles.detailPack}>
                        <Text style={styles.detailKey}>Price</Text>
                        <Text style={textCustom.textRegular}>: Rp.50.000,00</Text>
                    </View>
                </View>
            </View>
            <View style={styles.detailsBox}>
                <Text style={textCustom.textMedium}>What will you get?</Text>
                <View style={{ flexDirection: 'row', columnGap: root.radiusL }}>
                    <View style={styles.textBox}>
                        <Text style={[styles.detailKey, { textAlign: 'center' }]}>Assets</Text>
                        <View>
                            <Text style={styles.listText}>• Image</Text>
                            <Text style={styles.listText}>• Data</Text>
                            <Text style={styles.listText}>• Style</Text>
                            <Text style={styles.listText}>• Font</Text>
                        </View>
                    </View>
                    <View style={styles.textBox}>
                        <Text style={[styles.detailKey, { textAlign: 'center' }]}>Build</Text>
                        <View>
                            <Text style={styles.listText}>• Html</Text>
                            <Text style={styles.listText}>• Css</Text>
                            <Text style={styles.listText}>• Javascript</Text>
                            <Text style={styles.listText}>• PHP</Text>
                            <Text style={styles.listText}>• Svg</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.detailsBox}>
                <Text style={textCustom.textMedium}>For who buy this?</Text>
                <View style={styles.textBox}>
                    <Text style={textCustom.textRegular}>For those of you who want to buy or need a landing page UI template, please click the buy button on this page. or if you already have a UI design, you can send the file to my email address.</Text>
                </View>
            </View>
        </Layouts>
    )
}

export default Show

const styles = StyleSheet.create({
    button: {
        width: 150,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 99,
        borderWidth: 1,
        borderColor: root.blueColor
    },
    buttonText: {
        fontFamily: fontFamily.medium,
        fontSize: root.sizeM,
        color: root.blueColor
    },
    detailsBox: {
        rowGap: root.sizeS,
        backgroundColor: root.thirdBgColor,
        padding: root.sizeM,
        borderRadius: root.radiusS,
    },
    detailPack: {
        flexDirection: 'row',
        columnGap: root.sizeXs
    },
    detailKey: {
        ...fontCustom.fontMedium,
        fontSize: root.sizeM,
        flexBasis: 80
    },
    textBox: {
        backgroundColor: root.secondBgColor,
        padding: root.sizeS,
        borderRadius: root.radiusS,
        flex: 1
    },
    listText: {
        ...fontCustom.fontLight,
        fontSize: root.sizeM,
    }
})