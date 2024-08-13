import React, { useState } from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import Layouts from '@root/views/code/Layouts';

import { flexCustom, size, textCustom } from '@root/utils/Styles';

import BadgeComp from '@root/components/common/alert/BadgeComp';
import HandleComp from '@root/components/specific/code/member/card/HandleComp';
import LoadingComp from '@root/components/common/LoadingComp';
import CardModalComp from '@root/components/specific/code/CardModalComp';
import CardCourseComp from '@root/components/specific/code/CardCourseComp';
import PaginationComp from '@root/components/common/PaginationComp';

import { CodeTabsStackParamList } from '@root/utils/Navigation';

import { RootState } from '@root/redux/store';
import { studentCoursesActions } from '@root/redux/code/actions/member';

const Courses = () => {
    const { theme } = useSelector((state: RootState) => state.theme)

    const dispatch = useDispatch()

    const { data: courses, loading: coursesLoading } = useSelector((state: RootState) => state.code.studentCoursesResult)

    const navigation = useNavigation<NavigationProp<CodeTabsStackParamList>>();

    const [modalCard, setModalCard] = useState({
        visible: false,
        title: '',
        description: '',
        courseId: ''
    });

    const modalClose = () => {
        setModalCard({
            visible: false,
            title: '',
            description: '',
            courseId: ''
        })
    }

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <Text style={textCustom(theme).textBold}>Courses</Text>

                {coursesLoading ? <LoadingComp type='primary' /> : !courses ? <BadgeComp text="You haven't purchased a course yet" type='warning' /> :
                    <>
                        <PaginationComp data={courses.links} onPageChange={value => dispatch(studentCoursesActions.init(value))} />
                        <View style={{ rowGap: size.m }}>
                            {courses.data.map((value: any, index: number) => (
                                <CardCourseComp setVisible={() => {
                                    setModalCard(prev => ({
                                        ...prev,
                                        visible: true,
                                        title: value.course.title,
                                        description: value.course.description,
                                        courseId: value.course.id
                                    }))
                                }} key={index} data={value.course} />
                            ))}
                        </View>
                        <PaginationComp data={courses.links} onPageChange={value => { dispatch(studentCoursesActions.init(value)) }} />
                    </>
                }

                {modalCard.visible &&
                    <CardModalComp title={modalCard.title} description={modalCard.description} onPress={modalClose}>
                        <View style={flexCustom.flexRowStart as ViewStyle}>
                            <HandleComp text='See' type='primary' onPress={() => {
                                modalClose()
                                navigation.navigate('Member', {
                                    screen: 'Student', params: {
                                        screen: 'Sections', params: {
                                            data: {
                                                courseId: modalCard.courseId,
                                                title: modalCard.title
                                            }
                                        }
                                    }
                                });
                            }} />
                            <HandleComp text='Ask' type='success' onPress={() => {
                                modalClose()
                                navigation.navigate('Member', {
                                    screen: 'Student', params: {
                                        screen: 'Question', params: {
                                            data: {
                                                courseId: modalCard.courseId,
                                                title: modalCard.title
                                            }
                                        }
                                    }
                                });
                            }} />
                            <HandleComp text='Review' type='warning' onPress={() => {
                                modalClose()
                                navigation.navigate('Member', {
                                    screen: 'Student', params: {
                                        screen: 'StoreReview', params: {
                                            data: {
                                                courseId: modalCard.courseId,
                                                title: modalCard.title
                                            }
                                        }
                                    }
                                });
                            }} />
                        </View>
                    </CardModalComp>
                }
            </View>
        </Layouts>
    );
};

export default Courses;