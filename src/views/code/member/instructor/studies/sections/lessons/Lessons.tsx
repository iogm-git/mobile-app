import { View, Text, ViewStyle } from 'react-native'
import React, { PropsWithChildren, useEffect } from 'react'
import Layouts from '@root/views/code/Layouts'
import { flexCustom, size, textCustom } from '@root/utils/Styles'
import NavigateComp from '@root/components/common/button/NavigateComp'
import { RootState } from '@root/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import LoadingComp from '@root/components/common/LoadingComp'
import BadgeComp from '@root/components/common/alert/BadgeComp'
import PaginationComp from '@root/components/common/PaginationComp'
import { instructorLessonsActions } from '@root/redux/code/actions/member'
import { CodeTabsStackParamList } from '@root/utils/Navigation'
import CardSectionLessonComp from '@root/components/specific/code/member/instructor/CardSectionLessonComp'

type RouteParams = PropsWithChildren<{
    data?: any
}>

const Lessons = () => {
    const { theme } = useSelector((state: RootState) => state.theme)

    const navigation = useNavigation<NavigationProp<CodeTabsStackParamList>>()

    const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>()
    const {
        sectionId,
        sectionTitle,

        courseId,
        courseTitle,
        price,
        iconSvg,
        level,
        status
    } = route.params.data

    const { data: lessons, loading: lessonsLoading } = useSelector((state: RootState) => state.code.instructorLessonsResult)

    const dispatch = useDispatch()

    useEffect(() => {
        if (sectionId) {
            dispatch(instructorLessonsActions.init(sectionId, 1))
        } else {
            navigation.navigate('Member', {
                screen: 'Instructor',
                params: {
                    screen: 'Sections',
                    params: {
                        data: {
                            courseId: courseId,
                            courseTitle: courseTitle,
                            price: price,
                            iconSvg: iconSvg,
                            level: level,
                            status: status
                        }
                    }
                }
            })
        }
    }, [sectionId])

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <Text style={[textCustom(theme).textBold, { textAlign: 'center' }]}>{sectionTitle}</Text>
                <View style={flexCustom.flexRowCenter as ViewStyle}>
                    <NavigateComp
                        text='Back'
                        type='warning'
                        to='Member'
                        isNested
                        nested={{
                            screen: 'Instructor',
                            params: {
                                screen: 'Sections',
                                params: {
                                    data: {
                                        courseId: courseId,
                                        courseTitle: courseTitle,
                                        price: price,
                                        iconSvg: iconSvg,
                                        level: level,
                                        status: status
                                    }
                                }
                            }
                        }} />
                    <NavigateComp
                        text='Add new Lesson'
                        type='primary'
                        to='Member'
                        isNested
                        nested={{
                            screen: 'Instructor',
                            params: {
                                screen: 'StoreLesson',
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
                        }} />
                </View>

                <View style={{ rowGap: size.m }}>
                    {lessonsLoading ? <LoadingComp type='primary' /> : (!lessons || !lessons.data) ? <BadgeComp text='No lessons' type='warning' /> :
                        lessons &&
                        <>
                            <PaginationComp data={lessons.links} onPageChange={value => dispatch(instructorLessonsActions.init(sectionId, value))} />

                            {lessons.data.map((value: any, index: any) => (
                                <CardSectionLessonComp
                                    key={index}
                                    type='lesson'
                                    order={index + 1}
                                    orderIn={value.order_in_section}
                                    created_at={value.created_at}
                                    updated_at={value.updated_at}

                                    sectionId={value.section.id}
                                    sectionTitle={value.section.title}

                                    lessonId={value.id}
                                    lessonTitle={value.title}
                                    description={value.description}
                                    code={value.code}

                                    courseId={value.section.course_id}
                                    courseTitle={value.section.course.title}
                                    price={value.section.course.price}
                                    iconSvg={value.section.course.icon_svg}
                                    level={value.section.course.level}
                                    status={value.section.course.status}
                                />
                            ))}
                        </>
                    }
                </View>
            </View>
        </Layouts>
    )
}

export default Lessons