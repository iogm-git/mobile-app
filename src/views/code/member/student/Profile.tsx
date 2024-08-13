import { SvgUri } from 'react-native-svg'
import { useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, ViewStyle } from 'react-native'

import Layouts from '../../Layouts'

import { borderDefault, flexCustom, fontCustom, size, textCustom } from '@root/utils/Styles'

import UserIcon from '@svg/member/code/user'
import CalendarIcon from '@svg/member/code/calendar'
import AddressIcon from '@svg/member/code/location'

import { RootState } from '@root/redux/store'

import LoadingComp from '@root/components/common/LoadingComp'

import { _getImage } from '@root/utils/Helper'

const Profile = () => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    const { data: user } = useSelector((state: RootState) => state.user.meData)
    const { data: member, loading } = useSelector((state: RootState) => state.code.codeMeResult)
    const { data: courses, loading: coursesLoading } = useSelector((state: RootState) => state.code.studentCoursesResult)
    const { data: certificates, loading: certificatesLoading } = useSelector((state: RootState) => state.code.studentCertificatesResult)
    const { data: stashes, loading: stashesLoading } = useSelector((state: RootState) => state.code.studentStashesResult)
    const { data: transactions, loading: transactionsLoading } = useSelector((state: RootState) => state.code.studentTransactionsResult)

    useEffect(() => {

    }, [member, courses])

    const styles = StyleSheet.create({
        image: {
            width: 175,
            height: 175,
            borderRadius: size.radiusS,
            overflow: 'hidden'
        },
        box: {
            ...flexCustom.flexRowStart as ViewStyle,
            ...borderDefault(theme).borderS,
            padding: size.s,
            backgroundColor: colors.thirdBg
        },
        key: {
            ...textCustom(theme).textLight,
            fontSize: size.xs,
            width: 100
        },
        pack: {
            ...borderDefault(theme).borderS,
            backgroundColor: colors.bg,
            paddingHorizontal: size.xxs,
            paddingVertical: size.xs / 2
        }
    })

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <Text style={textCustom(theme).textBold}>Profile</Text>
                {user && user.image && user.image.includes('.svg') ?
                    <SvgUri height={200} width='100%' uri={_getImage(user.image)} /> :
                    <Image source={{ uri: _getImage(user.image) }} style={[borderDefault(theme).borderS, { height: 200, width: 200 }]} />
                }
                {loading ? <LoadingComp type='primary' /> :
                    member &&
                    <>
                        <View style={{ rowGap: size.m }}>
                            <View style={styles.box}>
                                <UserIcon width={size.l} height={size.l} fill={colors.text} />
                                <View style={[flexCustom.flexRowStart as ViewStyle, { rowGap: size.xxs }]}>
                                    <View style={styles.pack}>
                                        <Text style={styles.key}>Username</Text>
                                        <Text style={textCustom(theme).textRegular}>{member.username}</Text>
                                    </View>
                                    <View style={styles.pack}>
                                        <Text style={styles.key}>Name</Text>
                                        <Text style={textCustom(theme).textRegular}>{member.name}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.box}>
                                <CalendarIcon width={size.l} height={size.l} fill={colors.text} />
                                <View>
                                    <View style={styles.pack}>
                                        <Text style={styles.key}>Date of birth</Text>
                                        <Text style={textCustom(theme).textRegular}>{member.dob}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.box}>
                                <AddressIcon width={size.l} height={size.l} fill={colors.text} />
                                <View>
                                    <View style={styles.pack}>
                                        <Text style={styles.key}>Address</Text>
                                        <Text style={textCustom(theme).textRegular}>{member.address}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </>
                }
                <View style={{ rowGap: size.m }}>
                    <View style={flexCustom.flexRowBetween as ViewStyle}>
                        <View style={[styles.pack, { flex: 1 }]}>
                            <Text style={[fontCustom(theme).fontMedium, { fontSize: size.m, textAlign: 'center' }]}>Courses</Text>
                            {coursesLoading ? <LoadingComp type='primary' /> :
                                <Text style={[textCustom(theme).textLight, { textAlign: 'center' }]}>
                                    {courses ? (courses.data && courses.data.length > 0 ? courses.data.length : '0') : '0'}
                                </Text>
                            }
                        </View>
                        <View style={[styles.pack, { flex: 1 }]}>
                            <Text style={[fontCustom(theme).fontMedium, { fontSize: size.m, textAlign: 'center' }]}>Certificates</Text>
                            {certificatesLoading ? <LoadingComp type='primary' /> :
                                <Text style={[textCustom(theme).textLight, { textAlign: 'center' }]}>
                                    {certificates ? (certificates.data && certificates.data.length > 0 ? certificates.data.length : '0') : '0'}
                                </Text>
                            }
                        </View>
                    </View>
                    <View style={flexCustom.flexRowBetween as ViewStyle}>
                        <View style={[styles.pack, { flex: 1 }]}>
                            <Text style={[fontCustom(theme).fontMedium, { fontSize: size.m, textAlign: 'center' }]}>Stashes</Text>
                            {stashesLoading ? <LoadingComp type='primary' /> :
                                <Text style={[textCustom(theme).textLight, { textAlign: 'center' }]}>
                                    {stashes ? (stashes.data && stashes.data.length > 0 ? stashes.data.length : '0') : '0'}
                                </Text>
                            }
                        </View>
                        <View style={[styles.pack, { flex: 1 }]}>
                            <Text style={[fontCustom(theme).fontMedium, { fontSize: size.m, textAlign: 'center' }]}>Transactions</Text>
                            {transactionsLoading ? <LoadingComp type='primary' /> :
                                <Text style={[textCustom(theme).textLight, { textAlign: 'center' }]}>
                                    {transactions ? (transactions.data && transactions.data.length > 0 ? transactions.data.length : '0') : '0'}
                                </Text>
                            }
                        </View>
                    </View>
                </View>
            </View>


        </Layouts>
    )
}

export default Profile