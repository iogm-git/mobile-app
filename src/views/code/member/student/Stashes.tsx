import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { View, Text, ViewStyle, Alert } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'

import Layouts from '../../Layouts'

import { CodeTabsStackParamList } from '@root/utils/Navigation'
import { flexCustom, size, textCustom } from '@root/utils/Styles'

import BadgeComp from '@root/components/common/alert/BadgeComp'
import HandleComp from '@root/components/specific/code/member/card/HandleComp'
import LoadingComp from '@root/components/common/LoadingComp'
import CardModalComp from '@root/components/specific/code/CardModalComp'
import CardCourseComp from '@root/components/specific/code/CardCourseComp'
import PaginationComp from '@root/components/common/PaginationComp'

import { RootState } from '@root/redux/store'

import { studentCoursesActions, studentDestroyStashActions, studentStashesActions, studentStoreTransactionFreeActions, studentTransactionsActions } from '@root/redux/code/actions/member'

const Stashes = () => {
    const { theme } = useSelector((state: RootState) => state.theme)

    const navigation = useNavigation<NavigationProp<CodeTabsStackParamList>>()

    const dispatch = useDispatch()

    const { data: stashes, loading: stashesLoading } = useSelector((state: RootState) => state.code.studentStashesResult)
    const { data: deleteStashSuccess, loading: deleteStashLoading } = useSelector((state: RootState) => state.code.studentDestroyStashResult)
    const { data: storeTransactionFreeSuccess, error: storeTransactionFreeError, loading: storeTransactionFreeLoading } = useSelector((state: RootState) => state.code.studentStoreTransactionFreeResult)

    const [modalCard, setModalCard] = useState({
        visible: false,
        title: '',
        description: '',
        courseId: ''
    });

    const closeModalCard = () => {
        setModalCard({
            visible: false,
            title: '',
            description: '',
            courseId: ''
        })
    }

    useEffect(() => {

    }, [stashes, deleteStashLoading, storeTransactionFreeLoading])

    return (
        <Layouts>

            <View style={{ rowGap: size.l }}>
                <Text style={textCustom(theme).textBold}>Stashes</Text>
                {stashesLoading ? <LoadingComp type='primary' /> : !stashes ? <BadgeComp text="You haven't added a favorite course" type='warning' /> :
                    <>
                        <PaginationComp data={stashes.links} onPageChange={value => dispatch(studentStashesActions.init(value))} />
                        <View style={{ rowGap: size.m }}>
                            {stashes.data.map((value: any, index: number) => (
                                <CardCourseComp isLoading={(deleteStashLoading || storeTransactionFreeLoading)} setVisible={() => {
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
                        <PaginationComp data={stashes.links} onPageChange={value => dispatch(studentStashesActions.init(value))} />
                    </>
                }

            </View>

            {modalCard.visible &&
                <CardModalComp title={modalCard.title} description={modalCard.description} onPress={closeModalCard}>
                    <View style={flexCustom.flexRowStart as ViewStyle}>
                        <HandleComp text='Buy' type='primary' onPress={() => {
                            closeModalCard()
                            dispatch(studentStoreTransactionFreeActions.init(modalCard.courseId))
                        }} />
                        <HandleComp text='Delete' type='danger' onPress={() => {
                            closeModalCard()
                            dispatch(studentDestroyStashActions.init(modalCard.courseId))
                        }} />
                    </View>
                </CardModalComp>
            }

            {storeTransactionFreeSuccess &&
                Alert.alert('Buy Free Course', storeTransactionFreeSuccess, [
                    {
                        text: 'See My Course', onPress: () => {
                            dispatch(studentStoreTransactionFreeActions.success(null))
                            dispatch(studentCoursesActions.init())
                            dispatch(studentTransactionsActions.init())
                            navigation.navigate('Member', { screen: 'Student', params: { screen: 'Courses' } })
                        }
                    },
                    {
                        text: 'ok', onPress: () => {
                            dispatch(studentStoreTransactionFreeActions.success(null))
                            dispatch(studentCoursesActions.init())
                            dispatch(studentTransactionsActions.init())
                        }
                    }
                ])

            }

            {storeTransactionFreeError &&
                Alert.alert('Buy Free Course', storeTransactionFreeError, [
                    {
                        text: 'See My Course', onPress: () => {
                            dispatch(studentStoreTransactionFreeActions.failure(null))
                            navigation.navigate('Member', { screen: 'Student', params: { screen: 'Courses' } })
                        }
                    },
                    {
                        text: 'ok', onPress: () => {
                            dispatch(studentStoreTransactionFreeActions.failure(null))
                        }
                    }
                ])

            }

            {deleteStashSuccess &&
                Alert.alert('Add Course Status', deleteStashSuccess, [
                    {
                        text: 'Ok', onPress: () => {
                            dispatch(studentDestroyStashActions.success(null))
                            dispatch(studentStashesActions.init())
                        }
                    },
                ])
            }
        </Layouts>
    )
}

export default Stashes