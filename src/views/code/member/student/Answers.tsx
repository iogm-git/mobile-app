import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { View, Text, ScrollView, ViewStyle } from 'react-native'

import Layouts from '../../Layouts'

import { CodeTabsStackParamList } from '@root/utils/Navigation'
import { flexCustom, size, textCustom } from '@root/utils/Styles'

import CardComp from '@root/components/specific/code/member/card/CardComp'
import BadgeComp from '@root/components/common/alert/BadgeComp'
import HandleComp from '@root/components/common/button/HandleComp'
import ElementComp from '@root/components/specific/code/member/card/ElementComp'
import LoadingComp from '@root/components/common/LoadingComp'
import NavigateComp from '@root/components/common/button/NavigateComp'
import PaginationComp from '@root/components/common/PaginationComp'

import { RootState } from '@root/redux/store'
import { studentAnswersActions } from '@root/redux/code/actions/member'

const Answers = () => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    const dispatch = useDispatch()

    const { data: { answers, categories }, loading: answersLoading } = useSelector((state: RootState) => state.code.studentAnswersResult)

    const navigation = useNavigation<NavigationProp<CodeTabsStackParamList>>()

    const [category, setCategory] = useState('all')
    const [orderBy, setOrderBy] = useState('new')
    const [page, setPage] = useState(1)

    useEffect(() => { }, [answers])

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <Text style={textCustom(theme).textBold}>Answers</Text>

                {!answers ? <BadgeComp text='No Answer' type='warning' /> :
                    answersLoading ? <LoadingComp type='primary' /> :
                        <>
                            <View style={{ rowGap: size.xxs }}>
                                <Text style={textCustom(theme).textLight}>Categories :</Text>
                                <ScrollView horizontal>
                                    <View style={[flexCustom.flexRowStart as ViewStyle, { flexWrap: 'nowrap' }]}>
                                        <HandleComp small text='All' type='text' active={category === 'all'} onPress={() => {
                                            setPage(1)
                                            setCategory('all')
                                            dispatch(studentAnswersActions.init(1, 'all', orderBy))
                                        }} />
                                        {categories.map((value: any, index: number) => (
                                            <HandleComp small key={index} text={value} type='text' active={category === value} onPress={() => {
                                                setPage(1)
                                                setCategory(value)
                                                dispatch(studentAnswersActions.init(1, value, orderBy))
                                            }} />
                                        ))}
                                    </View>
                                </ScrollView>
                            </View>

                            <View style={{ rowGap: size.xxs }}>
                                <Text style={textCustom(theme).textLight}>Filter :</Text>
                                <View style={flexCustom.flexRowStart as ViewStyle}>
                                    <HandleComp small text='New' type='text' active={orderBy === 'new'} onPress={() => {
                                        setPage(1)
                                        setOrderBy('new')
                                        dispatch(studentAnswersActions.init(1, category, 'new'))
                                    }} />
                                    <HandleComp small text='Old' type='text' active={orderBy === 'old'} onPress={() => {
                                        setPage(1)
                                        setOrderBy('old')
                                        dispatch(studentAnswersActions.init(1, category, 'old'))
                                    }} />
                                </View>
                            </View>

                            <PaginationComp data={answers.links} onPageChange={value => {
                                setPage(page)
                                setOrderBy('new')
                                setCategory('all')
                                dispatch(studentAnswersActions.init(value, 'all', 'new'))
                            }} />

                            <View style={{ rowGap: size.m }}>
                                {answers.data.map((value: any, index: number) => (
                                    <CardComp key={index} order={index + 1}>
                                        <ElementComp keyword='course' value={value.title} />
                                        <ElementComp keyword='instructor' value={value.name} />
                                        <ElementComp keyword='created at' value={value.created_at} />
                                        <ElementComp keyword='question' value={value.question} />
                                        <ElementComp keyword='answer' value={value.answer === null ? '-' : value.answer} />
                                    </CardComp>
                                ))}
                            </View>
                            <PaginationComp data={answers.data.links} onPageChange={value => {
                                setPage(page)
                                setOrderBy('new')
                                setCategory('all')
                                dispatch(studentAnswersActions.init(value, 'all', 'new'))
                            }} />
                        </>
                }
            </View>
            <NavigateComp text='See my courses' type='primary' to='Member' isNested nested={{ screen: 'Student', params: { screen: 'Courses' } }} />
        </Layouts>
    )
}

export default Answers