import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'

import ProfileIcon from '@svg/member/code/navigation/profile'
import CoursesIcon from '@svg/member/code/navigation/courses'
import SettingIcon from '@svg/member/code/navigation/setting'
import DiscussionForumsIcon from '@svg/member/code/navigation/discussion-forums'
import LogoutIcon from '@svg/member/code/navigation/logout'
import ReviewsIcon from '@svg/member/code/navigation/reviews'

import QuestionsIcon from '@svg/member/code/navigation/questions'
import EarningsIcon from '@svg/member/code/navigation/earnings'

import AnswersIcon from '@svg/member/code/navigation/answers'
import CertificatesIcon from '@svg/member/code/navigation/certificates'
import TransactionsIcon from '@svg/member/code/navigation/transactions'
import StashesIcon from '@svg/member/code/navigation/stashes'

import { flexCustom, fontCustom, root } from '@root/utils/Styles'
import { useNavigation } from '@react-navigation/native'

const NavigationComp = () => {
    const navigation = useNavigation()
    const [member, setMember] = useState('instructor')

    return (
        <View style={{
            borderTopWidth: 1,
            borderTopColor: root.borderColor,
            paddingVertical: root.sizeM,
        }}>
            <View style={flexCustom.flexRowStart}>
                <TouchableOpacity onPress={() => navigation.navigate(`code-member-${member}-Profile`)} style={styles.button}>
                    <ProfileIcon width={23} height={23} fill={root.textColor} />
                    <Text style={styles.text}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(`code-member-${member}-Courses`)} style={styles.button}>
                    <CoursesIcon width={23} height={23} fill={root.textColor} />
                    <Text style={styles.text}>Courses</Text>
                </TouchableOpacity>
                {member === 'instructor' ?
                    <TouchableOpacity onPress={() => navigation.navigate(`code-member-${member}-Questions`)} style={styles.button}>
                        <QuestionsIcon width={23} height={23} fill={root.textColor} />
                        <Text style={styles.text}>Questions</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => navigation.navigate(`code-member-${member}-Reviews`)} style={styles.button}>
                        <ReviewsIcon width={23} height={23} fill={root.textColor} />
                        <Text style={styles.text}>Reviews</Text>
                    </TouchableOpacity>
                }
            </View>
            <View style={flexCustom.flexRowStart}>
                {member === `instructor` ?
                    <>
                        <TouchableOpacity onPress={() => navigation.navigate(`code-member-${member}-Reviews`)} style={styles.button}>
                            <ReviewsIcon width={23} height={23} fill={root.textColor} />
                            <Text style={styles.text}>Reviews</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate(`code-member-${member}-Earnings`)} style={styles.button}>
                            <EarningsIcon width={23} height={23} fill={root.textColor} />
                            <Text style={styles.text}>Earnings</Text>
                        </TouchableOpacity>
                    </>
                    :
                    <>
                        <TouchableOpacity onPress={() => navigation.navigate(`code-member-${member}-Transactions`)} style={styles.button}>
                            <TransactionsIcon width={23} height={23} fill={root.textColor} />
                            <Text style={styles.text}>Transactions</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate(`code-member-${member}-Answers`)} style={styles.button}>
                            <AnswersIcon width={23} height={23} fill={root.textColor} />
                            <Text style={styles.text}>Answers</Text>
                        </TouchableOpacity>
                    </>
                }
            </View>
            {member === `student` &&
                <View style={flexCustom.flexRowStart}>
                    <TouchableOpacity onPress={() => navigation.navigate(`code-member-${member}-Certificates`)} style={styles.button}>
                        <CertificatesIcon width={23} height={23} fill={root.textColor} />
                        <Text style={styles.text}>Certificates</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate(`code-member-${member}-Stashes`)} style={styles.button}>
                        <StashesIcon width={23} height={23} fill={root.textColor} />
                        <Text style={styles.text}>Stashes</Text>
                    </TouchableOpacity>
                </View>
            }
            <View style={flexCustom.flexRowStart}>
                <TouchableOpacity onPress={() => navigation.navigate(`code-member-general-DiscussionForums`)} style={styles.button}>
                    <DiscussionForumsIcon width={23} height={23} fill={root.textColor} />
                    <Text style={styles.text}>Forums</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(`code-member-general-Setting`)} style={styles.button}>
                    <SettingIcon width={23} height={23} fill={root.textColor} />
                    <Text style={styles.text}>Setting</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <LogoutIcon width={23} height={23} fill={root.textColor} />
                    <Text style={styles.text}>Logout</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: root.sizeXxs,
    },
    text: {
        ...fontCustom.fontMedium,
        fontSize: root.sizeM,
    }
})

export default NavigationComp