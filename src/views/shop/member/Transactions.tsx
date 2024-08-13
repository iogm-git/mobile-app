import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'

import Layouts from '../Layouts'

import { borderDefault, color, flexCustom, size, textCustom } from '@root/utils/Styles'

import { RootState } from '@root/redux/store'
import { downloadTransactionsActions, transactionInformationActions } from '@root/redux/shop/actions/member'

import BadgeComp from '@root/components/common/alert/BadgeComp'
import LoadingComp from '@root/components/common/LoadingComp'
import NavigateComp from '@root/components/common/button/NavigateComp'
import PaginationComp from '@root/components/common/PaginationComp'
import SubmitComp from '@root/components/common/button/SubmitComp'

const Transactions = () => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    const dispatch = useDispatch()
    const { data, loading } = useSelector((state: RootState) => state.shop.transactionInformationResult)
    const { loading: loadingDownload } = useSelector((state: RootState) => state.shop.downloadTransactionsResult)

    useEffect(() => {

    }, [data])

    const styles = StyleSheet.create({
        card: {
            ...borderDefault(theme).borderS,
            padding: size.m,
            borderRadius: size.radiusS,
            rowGap: size.xxs,
            backgroundColor: colors.secondBg
        },
        box: {
            ...borderDefault(theme).borderS,
            rowGap: size.m,
            padding: size.s,
            borderRadius: size.radiusS,
            backgroundColor: colors.thirdBg
        },
        pack: {
            ...flexCustom.flexRowBetween as ViewStyle,
        },
        frag: {
            ...borderDefault(theme).borderS,
            borderRadius: size.radiusS,
            padding: size.s,
            backgroundColor: colors.secondBg,
            flex: 1,
        },
        fragTitle: {
            ...textCustom(theme).textLight,
            ...borderDefault(theme).borderS,
            backgroundColor: colors.thirdBg,
            paddingVertical: size.xs / 2,
            width: 75,
            textAlign: 'center',
            alignSelf: 'center',
            marginBottom: size.xxs
        },
        textRegular: {
            ...textCustom(theme).textRegular,
            textAlign: 'center',
            textTransform: 'capitalize'
        },
        textMedium: {
            fontSize: size.m
        }
    })

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <Text style={textCustom(theme).textBold}>Transactions</Text>
                {loadingDownload ? <LoadingComp type='primary' /> :
                    <SubmitComp text='Download Transactions' type='primary' onPress={() => dispatch(downloadTransactionsActions.init())} />
                }

                {loading ? <LoadingComp type='primary' /> : data && data.data && data.data.length > 0 ?
                    <>
                        {data.data.map((value: any, index: number) => (
                            <View key={index} style={styles.card}>
                                <View style={flexCustom.flexRowBetween as ViewStyle}>
                                    <Text style={textCustom(theme).textLight}>{index + 1}</Text>
                                    <Text style={textCustom(theme).textLight}>{value.date}</Text>
                                </View>
                                <View style={styles.box}>
                                    <Text style={styles.textRegular}>Web</Text>
                                    <View style={styles.pack}>
                                        <View style={[styles.frag]}>
                                            <Text style={styles.fragTitle}>Id</Text>
                                            <Text style={styles.textRegular}>{value.id}</Text>
                                        </View>
                                        <View style={[styles.frag]}>
                                            <Text style={styles.fragTitle}>Type</Text>
                                            <Text style={styles.textRegular}>{value.type}</Text>
                                        </View>
                                    </View>
                                    <View style={[styles.frag]}>
                                        <Text style={[styles.fragTitle, { width: 100 }]}>Category</Text>
                                        <Text style={styles.textRegular}>{value.category}</Text>
                                    </View>
                                </View>
                                <View style={styles.box}>
                                    <View style={styles.pack}>
                                        <View style={[styles.frag]}>
                                            <Text style={styles.fragTitle}>Amount</Text>
                                            <Text style={styles.textRegular}>Rp. {value.amount}</Text>
                                        </View>
                                        <View style={[styles.frag]}>
                                            <Text style={styles.fragTitle}>Status</Text>
                                            <Text style={[styles.textRegular, { textTransform: 'capitalize', color: value.status === 'unpaid' ? color.red : color.green }]}>{value.status}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ))}
                        {data.links && <PaginationComp data={data.links} onPageChange={value => dispatch(transactionInformationActions.init(value))} />}
                    </> :
                    <>
                        <BadgeComp text='No Transactions' type='warning' />
                        <NavigateComp text='See Website' type='primary' to='ShopHomeScreen' />
                    </>
                }
            </View>
        </Layouts >
    )
}

export default Transactions