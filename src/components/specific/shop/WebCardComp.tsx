import { useSelector } from 'react-redux';
import React, { PropsWithChildren } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Linking, TouchableOpacity, View, ViewStyle } from 'react-native';

import { APP_BASE_URL } from '@env'

import { flexCustom, size } from '@root/utils/Styles';
import { ShopTabsStackParamList } from '@root/utils/Navigation';

import AddWebComp from './member/AddWebComp';
import ImgCardComp from './ImgCardComp';

import ShowIcon from '@svg/common/shop/view';
import DemoIcon from '@svg/common/shop/demo';

import DeleteWebComp from './member/DeleteWebComp';

import { RootState } from '@root/redux/store';

interface Data {
    id: string;
    web_category?: {
        name: string;
    };
    web_type?: {
        name: string;
    };
}

type WebCardProps = PropsWithChildren<{
    url: string
    data: Data
    stashId?: number
    midButton?: string
}>

const WebCardComp = ({ url, data, stashId, midButton = 'store' }: WebCardProps) => {
    const { colors } = useSelector((state: RootState) => state.theme)

    const navigation = useNavigation<NavigationProp<ShopTabsStackParamList>>();

    const { id, web_category, web_type } = data;
    const category = web_category?.name ?? '';
    const type = web_type?.name ?? '';

    return (
        <View style={{ rowGap: size.s }}>
            {category && type && <ImgCardComp picture={`${category}-${type}.webp`} />}
            <View style={flexCustom.flexRowCenter as ViewStyle}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Show', { category, type })
                }}>
                    <ShowIcon width={size.x} height={size.x} fill={colors.link} />
                </TouchableOpacity>
                {midButton === 'store' ?
                    <AddWebComp webId={id} /> :
                    <DeleteWebComp id={stashId} />
                }
                <TouchableOpacity onPress={async () => {
                    await Linking.openURL(`${APP_BASE_URL}/blog/demo?category=${encodeURIComponent(category)}&type=${encodeURIComponent(type)}&url=${url}`);
                }}>
                    <DemoIcon width={size.x} height={size.x} fill={colors.link} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WebCardComp;
