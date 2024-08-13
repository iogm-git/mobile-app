import React from 'react'
import { View } from 'react-native'
import { SvgUri } from 'react-native-svg'

import { size } from '@root/utils/Styles'

import TypewriterComp from '@root/components/common/TypeWritterComp'
import LoadingComp from '@root/components/common/LoadingComp'

const LoadingScreen = () => {
    return (
        <View style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center'
        }}>
            <View style={{ rowGap: size.m }}>
                <SvgUri uri={'https:/iogm.biz.id' + '/logo.svg'} style={{
                    maxHeight: 25,
                    maxWidth: 25,
                }} />
                <LoadingComp type='primary' />
                <TypewriterComp data={['Loading...']} />
            </View>
        </View>
    )
}

export default LoadingScreen