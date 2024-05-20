import React from 'react'
import Layouts from '../Layouts'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { borderDefault, flexCustom, root, textCustom } from '@root/utils/Styles'

const Transactions = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>Transactions</Text>
            <TouchableOpacity style={{
                paddingHorizontal: root.sizeM,
                paddingVertical: root.sizeXxs,
                borderWidth: 1.5,
                borderColor: root.blueColor,
                borderRadius: root.radiusS
            }}>
                <Text style={[styles.textMedium, {
                    textAlign: 'center',
                    color: root.blueColor,
                }]}>Download Transactions</Text>
            </TouchableOpacity>
            <View style={styles.card}>
                <View style={flexCustom.flexRowBetween}>
                    <Text style={textCustom.textLight}>1</Text>
                    <Text style={textCustom.textLight}>29 Apr 2024</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.textRegular}>Web</Text>
                    <View style={[flexCustom.flexRowBetween, styles.packBorder]}>
                        <Text style={styles.textMedium}>w031</Text>
                        <Text style={styles.textMedium}>car</Text>
                        <Text style={styles.textMedium}>app_a</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <Text style={styles.textRegular}>Amount and Status</Text>
                    <View style={[flexCustom.flexRowBetween, styles.packBorder]}>
                        <Text style={styles.textRegular}>50.000</Text>
                        <Text style={styles.textRegular}>unpaid</Text>
                    </View>
                </View>
            </View>
            <View style={styles.card}>
                <View style={flexCustom.flexRowBetween}>
                    <Text style={textCustom.textLight}>1</Text>
                    <Text style={textCustom.textLight}>29 Apr 2024</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.textRegular}>Web</Text>
                    <View style={[flexCustom.flexRowBetween, styles.packBorder]}>
                        <Text style={styles.textMedium}>w031</Text>
                        <Text style={styles.textMedium}>car</Text>
                        <Text style={styles.textMedium}>app_a</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <Text style={styles.textRegular}>Amount and Status</Text>
                    <View style={[flexCustom.flexRowBetween, styles.packBorder]}>
                        <Text style={styles.textRegular}>50.000</Text>
                        <Text style={styles.textRegular}>unpaid</Text>
                    </View>
                </View>
            </View>
        </Layouts>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: root.sizeM,
        backgroundColor: root.thirdBgColor,
        borderRadius: root.radiusS,
        rowGap: root.sizeXxs,
    },
    box: {
        padding: root.sizeS,
        backgroundColor: root.secondBgColor,
        borderRadius: root.radiusS
    },
    packBorder: {
        ...borderDefault.borderS,
        paddingVertical: root.sizeXxs,
        paddingHorizontal: root.sizeS,
        backgroundColor: root.bgColor
    },
    textRegular: {
        flex: 1,
        textAlign: 'center',
        ...textCustom.textRegular
    },
    textMedium: {
        ...textCustom.textMedium,
        fontSize: root.sizeM
    }
})

export default Transactions