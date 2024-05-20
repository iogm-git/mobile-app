import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Layouts from '../Layouts'

import UserCodeIcon from '@svg/common/code/user'
import StudentCodeIcon from '@svg/common/code/student'
import MemberCodeIcon from '@svg/common/code/member'

import ScrollIcon from '@svg/common/code/scroll'
import ChecklistIcon from '@svg/common/code/checklist'

import AjaxIcon from '@svg/common/code/programming/ajax'
import CppIcon from '@svg/common/code/programming/cpp'
import CssIcon from '@svg/common/code/programming/css'
import DockerIcon from '@svg/common/code/programming/docker'
import ExpressIcon from '@svg/common/code/programming/express'
import FirebaseIcon from '@svg/common/code/programming/firebase'
import GitIcon from '@svg/common/code/programming/git'
import GithubIcon from '@svg/common/code/programming/github'
import HtmlIcon from '@svg/common/code/programming/html'
import JavascriptIcon from '@svg/common/code/programming/javascript'
import LaravelIcon from '@svg/common/code/programming/laravel'
import MongodbIcon from '@svg/common/code/programming/mongodb'
import MysqlIcon from '@svg/common/code/programming/mysql'
import PhpIcon from '@svg/common/code/programming/php'
import PostgreSqlIcon from '@svg/common/code/programming/postgre-sql'
import PythonIcon from '@svg/common/code/programming/python'
import ReactIcon from '@svg/common/code/programming/react'
import SqlServerIcon from '@svg/common/code/programming/sql-server'
import SvgIcon from '@svg/common/code/programming/svg'
import VueIcon from '@svg/common/code/programming/vue'

import TypewriterComp from '@root/components/common/TypeWritterComp'
import { flexCustom, fontFamily, root, textCustom, borderDefault } from '@root/utils/Styles'
import AccordionComp from '@root/components/specific/code/AccordionComp'
import LinkComp from '@root/components/common/button/NavigateComp'

const HomeScreen = () => {
    return (
        <Layouts>
            <View>
                <UserCodeIcon />
            </View>
            <View>
                <TypewriterComp begin='Welcome, ' data={['Student.', 'Instructor.', 'Visitor.']} />
                <Text style={textCustom.textRegular}>This application is an online coding learning platform, you can use it wherever and whenever you want. Join as a learner or as a material provider.</Text>
            </View>
            <View style={flexCustom.flexRowStart}>
                <View style={styles.box}>
                    <Text style={textCustom.textMedium}>6+</Text>
                    <Text style={textCustom.textRegular}>Courses</Text>
                </View>
                <View style={styles.box}>
                    <Text style={textCustom.textMedium}>1+</Text>
                    <Text style={textCustom.textRegular}>Instructors</Text>
                </View>
                <View style={styles.box}>
                    <Text style={textCustom.textMedium}>1+</Text>
                    <Text style={textCustom.textRegular}>Students</Text>
                </View>
                <TouchableOpacity style={{
                    ...flexCustom.flexRowStart,
                    paddingHorizontal: root.sizeM,
                    paddingVertical: root.sizeM / 2,
                    borderColor: root.blueColor,
                    borderWidth: 1,
                    borderRadius: root.radiusS
                }}>
                    <Text style={{
                        fontFamily: fontFamily.medium,
                        fontSize: root.sizeM,
                        color: root.blueColor
                    }}>Learn More</Text>
                    <ScrollIcon fill={root.blueColor} width={root.sizeL} height={root.sizeL} />
                </TouchableOpacity>

            </View>
            <ScrollView horizontal>
                <View style={styles.iconWrapper}>
                    <AjaxIcon width={root.sizeXxx} height={root.sizeXxx} />
                </View>
                <View style={styles.iconWrapper}>
                    <CppIcon width={root.sizeXxx} height={root.sizeXxx} />
                </View>
                <View style={styles.iconWrapper}>
                    <CssIcon width={root.sizeXxx} height={root.sizeXxx} />
                </View>
                <View style={styles.iconWrapper}>
                    <DockerIcon width={root.sizeXxx} height={root.sizeXxx} />
                </View>
                <View style={styles.iconWrapper}>
                    <ExpressIcon width={root.sizeXxx} height={root.sizeXxx} />
                </View>
                <View style={styles.iconWrapper}>
                    <FirebaseIcon width={root.sizeXxx} height={root.sizeXxx} />
                </View>
                <View style={styles.iconWrapper}>
                    <GitIcon width={root.sizeXxx} height={root.sizeXxx} />
                </View>
                <View style={styles.iconWrapper}>
                    <GithubIcon width={root.sizeXxx} height={root.sizeXxx} />
                </View>
                <View style={[styles.iconWrapper, { marginRight: 0 }]}>
                    <HtmlIcon width={root.sizeXxx} height={root.sizeXxx} />
                </View>
            </ScrollView>
            <ScrollView horizontal>
                <View style={styles.iconWrapper}>
                    <JavascriptIcon width={root.sizeXxx} height={root.sizeXxx} />
                </View>
                <View style={styles.iconWrapper}>
                    <LaravelIcon width={root.sizeXxx} height={root.sizeXxx} />
                </View>
                <View style={styles.iconWrapper}>
                    <MongodbIcon width={root.sizeXxx} height={root.sizeXxx} />
                </View>
                <View style={styles.iconWrapper}>
                    <MysqlIcon width={root.sizeXxx} height={root.sizeXxx} />
                </View>
                <View style={styles.iconWrapper}>
                    <PhpIcon width={root.sizeXxx} height={root.sizeXxx} />
                </View>
                <View style={styles.iconWrapper}>
                    <PostgreSqlIcon width={root.sizeXxx} height={root.sizeXxx} />
                </View>
                <View style={styles.iconWrapper}>
                    <PythonIcon width={root.sizeXxx} height={root.sizeXxx} />
                </View>
                <View style={styles.iconWrapper}>
                    <ReactIcon width={root.sizeXxx} height={root.sizeXxx} />
                </View>
                <View style={styles.iconWrapper}>
                    <SqlServerIcon width={root.sizeXxx} height={root.sizeXxx} />
                </View>
                <View style={styles.iconWrapper}>
                    <SvgIcon width={root.sizeXxx} height={root.sizeXxx} />
                </View>
                <View style={[styles.iconWrapper, { marginRight: 0 }]}>
                    <VueIcon width={root.sizeXxx} height={root.sizeXxx} />
                </View>
            </ScrollView>
            <View style={{
                ...borderDefault.borderS,
                backgroundColor: root.thirdBgColor,
                padding: root.sizeM
            }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={textCustom.textBold}>
                        Student
                    </Text>
                </View>
                <View style={{
                    rowGap: root.sizeM
                }}>
                    <AccordionComp title='Choose a course' content='Find the perfect online course for you with this platform. Explore various options based on your interests and goals. With just a few clicks, you can choose a course that suits your preferences, empowering you to pursue your interests from anywhere.' />
                    <AccordionComp title='Make a payment' content='Securely complete your transaction with ease. Choose your preferred payment method and make a swift, hassle-free payment to access your selected course or services.' />
                    <AccordionComp title='Completing learning' content='Finish your learning journey with confidence. Access completion certificates, assessments, or follow-up resources to solidify your knowledge and skills.' />
                    <AccordionComp title='Get a certificate' content='Obtain your certificate upon course completion. Validate your skills and achievements with our accredited certification, enhancing your professional profile.' />
                </View>
            </View>
            <View style={{
                ...borderDefault.borderS,
                backgroundColor: root.thirdBgColor,
                padding: root.sizeM
            }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={textCustom.textBold}>
                        Instructor
                    </Text>
                </View>
                <View style={{
                    rowGap: root.sizeM
                }}>
                    <AccordionComp title='Provide courses' content='As an instructor, offer your expertise to eager learners. Create and deliver engaging courses tailored to your niche, empowering students to achieve their goals and expand their knowledge under your guidance.' />
                    <AccordionComp title='Determine the price' content='Set the price for your course content. Determine the value of your expertise and resources, ensuring fair compensation for your efforts while attracting interested learners.' />
                    <AccordionComp title='Receive payment' content='Easily receive payments for your courses. Seamlessly integrate payment gateways to securely process transactions, ensuring a smooth and efficient experience for both you and your students.' />
                </View>
            </View>
            <View>
                <MemberCodeIcon />
                <Text style={textCustom.textBold}>Be part of an inspiring learning journey!</Text>
                <Text style={textCustom.textRegular}>Join as our mentor and share your knowledge and experience with the next generation.</Text>
            </View>
            <View style={{
                rowGap: root.sizeM
            }}>
                <StudentCodeIcon />
                <View style={styles.wrapper}>
                    <ChecklistIcon fill={root.blueColor} width={root.sizeL} height={root.sizeL} />
                    <Text style={textCustom.textRegular}>Flexibility of Time</Text>
                </View>
                <View style={styles.wrapper}>
                    <ChecklistIcon fill={root.blueColor} width={root.sizeL} height={root.sizeL} />
                    <Text style={textCustom.textRegular}>Career Advancement</Text>
                </View>
                <View style={styles.wrapper}>
                    <ChecklistIcon fill={root.blueColor} width={root.sizeL} height={root.sizeL} />
                    <Text style={textCustom.textRegular}>Lifetime Access</Text>
                </View>
                <View style={styles.wrapper}>
                    <ChecklistIcon fill={root.blueColor} width={root.sizeL} height={root.sizeL} />
                    <Text style={textCustom.textRegular}>Self-Learning Development</Text>
                </View>
                <View style={styles.wrapper}>
                    <ChecklistIcon fill={root.blueColor} width={root.sizeL} height={root.sizeL} />
                    <Text style={textCustom.textRegular}>Certificates or Recognition</Text>
                </View>
            </View>
            <LinkComp text='See Course' type='primary' to='code-guest-Courses' />
        </Layouts>
    )
}

const styles = StyleSheet.create({
    box: {
        padding: root.sizeM,
        borderRadius: root.radiusS,
        backgroundColor: root.thirdBgColor,
        rowGap: root.sizeXxs
    },
    iconWrapper: {
        padding: root.sizeM,
        backgroundColor: root.secondBgColor,
        borderColor: root.borderColor,
        borderRadius: 99,
        borderWidth: 1,
        marginRight: root.sizeM
    },
    wrapper: {
        flexDirection: 'row',
        columnGap: root.sizeS,
        padding: root.sizeM,
        backgroundColor: root.transblueColor,
        borderRadius: root.radiusS,
    }
})

export default HomeScreen

