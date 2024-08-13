import React, { PropsWithChildren, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, ScrollView, Text, TextInput, View, ViewStyle } from 'react-native'

import CardCourseComp from '@root/components/specific/code/CardCourseComp'

import Layouts from '../Layouts'

import { borderDefault, flexCustom, fontCustom, size, textCustom } from '@root/utils/Styles'

import SearchIcon from '@svg/common/code/search'

import HandleComp from '@root/components/common/button/HandleComp'
import CardHandleComp from '@root/components/specific/code/member/card/HandleComp'
import PaginationComp from '@root/components/common/PaginationComp'

import { RootState } from '@root/redux/store'
import LoadingComp from '@root/components/common/LoadingComp'
import { searchCourseActions } from '@root/redux/code/actions/guest'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CardModalComp from '@root/components/specific/code/CardModalComp'
import { studentCoursesActions, studentStashesActions, studentStoreStashActions, studentStoreTransactionActions, studentStoreTransactionFreeActions, studentTransactionsActions } from '@root/redux/code/actions/member'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { CodeTabsStackParamList } from '@root/utils/Navigation'

const Courses = () => {
    const dispatch = useDispatch()

    const { theme, colors } = useSelector((state: RootState) => state.theme)

    const navigation = useNavigation<NavigationProp<CodeTabsStackParamList>>()

    const { data: member } = useSelector((state: RootState) => state.user.meData)
    const { data: searchCourse, loading: searchCourseLoading } = useSelector((state: RootState) => state.code.searchCourseResult)
    const { data: storeStashSuccess, error: storeStashError, loading: storeStashLoading } = useSelector((state: RootState) => state.code.studentStoreStashResult)
    const { data: storeTransactionFreeSuccess, error: storeTransactionFreeError, loading: storeTransactionFreeLoading } = useSelector((state: RootState) => state.code.studentStoreTransactionFreeResult)
    const { data: storeTransactionSuccess, error: storeTransactionError, loading: storeTransactionLoading } = useSelector((state: RootState) => state.code.studentStoreTransactionResult)

    const [keyword, setKeyword] = useState('')
    const [category, setCategory] = useState('all')
    const [instructor, setInstructor] = useState('all')
    const [filter, setFilter] = useState('all')
    const [page, setPage] = useState(1)

    const [modalCard, setModalCard] = useState({
        visible: false,
        title: '',
        description: '',
        courseId: '',
        status: ''
    });

    const closeModalCard = () => {
        setModalCard({
            visible: false,
            title: '',
            description: '',
            courseId: '',
            status: ''
        })
    }

    useEffect(() => {

    }, [member,
        searchCourse, searchCourseLoading,
        storeStashSuccess, storeStashError, storeStashLoading,
        storeTransactionFreeSuccess, storeTransactionFreeError, storeTransactionFreeLoading
    ])

    return (
        <Layouts>
            <View style={{ rowGap: size.m, paddingBottom: size.xx }}>
                <Text style={textCustom(theme).textBold}>Courses</Text>

                {searchCourseLoading ? <LoadingComp type='primary' /> : searchCourse && <>
                    <View style={[borderDefault(theme).borderS, flexCustom.flexRowBetween as ViewStyle, { paddingHorizontal: size.s }]}>
                        <TextInput
                            style={[fontCustom(theme).fontMedium, { width: '80%' }]}
                            placeholder='Search...'
                            placeholderTextColor={colors.link}
                            onChangeText={value => {
                                setPage(1)
                                setFilter('all')
                                setInstructor('all')
                                setKeyword(value)
                            }} />
                        <TouchableOpacity onPress={() => dispatch(searchCourseActions.init('all', 'all', keyword.toLowerCase(), 1))}>
                            <SearchIcon width={size.l} height={size.l} fill={colors.link} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', columnGap: size.s }}>
                        <View style={{ ...borderDefault(theme).borderS, padding: size.s, rowGap: 2, backgroundColor: colors.secondBg, flex: 1 }}>
                            <Text style={textCustom(theme).textLight}>Categories :</Text>
                            <ScrollView horizontal>
                                <View style={[flexCustom.flexRowStart as ViewStyle as ViewStyle, { flexWrap: 'nowrap', columnGap: 4 }]}>
                                    <HandleComp small active={category === 'all'} text='all' type='text' onPress={() => {
                                        setPage(1)
                                        setCategory('all')
                                        dispatch(searchCourseActions.init(filter, instructor, 'all', 1))
                                    }} />
                                    {searchCourse.course_categories.map((value: any, index: number) => (
                                        <HandleComp small active={category === value.icon_svg} key={index} text={value.icon_svg} type='text' onPress={() => {
                                            setPage(1)
                                            setCategory(value.icon_svg)
                                            dispatch(searchCourseActions.init(filter, instructor, value.icon_svg, 1))
                                        }} />
                                    ))}
                                </View>
                            </ScrollView>
                        </View>

                        <View style={{ ...borderDefault(theme).borderS, padding: size.s, rowGap: 2, backgroundColor: colors.secondBg, flex: 1 }}>
                            <Text style={textCustom(theme).textLight}>Filter :</Text>
                            <ScrollView horizontal>
                                <View style={[flexCustom.flexRowStart as ViewStyle, { flexWrap: 'nowrap', columnGap: 4 }]}>
                                    <HandleComp small active={filter === 'all'} text='all' type='text' onPress={() => {
                                        setFilter('all')
                                        setPage(1)
                                        dispatch(searchCourseActions.init('all', instructor, keyword, 1))
                                    }} />
                                    <HandleComp small active={filter === 'free'} text='free' type='text' onPress={() => {
                                        setFilter('free')
                                        setPage(1)
                                        dispatch(searchCourseActions.init('free', instructor, keyword, 1))
                                    }} />
                                    <HandleComp small active={filter === 'paid'} text='paid' type='text' onPress={() => {
                                        setFilter('paid')
                                        setPage(1)
                                        dispatch(searchCourseActions.init('paid', instructor, keyword, 1))
                                    }} />
                                </View>
                            </ScrollView>
                        </View>
                    </View>


                    <View style={{ ...borderDefault(theme).borderS, padding: size.s, rowGap: 2, backgroundColor: colors.secondBg }}>
                        <Text style={textCustom(theme).textLight}>Instructor :</Text>
                        <ScrollView horizontal>
                            <View style={[flexCustom.flexRowStart as ViewStyle, { flexWrap: 'nowrap', columnGap: 4 }]}>
                                <HandleComp small active={instructor === 'all'} text='all' type='text' onPress={() => {
                                    setPage(1)
                                    setInstructor('all')
                                    dispatch(searchCourseActions.init(filter, 'all', keyword, 1))
                                }} />
                                {searchCourse.instructors.map((value: any, index: number) => (
                                    <HandleComp small key={index} active={instructor === value.name} text={value.name} type='text' onPress={() => {
                                        setPage(1)
                                        setInstructor(value.name)
                                        dispatch(searchCourseActions.init(filter, value.username, keyword, 1))
                                    }} />
                                ))}
                            </View>
                        </ScrollView>
                    </View>

                    <PaginationComp data={searchCourse.courses.links} page={page} onPageChange={value => {
                        setPage(parseInt(value))
                        dispatch(searchCourseActions.init(filter, instructor, keyword, value))
                    }} />
                    {searchCourse.courses.data.length > 0 &&
                        <View style={{ rowGap: size.x }}>
                            {searchCourse.courses.data.map((value: any, index: number) =>
                                <CardCourseComp isLoading={storeStashLoading} setVisible={() => {
                                    setModalCard(prev => ({
                                        ...prev,
                                        visible: true,
                                        title: value.title,
                                        description: value.description,
                                        courseId: value.id,
                                        status: value.status
                                    }))
                                }} key={index} data={value} />
                            )}
                        </View>
                    }
                    <PaginationComp data={searchCourse.courses.links} page={page} onPageChange={value => {
                        setPage(parseInt(value))
                        dispatch(searchCourseActions.init(filter, instructor, keyword, value))
                    }} />
                </>}

                {modalCard.visible &&
                    <CardModalComp title={modalCard.title} description={modalCard.description} onPress={closeModalCard}>
                        <View style={flexCustom.flexRowStart as ViewStyle}>
                            {(storeStashLoading || storeTransactionFreeLoading || storeTransactionLoading) ? <LoadingComp type='primary' /> :
                                <>
                                    <CardHandleComp text='Buy' type='primary' onPress={() => {
                                        if (member) {
                                            if (member.role === 'student') {
                                                if (modalCard.status === 'public') {
                                                    dispatch(studentStoreTransactionFreeActions.init(modalCard.courseId))
                                                } else {
                                                    dispatch(studentStoreTransactionActions.init(modalCard.courseId))
                                                }

                                                setTimeout(() => {
                                                    closeModalCard()
                                                }, 2000);
                                            } else {
                                                Alert.alert('Status', 'You must log in as student.', [{ text: 'ok' }])
                                            }
                                        }
                                    }} />
                                    <CardHandleComp text='Save' type='warning' onPress={() => {
                                        if (member) {
                                            if (member.role === 'student') {
                                                dispatch(studentStoreStashActions.init(modalCard.courseId))

                                                setTimeout(() => {
                                                    closeModalCard()
                                                }, 2000);
                                            } else {
                                                Alert.alert('Status', 'You must log in as student.', [{ text: 'ok' }])
                                            }
                                        }
                                    }} />
                                </>
                            }
                        </View>
                    </CardModalComp>
                }

                {storeStashSuccess &&
                    Alert.alert('Store Stash', storeStashSuccess, [
                        {
                            text: 'Add Another', onPress: () => {
                                dispatch(studentStoreStashActions.success(null))
                                dispatch(studentStashesActions.init())
                            }
                        },
                        {
                            text: 'See my stash', onPress: () => {
                                navigation.navigate('Member', { screen: 'Student', params: { screen: 'Stashes' } })
                                dispatch(studentStoreStashActions.success(null))
                                dispatch(studentStashesActions.init())
                            }
                        }
                    ])
                }

                {storeStashError &&
                    Alert.alert('Store Stash', storeStashError,
                        [{
                            text: 'Add another', onPress: () => {
                                dispatch(studentStoreStashActions.failure(null))
                            }
                        },
                        {
                            text: 'See my stash', onPress: () => {
                                navigation.navigate('Member', { screen: 'Student', params: { screen: 'Stashes' } })
                                dispatch(studentStoreStashActions.failure(null))
                                dispatch(studentStashesActions.init())
                            }
                        }])
                }

                {storeTransactionFreeSuccess &&
                    Alert.alert('Buy Free Course', storeTransactionFreeSuccess, [
                        {
                            text: 'See another', onPress: () => {
                                dispatch(studentStoreTransactionFreeActions.success(null))
                                dispatch(studentCoursesActions.init())
                                dispatch(studentTransactionsActions.init())
                            }
                        },
                        {
                            text: 'My courses', onPress: () => {
                                navigation.navigate('Member', { screen: 'Student', params: { screen: 'Courses' } })
                                dispatch(studentStoreTransactionFreeActions.success(null))
                                dispatch(studentCoursesActions.init())
                                dispatch(studentTransactionsActions.init())
                            }
                        }
                    ])
                }

                {storeTransactionFreeError &&
                    Alert.alert('Buy Free Course', storeTransactionFreeError,
                        [{
                            text: 'See another', onPress: () => {
                                dispatch(studentStoreTransactionFreeActions.failure(null))
                            }
                        },
                        {
                            text: 'My courses', onPress: () => {
                                navigation.navigate('Member', { screen: 'Student', params: { screen: 'Courses' } })
                                dispatch(studentStoreTransactionFreeActions.failure(null))
                                dispatch(studentCoursesActions.init())
                                dispatch(studentTransactionsActions.init())
                            }
                        }])
                }

                {storeTransactionSuccess &&
                    Alert.alert('Buy Course', storeTransactionSuccess, [
                        {
                            text: 'See another', onPress: () => {
                                dispatch(studentStoreTransactionActions.success(null))
                                dispatch(studentTransactionsActions.init())
                            }
                        },
                        {
                            text: 'Paid Now', onPress: () => {
                                navigation.navigate('Member', { screen: 'Student', params: { screen: 'Transactions' } })
                                dispatch(studentStoreTransactionActions.success(null))
                                dispatch(studentTransactionsActions.init())
                            }
                        }
                    ])
                }

                {storeTransactionError &&
                    Alert.alert('Buy Course', storeTransactionError,
                        [{
                            text: 'See another', onPress: () => {
                                dispatch(studentStoreTransactionActions.failure(null))
                            }
                        },
                        {
                            text: 'Paid Now', onPress: () => {
                                navigation.navigate('Member', { screen: 'Student', params: { screen: 'Transactions' } })
                                dispatch(studentStoreTransactionActions.failure(null))
                                dispatch(studentTransactionsActions.init())
                            }
                        }])
                }
            </View>
        </Layouts>
    )
}

export default Courses