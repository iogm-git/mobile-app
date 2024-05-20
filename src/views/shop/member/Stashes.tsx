import React from 'react'
import Layouts from '../Layouts'
import WebCardComp from '@root/components/specific/shop/WebCardComp'
import { Text, View } from 'react-native'
import { root, textCustom } from '@root/utils/Styles'
import PaginationComp from '@root/components/common/PaginationComp'

const Stashes = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>Stashes</Text>
            <View style={{
                rowGap: root.sizeM
            }}>
                <WebCardComp picture='sport-app_a.webp' />
                <WebCardComp picture='blog-app_a.webp' />
                <WebCardComp picture='car-app_a.webp' />
                <PaginationComp />
            </View>
        </Layouts>
    )
}

export default Stashes