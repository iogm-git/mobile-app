import { SvgUri } from 'react-native-svg'
import { useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'

import Layouts from '../Layouts'

import LoadingComp from '@root/components/common/LoadingComp'

import VerifiedIcon from '@svg/member/shop/verified'

import { RootState } from '@root/redux/store'

import { UserTabsStackParamList } from '@root/utils/Navigation'
import { _formatCurrency, _getImage } from '@root/utils/Helper'
import { borderDefault, buttonDefault, color, flexCustom, fontCustom, size, textCustom } from '@root/utils/Styles'

const Profile = () => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    const navigation = useNavigation<NavigationProp<UserTabsStackParamList>>()
    const { data: member, loading: memberLoading } = useSelector((state: RootState) => state.user.meData)
    const { data: stashes, loading: stashesLoading } = useSelector((state: RootState) => state.shop.getStashResult)
    const { data: transactionLatestUnpaid, loading: transactionLatestUnpaidLoading } = useSelector((state: RootState) => state.shop.transactionLatestUnpaidResult)

    useEffect(() => {

    }, [member, stashes, transactionLatestUnpaid])

    const styles = StyleSheet.create({
        image: {
            width: 175,
            height: 175,
            borderRadius: size.radiusS,
            overflow: 'hidden'
        },
        box: {
            ...borderDefault(theme).borderS,
            padding: size.m,
        },
        key: {
            ...fontCustom(theme).fontMedium,
            fontSize: size.m,
        }
    })

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <Text style={textCustom(theme).textBold}>Profile</Text>
                {memberLoading ? <LoadingComp type='primary' /> :
                    <>
                        {member.image.includes('svg') ?
                            <SvgUri height={200} width='100%' uri={_getImage(member.image)} />
                            : <Image source={{ uri: _getImage(member.image) }} style={styles.image} />}
                        <View style={flexCustom.flexRowStart as ViewStyle}>
                            <Text style={textCustom(theme).textMedium}>Welcome,</Text>
                            <Text style={textCustom(theme).textMedium}>{member.name}</Text>
                            <View style={{
                                alignSelf: 'flex-start'
                            }}>
                                <VerifiedIcon fill={color.blue} width={size.m} height={size.m} />
                            </View>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.key}>Username</Text>
                            <Text style={[fontCustom(theme).fontLight, { color: colors.text }]}>{member.username}</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.key}>Email</Text>
                            {member.email === null ? <>
                                <Text style={[textCustom(theme).textLight, { color: color.red }]}>You need to verify your email in order to make a transaction</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Member', { screen: 'Setting' })}
                                    style={[buttonDefault(theme).buttonSmall as ViewStyle, { borderColor: color.blue, width: 100, marginTop: size.xxs }]}>
                                    <Text style={[textCustom(theme).textLight, { color: color.blue }]}>Verify Now</Text>
                                </TouchableOpacity>
                            </>
                                : <Text style={[fontCustom(theme).fontLight, { color: colors.text }]}>{member.email}</Text>}
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.key}>Name</Text>
                            <Text style={[fontCustom(theme).fontLight, { color: colors.text }]}>{member.name}</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.key}>Stashes</Text>
                            {stashesLoading ? <LoadingComp type='primary' /> :
                                stashes ?
                                    <Text style={[fontCustom(theme).fontLight, { color: colors.text }]}>{stashes.data.length}</Text>
                                    : <Text style={[fontCustom(theme).fontLight, { color: colors.text }]}>0</Text>
                            }

                        </View>
                        <View style={styles.box}>
                            <Text style={styles.key}>Last Transaction Unpaid</Text>
                            {transactionLatestUnpaidLoading ? <LoadingComp type='primary' /> :
                                transactionLatestUnpaid ? <Text style={[fontCustom(theme).fontLight, { color: colors.text }]}>{transactionLatestUnpaid.web.id} | {_formatCurrency(transactionLatestUnpaid.web.price)} | {transactionLatestUnpaid.date}</Text> :
                                    <Text style={[textCustom(theme).textLight, { color: color.red }]}>You have not made any transactions</Text>}
                        </View>
                    </>
                }
            </View>
        </Layouts>
    )
}

export default Profile