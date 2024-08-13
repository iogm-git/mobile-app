import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, ScrollView, ViewStyle } from 'react-native'

import Layouts from '../../Layouts'

import { flexCustom, size, textCustom } from '@root/utils/Styles'

import { RootState } from '@root/redux/store'
import { instructorQuestionsActions } from '@root/redux/code/actions/member'

import BadgeComp from '@root/components/common/alert/BadgeComp'
import HandleComp from '@root/components/common/button/HandleComp'
import LoadingComp from '@root/components/common/LoadingComp'
import CardQuestions from '@root/components/specific/code/member/instructor/CardQuestions'
import PaginationComp from '@root/components/common/PaginationComp'

const Questions = () => {
    const { theme } = useSelector((state: RootState) => state.theme)

    const [page, setPage] = useState(1)
    const [courseTag, setCourseTag] = useState('')
    const [orderBy, setOrderBy] = useState('latest')

    const { data: questions, loading: questionsLoading } = useSelector((state: RootState) => state.code.instructorQuestionsResult)

    const { data, links } = questions.questions

    const dispatch = useDispatch()

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <Text style={textCustom(theme).textBold}>Questions</Text>

                {questionsLoading ? <LoadingComp type='primary' /> : !data ? <BadgeComp text='No questions' type='warning' /> :
                    <>
                        <View style={{ rowGap: size.xxs }}>
                            <Text style={textCustom(theme).textLight}>Categories :</Text>
                            <ScrollView horizontal>
                                <View style={[flexCustom.flexRowStart as ViewStyle, { flexWrap: 'nowrap' }]}>
                                    <HandleComp active={courseTag === ''} text='All' type='text' small onPress={() => {
                                        setCourseTag('')
                                        setPage(1)
                                        dispatch(instructorQuestionsActions.init('', orderBy, 1))
                                    }} />
                                    {questions.categories.map((value: any, index: any) => (
                                        <HandleComp active={courseTag === value} key={index} text={value} type='text' small onPress={() => {
                                            setCourseTag(value)
                                            setPage(1)
                                            dispatch(instructorQuestionsActions.init(value, orderBy, 1))
                                        }} />
                                    ))}
                                </View>
                            </ScrollView>
                        </View>

                        <View style={{ rowGap: size.xxs }}>
                            <Text style={textCustom(theme).textLight}>Filter :</Text>
                            <ScrollView horizontal>
                                <View style={[flexCustom.flexRowStart as ViewStyle, { flexWrap: 'nowrap' }]}>
                                    <HandleComp active={orderBy === 'latest'} text={'new'} type='text' small onPress={() => {
                                        setOrderBy('latest')
                                        setPage(1)
                                        dispatch(instructorQuestionsActions.init(courseTag, 'latest', 1))
                                    }} />
                                    <HandleComp active={orderBy === 'old'} text={'old'} type='text' small onPress={() => {
                                        setOrderBy('old')
                                        setPage(1)
                                        dispatch(instructorQuestionsActions.init(courseTag, 'old', 1))
                                    }} />
                                </View>
                            </ScrollView>
                        </View>

                        <PaginationComp data={links} page={page} onPageChange={value => {
                            setPage(parseInt(value))
                            dispatch(instructorQuestionsActions.init(courseTag, orderBy, value))
                        }} />

                        {data.map((value: any, index: any) => (
                            <CardQuestions
                                order={1}
                                id={value.id}
                                answer={value.answer}
                                date={value.created_at}
                                question={value.question}
                                questionId={value.question_id}
                                studentName={value.student.name}
                                key={index + 1}
                            />
                        ))}
                    </>
                }

            </View>
        </Layouts>
    )
}

export default Questions