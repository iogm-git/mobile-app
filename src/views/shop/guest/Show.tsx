import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { Alert, Linking, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'

import { APP_BASE_URL } from '@env'

import Layouts from '../Layouts'

import LoadingComp from '@root/components/common/LoadingComp'
import ImgCardComp from '@root/components/specific/shop/ImgCardComp'
import NavigateComp from '@root/components/common/button/NavigateComp'

import { RootState } from '@root/redux/store'

import { _formatCurrency } from '@root/utils/Helper'
import { ShopTabsStackParamList, UserTabsStackParamList } from '@root/utils/Navigation'
import { borderDefault, color, flexCustom, fontCustom, fontFamily, size, textCustom } from '@root/utils/Styles'

import { webShowActions } from '@root/redux/shop/actions/guest'
import { transactionActions, transactionInformationActions } from '@root/redux/shop/actions/member'
import ModalComp from '@root/components/common/alert/ModalComp'
import BadgeComp from '@root/components/common/alert/BadgeComp'
import HandleComp from '@root/components/common/button/HandleComp'

type RouteParams = {
    category: string;
    type: string;
};

const Show = () => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    const navigation = useNavigation<NavigationProp<UserTabsStackParamList> | NavigationProp<ShopTabsStackParamList>>()
    const dispatch = useDispatch()

    const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
    const { category, type } = route.params

    const { data: member } = useSelector((state: RootState) => state.user.meData)
    const { data: web, loading } = useSelector((state: RootState) => state.shop.webShowResult)
    const { data: success, loading: transactionStoreLoading } = useSelector((state: RootState) => state.shop.transactionResult)

    useEffect(() => {
        if (category && type) {
            dispatch(webShowActions.init(category, type))
        }

    }, [])

    useEffect(() => {

    }, [web, member, success])

    const handleAfterStoreTransactions = () => {
        dispatch(transactionActions.success(null))
        dispatch(transactionActions.failure(null))
        dispatch(transactionInformationActions.init())
    }

    const styles = StyleSheet.create({
        button: {
            width: 150,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 99,
            borderWidth: 1,
            borderColor: color.blue
        },
        buttonText: {
            fontFamily: fontFamily.medium,
            fontSize: size.m,
            color: color.blue
        },
        detailsBox: {
            ...borderDefault(theme).borderS,
            rowGap: size.s,
            padding: size.m,
            backgroundColor: colors.secondBg
        },
        detailPack: {
            flexDirection: 'row',
            columnGap: size.xs
        },
        detailKey: {
            ...fontCustom(theme).fontMedium,
            fontSize: size.m,
            flexBasis: 80
        },
        textBox: {
            ...borderDefault(theme).borderS,
            padding: size.s,
            flex: 1,
            backgroundColor: colors.thirdBg
        },
        listText: {
            ...fontCustom(theme).fontLight,
            fontSize: size.m,
        }
    })

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                {success && <ModalComp title='Transactions Status' onClose={handleAfterStoreTransactions}>
                    <View style={{ rowGap: size.m }}>
                        <BadgeComp text={success} type={success.includes('You have purchased this web') ? 'warning' : 'success'} />
                        <View style={flexCustom.flexRowBetween as ViewStyle}>
                            <HandleComp text='See My Transactions' type='success' onPress={() => {
                                handleAfterStoreTransactions();
                                (navigation as NavigationProp<ShopTabsStackParamList>).navigate('Member', { screen: 'Transactions' })
                            }} />
                            <HandleComp text='Close' type='primary' onPress={handleAfterStoreTransactions} />
                        </View>
                    </View>
                </ModalComp>}

                <Text style={textCustom(theme).textBold}>Sport</Text>

                {web && <ImgCardComp picture={`${web.web_category.name}-${web.web_type.name}.webp`} />}

                <View style={flexCustom.flexRowBetween as ViewStyle}>
                    <TouchableOpacity style={styles.button} onPress={async () => {
                        await Linking.openURL(`${APP_BASE_URL}/blog/demo?category=${encodeURIComponent(category)}&type=${encodeURIComponent(type)}&url=android-shop-guest-Show`)
                    }}>
                        <Text style={styles.buttonText}>
                            Demo
                        </Text>
                    </TouchableOpacity>
                    {transactionStoreLoading ? <LoadingComp type='primary' /> :
                        <TouchableOpacity style={styles.button} onPress={() => {
                            member && member.email === null ?
                                Alert.alert('Email', 'You cannot make a transaction yet, please verify your email first', [
                                    { text: 'Verify Now', onPress: () => (navigation as NavigationProp<UserTabsStackParamList>).navigate('Setting') },
                                    { text: 'Later' }
                                ]) : dispatch(transactionActions.init(web && web.id))
                        }}>
                            <Text style={styles.buttonText}>
                                Buy
                            </Text>
                        </TouchableOpacity>
                    }
                </View>

                <View style={styles.detailsBox}>
                    <Text style={textCustom(theme).textMedium}>Description</Text>
                    {web &&
                        <View style={styles.textBox}>
                            <View style={styles.detailPack}>
                                <Text style={styles.detailKey}>Id</Text>
                                <Text style={textCustom(theme).textRegular}>: {web.id}</Text>
                            </View>
                            <View style={styles.detailPack}>
                                <Text style={styles.detailKey}>Category</Text>
                                <Text style={textCustom(theme).textRegular}>: {web.web_category.name}</Text>
                            </View>
                            <View style={styles.detailPack}>
                                <Text style={styles.detailKey}>Type</Text>
                                <Text style={textCustom(theme).textRegular}>: {web.web_type.name}</Text>
                            </View>
                            <View style={styles.detailPack}>
                                <Text style={styles.detailKey}>Price</Text>
                                {loading ? <LoadingComp type='primary' /> : <Text style={textCustom(theme).textRegular}>: {_formatCurrency(web && web.price)}</Text>}
                            </View>
                        </View>
                    }
                </View>

                <View style={styles.detailsBox}>
                    <Text style={textCustom(theme).textMedium}>What will you get?</Text>
                    <View style={{ flexDirection: 'row', columnGap: size.l }}>
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
                    <Text style={textCustom(theme).textMedium}>For who buy this?</Text>
                    <View style={styles.textBox}>
                        <Text style={textCustom(theme).textRegular}>For those of you who want to buy or need a landing page UI template, please click the buy button on this page. or if you already have a UI design, you can send the file to my email address.</Text>
                    </View>
                </View>
            </View>

            <NavigateComp text='See Another' type='primary' to='ShopHomeScreen' />
        </Layouts>
    )
}

export default Show