import { Alert, View, ViewStyle } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import React, { PropsWithChildren, useEffect } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'

import { flexCustom, size } from '@root/utils/Styles'
import { CodeTabsStackParamList } from '@root/utils/Navigation'

import CardComp from '../card/CardComp'
import ModalComp from '@root/components/common/alert/ModalComp'
import BadgeComp from '@root/components/common/alert/BadgeComp'
import HandleComp from '@root/components/common/button/HandleComp'
import LoadingComp from '@root/components/common/LoadingComp'
import ElementComp from '../card/ElementComp'

import { RootState } from '@root/redux/store'
import { instructorDestroyLessonActions, instructorDestroySectionActions, instructorLessonsActions, instructorSectionsActions } from '@root/redux/code/actions/member'

type CardSectionLessonProps = PropsWithChildren<{
    type: string
    order: number
    orderIn: string | number
    created_at: string
    updated_at: string

    courseId?: string
    courseTitle?: string

    sectionId?: string
    sectionTitle?: string

    lessonId?: string
    lessonTitle?: string
    description?: string
    code?: string

    price: string | number
    iconSvg: string,
    level: string,
    status: string,

}>

const CardSectionLessonComp = ({
    type, order, orderIn, created_at, updated_at,
    courseId, courseTitle,
    sectionId, sectionTitle,
    lessonId, lessonTitle, description, code,
    price, iconSvg, level, status
}: CardSectionLessonProps) => {
    const navigation = useNavigation<NavigationProp<CodeTabsStackParamList>>()

    const { data: destroySectionSuccess, loading: destroySectionLoading } = useSelector((state: RootState) => state.code.instructorDestroySectionResult)
    const { data: destroyLessonSuccess, loading: destroyLessonLoading } = useSelector((state: RootState) => state.code.instructorDestroyLessonResult)

    const dispatch = useDispatch()

    const modalClose = () => {
        if (type === 'section') {
            dispatch(instructorSectionsActions.init(courseId))
            dispatch(instructorDestroySectionActions.success(null))
        } else {
            dispatch(instructorLessonsActions.init(sectionId, 1))
            dispatch(instructorDestroyLessonActions.success(null))
        }
    }

    useEffect(() => {

    }, [type, order, orderIn, created_at, updated_at,

        courseId, courseTitle,
        sectionId, sectionTitle,
        lessonId, lessonTitle, description, code,
        price, iconSvg, level, status
    ])

    return (
        <CardComp order={order} additional={
            <View style={flexCustom.flexRowBetween as ViewStyle}>
                {type === 'section' &&
                    <HandleComp small text='Show' type='success' onPress={() =>
                        navigation.navigate('Member', {
                            screen: 'Instructor',
                            params: {
                                screen: 'Lessons',
                                params: {
                                    data: {
                                        sectionId: sectionId,
                                        sectionTitle: sectionTitle,

                                        courseId: courseId,
                                        courseTitle: courseTitle,
                                        price: price,
                                        iconSvg: iconSvg,
                                        level: level,
                                        status: status
                                    }
                                }
                            }
                        })} />
                }
                <HandleComp small text='Edit' type='warning' onPress={() =>
                    navigation.navigate('Member', {
                        screen: 'Instructor',
                        params: {
                            screen: `Update${type === 'section' ? 'Section' : 'Lesson'}`,
                            params: {
                                data: {
                                    orderIn: orderIn,

                                    sectionId: sectionId,
                                    sectionTitle: sectionTitle,

                                    lessonId: lessonId,
                                    lessonTitle: lessonTitle,
                                    description: description,
                                    code: code,

                                    courseId: courseId,
                                    courseTitle: courseTitle,
                                    price: price,
                                    iconSvg: iconSvg,
                                    level: level,
                                    status: status
                                }
                            }
                        }
                    })} />
                {(destroySectionLoading || destroyLessonLoading) ? <LoadingComp type='primary' /> :
                    <HandleComp small text='Delete' type='danger' onPress={() => {
                        if (type === 'section') {
                            Alert.alert('Delete section ?', courseTitle, [{ text: 'Cancel' }, {
                                text: 'Delete',
                                onPress: () => dispatch(instructorDestroySectionActions.init(courseId, sectionId))
                            }])
                        } else {
                            dispatch(instructorDestroyLessonActions.init(courseId, sectionId, lessonId))
                        }
                    }} />
                }
            </View>
        }>
            <ElementComp keyword={`Order In ${type === 'section' ? 'Course' : 'Section'}`} value={orderIn} />
            <ElementComp keyword={`${type === 'section' ? 'Section' : 'Lesson'} Title`} value={`${type === 'section' ? sectionTitle : lessonTitle}`} />
            <ElementComp keyword='created at' value={created_at} />
            <ElementComp keyword='updated at' value={updated_at} />

            {(destroySectionSuccess || destroyLessonSuccess) &&
                <ModalComp title={`Delete ${type}`} onClose={modalClose}>
                    <View style={{ rowGap: size.s }}>
                        <BadgeComp text={(destroySectionSuccess || destroyLessonSuccess)} type='success' />
                        <HandleComp text='Ok' type='primary' onPress={modalClose} />
                    </View>
                </ModalComp>
            }
        </CardComp>
    )
}

export default CardSectionLessonComp