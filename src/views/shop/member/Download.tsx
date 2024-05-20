import React from 'react'
import Layouts from '../Layouts'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ImgCardComp from '@root/components/specific/shop/ImgCardComp'
import { fontFamily, root, textCustom } from '@root/utils/Styles'

const Download = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>Download</Text>
            <View style={{
                rowGap: root.sizeM
            }}>
                <View style={{
                    rowGap: root.sizeXs
                }}>
                    <ImgCardComp picture='sport-app_a.webp' />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Download Web</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Layouts>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: root.sizeM,
        paddingVertical: root.sizeXxs,
        borderWidth: 1.5,
        borderColor: root.greenColor,
        borderRadius: root.radiusS
    },
    buttonText: {
        fontFamily: fontFamily.medium,
        fontSize: root.sizeM,
        color: root.greenColor,
        textAlign: 'center',
    }
})

export default Download