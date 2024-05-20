import { TouchableOpacity, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { root, flexCustom } from '@root/utils/Styles'
import ImgCardComp from './ImgCardComp';

import ShowIcon from '@svg/common/shop/view'
import DemoIcon from '@svg/common/shop/demo'
import AddWebComp from './member/AddWebComp';
import { useNavigation } from '@react-navigation/native';

type WebCardProps = PropsWithChildren<{
    picture: string;
}>

const WebCardComp = ({ picture }: WebCardProps) => {
    const navigation = useNavigation()

    return (
        <View style={{ rowGap: root.sizeS }}>
            <ImgCardComp picture={picture} />
            <View style={flexCustom.flexRowCenter}>
                <TouchableOpacity onPress={() => navigation.navigate('shop-guest-Show')}>
                    <ShowIcon width={root.sizeX} height={root.sizeX} fill={root.linkColor} />
                </TouchableOpacity>
                <AddWebComp />
                <DemoIcon width={root.sizeX} height={root.sizeX} fill={root.linkColor} />
            </View>
        </View>
    )
}

export default WebCardComp