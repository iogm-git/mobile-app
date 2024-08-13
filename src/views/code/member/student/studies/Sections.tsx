import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'

import Layouts from '@root/views/code/Layouts'

import { borderDefault, color, fontCustom, size, textCustom } from '@root/utils/Styles'

import CardComp from '@root/components/specific/code/member/card/CardComp'
import ModalComp from '@root/components/common/alert/ModalComp'
import BadgeComp from '@root/components/common/alert/BadgeComp'
import HandleComp from '@root/components/common/button/HandleComp'
import LoadingComp from '@root/components/common/LoadingComp'
import NavigateComp from '@root/components/common/button/NavigateComp'

import { CodeTabsStackParamList } from '@root/utils/Navigation'

import { RootState } from '@root/redux/store'
import { studentCertificateActions, studentCertificatesActions, studentSectionsActions, studentUpdateCompletedLecturesActions } from '@root/redux/code/actions/member'

type RouteParams = {
    data: any
}

const Sections = () => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    const dispatch = useDispatch()

    const navigation = useNavigation<NavigationProp<CodeTabsStackParamList>>()

    const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>()
    const { courseId, title } = route.params.data

    const [complete, setComplete] = useState(false)
    const { loading: certificatesLoading } = useSelector((state: RootState) => state.code.studentCertificatesResult)
    const { data: sections, loading: sectionsLoading } = useSelector((state: RootState) => state.code.studentSectionsResult)
    const { data: courseProgress, loading: courseProgressLoading } = useSelector((state: RootState) => state.code.studentCourseProgressResult)
    const { data: completedLecturesSuccess, loading: completedLecturesLoading } = useSelector((state: RootState) => state.code.studentUpdateCompletedLecturesResult)

    useEffect(() => {
        if (!courseId || courseId == null) {
            navigation.navigate('Member', { screen: 'Student', params: { screen: 'Courses' } })
        } else {
            dispatch(studentSectionsActions.init(courseId))
        }

    }, [])

    useEffect(() => {
        if ((courseProgress && courseProgress) && (sections && sections)) {
            let cp = courseProgress.reduce((acc: any, obj: any) => obj.course_id === (courseId) ? acc + 1 : acc, 0)
            let s = sections.length

            if (cp === s) setComplete(true)
        }

    }, [courseProgress, courseProgressLoading])

    const modalClose = () => {
        dispatch(studentUpdateCompletedLecturesActions.success(null))
        dispatch(studentCertificatesActions.init())
    }

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <Text style={textCustom(theme).textBold}>{title}</Text>

                <Text style={textCustom(theme).textLight}>Complete all the material then you will get a certificate.</Text>

                {(certificatesLoading || completedLecturesLoading) ? <LoadingComp type='primary' /> : complete &&
                    <HandleComp text='Download Certificate' type='success' onPress={() => {
                        dispatch(studentUpdateCompletedLecturesActions.init({
                            course_id: courseId,
                            section: sections[sections.length - 1].title
                        }))
                        dispatch(studentUpdateCompletedLecturesActions.failure(null))
                        dispatch(studentUpdateCompletedLecturesActions.success(null))
                        setTimeout(() => {
                            dispatch(studentCertificateActions.init())
                        }, 1000);
                    }} />
                }

                {(sectionsLoading || courseProgressLoading) ? <LoadingComp type='primary' /> :
                    sections && sections.map((value: any, index: number) => (
                        <CardComp key={index} order={index + 1} additional={
                            <>
                                <HandleComp small text='See' type='primary' onPress={() => navigation.navigate('Member', {
                                    screen: 'Student',
                                    params: {
                                        screen: 'Lessons',
                                        params: {
                                            data: {
                                                courseId: courseId,
                                                sectionId: value.id,
                                                title: value.title
                                            }
                                        }
                                    }
                                })} />
                                <Text style={[fontCustom(theme).fontLight, {
                                    fontSize: size.s,
                                    color: courseProgress.length ?
                                        (courseProgress[index] &&
                                            courseProgress[index].completed_lectures &&
                                            courseProgress[index].completed_lectures.status === 'completed' ? color.green : color.red) : color.red
                                }]}>
                                    {courseProgress.length ?
                                        (courseProgress[index] &&
                                            courseProgress[index].completed_lectures &&
                                            courseProgress[index].completed_lectures.status === 'completed' ? 'Completed' : 'Uncompleted') : 'Uncompleted'}
                                </Text>
                            </>
                        }>
                            <View style={[borderDefault(theme).borderS, { backgroundColor: colors.secondBg, padding: size.xs / 2 }]}>
                                <Text style={textCustom(theme).textLight}>Title</Text>
                                <Text style={textCustom(theme).textRegular}>{value.title}</Text>
                            </View>
                        </CardComp>
                    ))}
            </View>

            {completedLecturesSuccess &&
                <ModalComp title='Download Certificates' onClose={modalClose}>
                    <View style={{ rowGap: size.s }}>
                        <BadgeComp text={completedLecturesSuccess} type='success' />
                        <NavigateComp
                            text='My certificates'
                            type='primary'
                            to='Member'
                            isNested
                            nested={{ screen: 'Student', params: { screen: 'Certificates' } }}
                            onPress={modalClose}
                        />
                    </View>
                </ModalComp>
            }
        </Layouts>
    )
}

export default Sections