import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, ViewStyle, ScrollView, Alert } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import Layouts from '@root/views/code/Layouts';

import { CodeTabsStackParamList } from '@root/utils/Navigation';
import { flexCustom, size, textCustom } from '@root/utils/Styles';

import { RootState } from '@root/redux/store';
import { instructorDestroyCourseActions, instructorStudiesActions } from '@root/redux/code/actions/member';

import BadgeComp from '@root/components/common/alert/BadgeComp';
import HandleComp from '@root/components/common/button/HandleComp';
import LoadingComp from '@root/components/common/LoadingComp';
import CardModalComp from '@root/components/specific/code/CardModalComp';
import CardHandleComp from '@root/components/specific/code/member/card/HandleComp'
import PaginationComp from '@root/components/common/PaginationComp';
import CardCourseComp from '@root/components/specific/code/CardCourseComp';

const Courses = () => {
    const { theme } = useSelector((state: RootState) => state.theme)

    const navigation = useNavigation<NavigationProp<CodeTabsStackParamList>>();

    const { data: courses, loading: coursesLoading } = useSelector((state: RootState) => state.code.instructorStudiesResult)
    const { data: destroyCourseSuccess, error: destroyCourseError, loading: destroyCourseLoading } = useSelector((state: RootState) => state.code.instructorDestroyCourseResult)

    const [page, setPage] = useState(1)
    const [orderBy, setOrderBy] = useState('old')

    const dispatch = useDispatch()

    const [modalCard, setModalCard] = useState({
        visible: false,
        courseId: '',
        courseTitle: '',
        description: '',
        price: '',
        iconSvg: '',
        level: '',
        status: ''
    });

    const closeModalCard = () => {
        setModalCard({
            visible: false,
            courseId: '',
            courseTitle: '',
            description: '',
            price: '',
            iconSvg: '',
            level: '',
            status: ''
        })
        setOrderBy('old')
    }

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <Text style={textCustom(theme).textBold}>Courses</Text>
                <HandleComp text='Add Course' type='primary' onPress={() => {
                    setOrderBy(orderBy)
                    navigation.navigate('Member', {
                        screen: 'Instructor',
                        params: {
                            screen: 'StoreCourse',
                            params: {
                                data: modalCard
                            }
                        }
                    })
                }} />

                <View style={{ rowGap: size.m }}>
                    {coursesLoading ? <LoadingComp type='primary' /> : (!courses || !courses.data) ? <BadgeComp text='No course' type='warning' /> :
                        <>
                            <View style={{ rowGap: size.xxs }}>
                                <Text style={textCustom(theme).textLight}>Filter :</Text>
                                <ScrollView horizontal>
                                    <View style={[flexCustom.flexRowStart as ViewStyle, { flexWrap: 'nowrap' }]}>
                                        <HandleComp active={orderBy === 'new'} text='New' type='text' small onPress={() => {
                                            setOrderBy('new')
                                            setPage(1)
                                            dispatch(instructorStudiesActions.init('new', 1))
                                        }} />
                                        <HandleComp active={orderBy === 'old'} text='Old' type='text' small onPress={() => {
                                            setOrderBy('old')
                                            setPage(1)
                                            dispatch(instructorStudiesActions.init('old', 1))
                                        }} />
                                    </View>
                                </ScrollView>
                            </View>

                            <PaginationComp data={courses.links} page={page} onPageChange={value => {
                                setPage(parseInt(value))
                                dispatch(instructorStudiesActions.init(orderBy, value))
                            }} />

                            {courses.data.map((value: any, index: any) => (
                                <CardCourseComp setVisible={() => {
                                    setModalCard(prev => ({
                                        ...prev,
                                        visible: true,
                                        courseId: value.id,
                                        courseTitle: value.title,
                                        description: value.description,
                                        price: value.price,
                                        iconSvg: value.icon_svg,
                                        level: value.level,
                                        status: value.status
                                    }))
                                }} key={index} data={value} />

                            ))}
                        </>
                    }
                </View>
                {modalCard.visible &&
                    <CardModalComp title={modalCard.courseTitle} description={modalCard.description} onPress={closeModalCard}>
                        <View style={flexCustom.flexRowStart as ViewStyle}>
                            <CardHandleComp text='See' type='primary' onPress={() => {
                                closeModalCard()
                                setOrderBy(orderBy)
                                navigation.navigate('Member', {
                                    screen: 'Instructor',
                                    params: {
                                        screen: 'Sections',
                                        params: {
                                            data: modalCard
                                        }
                                    }
                                })
                            }} />
                            <CardHandleComp text='Edit' type='warning' onPress={() => {
                                closeModalCard()
                                setOrderBy(orderBy)
                                navigation.navigate('Member', {
                                    screen: 'Instructor',
                                    params: {
                                        screen: 'UpdateCourse',
                                        params: {
                                            data: modalCard
                                        }
                                    }
                                })
                            }} />
                            {destroyCourseLoading ? <LoadingComp type='primary' /> :
                                <CardHandleComp
                                    text='Delete'
                                    type='danger'
                                    onPress={() => {
                                        dispatch(instructorDestroyCourseActions.init(modalCard.courseId))
                                    }} />}
                        </View>
                    </CardModalComp>
                }
            </View>

            {(destroyCourseSuccess || destroyCourseError) &&
                Alert.alert('Delete Course', destroyCourseSuccess ? destroyCourseSuccess : destroyCourseError, [
                    {
                        text: 'Ok', onPress: () => {
                            dispatch(instructorDestroyCourseActions.success(null))
                            dispatch(instructorDestroyCourseActions.failure(null))
                            dispatch(instructorStudiesActions.init())
                            closeModalCard()
                        }
                    }
                ])
            }
        </Layouts>
    );
};

export default Courses;