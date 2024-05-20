import React from 'react'
import Layouts from '../Layouts'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ImgCardComp from '@root/components/specific/shop/ImgCardComp'
import { flexCustom, fontFamily, root, textCustom } from '@root/utils/Styles'

import PayIcon from '@svg/member/shop/navigation/paid'

const Purchases = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>Purchases</Text>
            <View style={{
                rowGap: root.sizeM
            }}>
                <View style={{
                    rowGap: root.sizeXs
                }}>
                    <ImgCardComp picture='sport-app_a.webp' />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Pay Now</Text>
                        <PayIcon width={25} height={25} fill={root.greenColor} />
                    </TouchableOpacity>
                </View>
            </View>
        </Layouts>
    )
}

const styles = StyleSheet.create({
    button: {
        ...flexCustom.flexRowBetween,
        paddingHorizontal: root.sizeM,
        paddingVertical: root.sizeXxs,
        borderWidth: 1.5,
        borderColor: root.greenColor,
        borderRadius: root.radiusS,
        width: 150,
        alignSelf: 'center'
    },
    buttonText: {
        fontFamily: fontFamily.medium,
        fontSize: root.sizeM,
        color: root.greenColor,
        textAlign: 'center',
    }
})

export default Purchases