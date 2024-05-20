import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import { borderDefault, root, textCustom } from '@root/utils/Styles'

import ShopIcon from '@svg/common/@root/shop'
import CodeIcon from '@svg/common/@root/code'
import LinkComp from '@root/components/common/button/NavigateComp'
import Layouts from '@root/views/user/Layouts'

const Ballot = () => {
    return (
        <Layouts>
            <View>
                <Text style={textCustom.textBold}>Hello Ade Ayun,</Text>
                <Text style={textCustom.textRegular}>Please choose to visit.</Text>
            </View>
            <View style={styles.boxBallot}>
                <View style={styles.boxIcon}>
                    <ShopIcon fill={root.textColor} height={30} width={30} />
                    <Text style={textCustom.textMedium}>Shop</Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <LinkComp text='Visit' type='primary' to='shop-guest-HomeScreen' />
                </View>
            </View>
            <View style={styles.boxBallot}>
                <View style={styles.boxIcon}>
                    <CodeIcon fill={root.textColor} height={30} width={30} />
                    <Text style={textCustom.textMedium}>Code</Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <LinkComp text='Register' type='primary' to='user-member-code-Register' />
                </View>
            </View>
        </Layouts>
    )
}

export default Ballot

const styles = StyleSheet.create({
    boxBallot: {
        ...borderDefault.borderS,
        backgroundColor: root.secondBgColor,
        paddingTop: root.sizeXxxx,
        paddingHorizontal: root.sizeM,
        paddingBottom: root.sizeM,
        rowGap: root.sizeM,
    },
    boxIcon: {
        ...borderDefault.borderS,
        backgroundColor: root.bgColor,
        padding: root.sizeM,
        alignSelf: 'center',
        alignItems: 'center',
        rowGap: root.sizeS,
    }
})