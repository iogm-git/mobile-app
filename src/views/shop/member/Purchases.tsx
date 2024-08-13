import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Alert, Text, View } from 'react-native'

import Layouts from '../Layouts'

import BadgeComp from '@root/components/common/alert/BadgeComp'
import LoadingComp from '@root/components/common/LoadingComp'
import ImgCardComp from '@root/components/specific/shop/ImgCardComp'

import { ShopTabsStackParamList } from '@root/utils/Navigation'
import { color, size, textCustom } from '@root/utils/Styles'

import PayIcon from '@svg/drawer/shop/paid'

import { RootState } from '@root/redux/store'
import HandleComp from '@root/components/common/button/HandleComp'

const Purchases = () => {
    const { theme } = useSelector((state: RootState) => state.theme)

    const navigation = useNavigation<NavigationProp<ShopTabsStackParamList>>()

    const { data, loading } = useSelector((state: RootState) => state.shop.transactionInformationResult)

    useEffect(() => {
        console.log(data);

    }, [data])

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <Text style={textCustom(theme).textBold}>Purchases</Text>
                <View style={{
                    rowGap: size.m
                }}>
                    {loading ? <LoadingComp type='primary' /> : data && data.data && data.data.length > 0 ?
                        <>
                            {data.data.map((value: any, index: number) => (
                                <View key={index} style={{
                                    rowGap: size.xs
                                }}>
                                    <ImgCardComp picture={`${value.category}-${value.type}.webp`} />
                                    <HandleComp text='Pay Now' type={value.status === 'settlement' ? 'success' : 'primary'} onPress={() => {
                                        value.status === 'settlement' ?
                                            Alert.alert('Transaction Status', 'This transaction has been paid', [{ text: 'ok' }]) :
                                            navigation.navigate('Paid', { data: value })
                                    }}>
                                        <PayIcon width={25} height={25} fill={value.status === 'settlement' ? color.green : color.blue} />
                                    </HandleComp>
                                </View>

                            ))}
                        </>
                        :
                        <BadgeComp text='There are no transactions to be paid' type='success' />
                    }
                </View>
            </View>
        </Layouts>
    )
}

export default Purchases