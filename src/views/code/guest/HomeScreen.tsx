import React from 'react'
import { useSelector } from 'react-redux'
import { ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native'

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

import HandleComp from '@root/components/common/button/HandleComp'
import NavigateComp from '@root/components/common/button/NavigateComp'
import AccordionComp from '@root/components/specific/code/AccordionComp'
import TypewriterComp from '@root/components/common/TypeWritterComp'


import { flexCustom, fontFamily, textCustom, borderDefault, size, color } from '@root/utils/Styles'

import { RootState } from '@root/redux/store'

const HomeScreen = () => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    const styles = StyleSheet.create({
        box: {
            padding: size.m,
            borderRadius: size.s,
            rowGap: size.xxs,
            backgroundColor: colors.thirdBg
        },
        iconWrapper: {
            backgroundColor: colors.secondBg,
            borderColor: colors.border,
            padding: size.m,
            borderRadius: 99,
            borderWidth: 1,
            marginRight: size.m
        },
        wrapper: {
            flexDirection: 'row',
            columnGap: size.s,
            padding: size.m,
            backgroundColor: color.transBlue,
            borderRadius: size.s,
        }
    })

    return (
        <Layouts>
            <View style={{ rowGap: size.m }}>
                <UserCodeIcon />
                <View>
                    <TypewriterComp begin='Welcome, ' data={['Student.', 'Instructor.', 'Visitor.']} />
                    <Text style={textCustom(theme).textRegular}>This application is an online coding learning platform, you can use it wherever and whenever you want. Join as a learner or as a material provider.</Text>
                </View>
                <View style={flexCustom.flexRowStart as ViewStyle}>
                    <View style={styles.box}>
                        <Text style={textCustom(theme).textMedium}>6+</Text>
                        <Text style={textCustom(theme).textRegular}>Courses</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={textCustom(theme).textMedium}>1+</Text>
                        <Text style={textCustom(theme).textRegular}>Instructors</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={textCustom(theme).textMedium}>1+</Text>
                        <Text style={textCustom(theme).textRegular}>Students</Text>
                    </View>
                </View>
                <HandleComp text='Learn More' type='primary' onPress={() => console.log('asd')} children={
                    <ScrollIcon fill={color.blue} width={size.l} height={size.l} />
                } />
            </View>

            <View style={{ rowGap: size.m }}>
                <ScrollView horizontal>
                    <View style={styles.iconWrapper}>
                        <AjaxIcon width={size.xxx} height={size.xxx} />
                    </View>
                    <View style={styles.iconWrapper}>
                        <CppIcon width={size.xxx} height={size.xxx} />
                    </View>
                    <View style={styles.iconWrapper}>
                        <CssIcon width={size.xxx} height={size.xxx} />
                    </View>
                    <View style={styles.iconWrapper}>
                        <DockerIcon width={size.xxx} height={size.xxx} />
                    </View>
                    <View style={styles.iconWrapper}>
                        <ExpressIcon width={size.xxx} height={size.xxx} />
                    </View>
                    <View style={styles.iconWrapper}>
                        <FirebaseIcon width={size.xxx} height={size.xxx} />
                    </View>
                    <View style={styles.iconWrapper}>
                        <GitIcon width={size.xxx} height={size.xxx} />
                    </View>
                    <View style={styles.iconWrapper}>
                        <GithubIcon width={size.xxx} height={size.xxx} />
                    </View>
                    <View style={[styles.iconWrapper, { marginRight: 0 }]}>
                        <HtmlIcon width={size.xxx} height={size.xxx} />
                    </View>
                </ScrollView>
                <ScrollView horizontal>
                    <View style={styles.iconWrapper}>
                        <JavascriptIcon width={size.xxx} height={size.xxx} />
                    </View>
                    <View style={styles.iconWrapper}>
                        <LaravelIcon width={size.xxx} height={size.xxx} />
                    </View>
                    <View style={styles.iconWrapper}>
                        <MongodbIcon width={size.xxx} height={size.xxx} />
                    </View>
                    <View style={styles.iconWrapper}>
                        <MysqlIcon width={size.xxx} height={size.xxx} />
                    </View>
                    <View style={styles.iconWrapper}>
                        <PhpIcon width={size.xxx} height={size.xxx} />
                    </View>
                    <View style={styles.iconWrapper}>
                        <PostgreSqlIcon width={size.xxx} height={size.xxx} />
                    </View>
                    <View style={styles.iconWrapper}>
                        <PythonIcon width={size.xxx} height={size.xxx} />
                    </View>
                    <View style={styles.iconWrapper}>
                        <ReactIcon width={size.xxx} height={size.xxx} />
                    </View>
                    <View style={styles.iconWrapper}>
                        <SqlServerIcon width={size.xxx} height={size.xxx} />
                    </View>
                    <View style={styles.iconWrapper}>
                        <SvgIcon width={size.xxx} height={size.xxx} />
                    </View>
                    <View style={[styles.iconWrapper, { marginRight: 0 }]}>
                        <VueIcon width={size.xxx} height={size.xxx} />
                    </View>
                </ScrollView>
            </View>

            <View style={{
                ...borderDefault(theme).borderS,
                backgroundColor: colors.thirdBg,
                padding: size.m
            }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={textCustom(theme).textBold}>
                        Student
                    </Text>
                </View>
                <View style={{
                    rowGap: size.m
                }}>
                    <AccordionComp title='Choose a course' content='Find the perfect online course for you with this platform. Explore various options based on your interests and goals. With just a few clicks, you can choose a course that suits your preferences, empowering you to pursue your interests from anywhere.' />
                    <AccordionComp title='Make a payment' content='Securely complete your transaction with ease. Choose your preferred payment method and make a swift, hassle-free payment to access your selected course or services.' />
                    <AccordionComp title='Completing learning' content='Finish your learning journey with confidence. Access completion certificates, assessments, or follow-up resources to solidify your knowledge and skills.' />
                    <AccordionComp title='Get a certificate' content='Obtain your certificate upon course completion. Validate your skills and achievements with our accredited certification, enhancing your professional profile.' />
                </View>
            </View>
            <View style={{
                ...borderDefault(theme).borderS,
                backgroundColor: colors.thirdBg,
                padding: size.m
            }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={textCustom(theme).textBold}>
                        Instructor
                    </Text>
                </View>
                <View style={{
                    rowGap: size.m
                }}>
                    <AccordionComp title='Provide courses' content='As an instructor, offer your expertise to eager learners. Create and deliver engaging courses tailored to your niche, empowering students to achieve their goals and expand their knowledge under your guidance.' />
                    <AccordionComp title='Determine the price' content='Set the price for your course content. Determine the value of your expertise and resources, ensuring fair compensation for your efforts while attracting interested learners.' />
                    <AccordionComp title='Receive payment' content='Easily receive payments for your courses. Seamlessly integrate payment gateways to securely process transactions, ensuring a smooth and efficient experience for both you and your students.' />
                </View>
            </View>
            <View>
                <MemberCodeIcon />
                <Text style={textCustom(theme).textBold}>Be part of an inspiring learning journey!</Text>
                <Text style={textCustom(theme).textRegular}>Join as our mentor and share your knowledge and experience with the next generation.</Text>
            </View>
            <View style={{
                rowGap: size.m
            }}>
                <StudentCodeIcon />
                <View style={styles.wrapper}>
                    <ChecklistIcon fill={color.blue} width={size.l} height={size.l} />
                    <Text style={textCustom(theme).textRegular}>Flexibility of Time</Text>
                </View>
                <View style={styles.wrapper}>
                    <ChecklistIcon fill={color.blue} width={size.l} height={size.l} />
                    <Text style={textCustom(theme).textRegular}>Career Advancement</Text>
                </View>
                <View style={styles.wrapper}>
                    <ChecklistIcon fill={color.blue} width={size.l} height={size.l} />
                    <Text style={textCustom(theme).textRegular}>Lifetime Access</Text>
                </View>
                <View style={styles.wrapper}>
                    <ChecklistIcon fill={color.blue} width={size.l} height={size.l} />
                    <Text style={textCustom(theme).textRegular}>Self-Learning Development</Text>
                </View>
                <View style={styles.wrapper}>
                    <ChecklistIcon fill={color.blue} width={size.l} height={size.l} />
                    <Text style={textCustom(theme).textRegular}>Certificates or Recognition</Text>
                </View>
            </View>
            <NavigateComp text='See Course' type='primary' to='Courses' />
        </Layouts>
    )
}

export default HomeScreen

