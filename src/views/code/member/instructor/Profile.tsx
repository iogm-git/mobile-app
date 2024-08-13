import React from 'react'
import { SvgUri } from 'react-native-svg'
import { useSelector } from 'react-redux'
import { View, Text, Image, StyleSheet, ViewStyle } from 'react-native'

import Layouts from '../../Layouts'

import { _getImage } from '@root/utils/Helper'
import { borderDefault, flexCustom, size, textCustom } from '@root/utils/Styles'

import UserIcon from '@svg/member/code/user'
import CalendarIcon from '@svg/member/code/calendar'
import AddressIcon from '@svg/member/code/location'

import { RootState } from '@root/redux/store'

import LoadingComp from '@root/components/common/LoadingComp'
import BadgeComp from '@root/components/common/alert/BadgeComp'

const Profile = () => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    const { data: user } = useSelector((state: RootState) => state.user.meData)
    const { data: member, loading: memberLoading } = useSelector((state: RootState) => state.code.codeMeResult)
    const { data: questions, loading: questionsLoading } = useSelector((state: RootState) => state.code.instructorQuestionsResult)
    const { data: courseReviews, loading: courseReviewsLoading } = useSelector((state: RootState) => state.code.instructorCourseReviewsResult)
    const { data: earnings, loading: earningsLoading } = useSelector((state: RootState) => state.code.instructorEarningsResult)

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
            backgroundColor: colors.thirdBg,
            padding: size.s,
        },
        pack: {
            ...borderDefault(theme).borderS,
            flex: 1,
            padding: size.s,
            backgroundColor: colors.secondBg
        },
        key: {
            ...flexCustom.flexRowStart as ViewStyle,
            width: 70
        }
    })

    return (
        <Layouts>
            <Text style={textCustom(theme).textBold}>Profile</Text>
            {user && user.image && user.image.includes('.svg') ?
                <SvgUri height={200} width='100%' uri={_getImage(user.image)} /> :
                <Image source={{ uri: _getImage(user.image) }} style={[borderDefault(theme).borderS, { height: 200, width: 200 }]} />
            }
            {memberLoading ? <LoadingComp type='primary' /> : member &&
                <View style={{ rowGap: size.m }}>
                    <View style={styles.box}>
                        <UserIcon width={size.x} height={size.x} fill={colors.text} />
                        <View style={styles.pack}>
                            <View style={flexCustom.flexRowStart as ViewStyle}>
                                <Text style={styles.key}>Username</Text>
                                <Text style={textCustom(theme).textRegular}>: {member.username}</Text>
                            </View>
                            <View style={flexCustom.flexRowStart as ViewStyle}>
                                <Text style={styles.key}>Name</Text>
                                <Text style={textCustom(theme).textRegular}>: {member.name}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <CalendarIcon width={size.x} height={size.x} fill={colors.text} />
                        <View style={styles.pack}>
                            <View style={flexCustom.flexRowStart as ViewStyle}>
                                <Text style={styles.key}>Date of birth</Text>
                                <Text style={textCustom(theme).textRegular}>: {member.dob}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <AddressIcon width={size.x} height={size.x} fill={colors.text} />
                        <View style={styles.pack}>
                            <View style={flexCustom.flexRowStart as ViewStyle}>
                                <Text style={styles.key}>Address</Text>
                                <Text style={textCustom(theme).textRegular}>: {member.address}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            }

            <View style={{ rowGap: size.m }}>
                <View style={flexCustom.flexRowStart as ViewStyle}>
                    <View style={styles.pack}>
                        <Text style={textCustom(theme).textMedium}>Questions</Text>
                        {questionsLoading ? <LoadingComp type='primary' /> : !questions ? <BadgeComp text='No Result' type='warning' /> :
                            <Text style={textCustom(theme).textLight}>{questions.questions && questions.questions.length > 0 ? questions.questions.length : '0'}</Text>
                        }
                    </View>
                    <View style={styles.pack}>
                        <Text style={textCustom(theme).textMedium}>Earnings</Text>
                        {earningsLoading ? <LoadingComp type='primary' /> : !earnings ? <BadgeComp text='No Result' type='warning' /> :
                            <Text style={textCustom(theme).textLight}>{earnings.earnings && earnings.earnings.length > 0 ? earnings.earnings.length : '0'}</Text>
                        }
                    </View>
                </View>
                <View style={styles.pack}>
                    <Text style={textCustom(theme).textMedium}>Course Reviews</Text>
                    {courseReviewsLoading ? <LoadingComp type='primary' /> : !courseReviews ? <BadgeComp text='No Result' type='warning' /> :
                        <Text style={textCustom(theme).textLight}>{courseReviews && courseReviews.data.length > 0 ? courseReviews.data.length : '0'}</Text>
                    }
                </View>
            </View>

        </Layouts>
    )
}

export default Profile