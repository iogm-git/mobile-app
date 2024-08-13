import { useDispatch, useSelector } from 'react-redux'
import React, { PropsWithChildren, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ViewStyle } from 'react-native'

import { borderDefault, buttonCustom, color, flexCustom, fontCustom, size, textCustom } from '@root/utils/Styles'

import CardComp from '../card/CardComp'
import SubmitComp from '@root/components/common/button/SubmitComp'
import ElementComp from '../card/ElementComp'

import { RootState } from '@root/redux/store'
import HandleComp from '@root/components/common/button/HandleComp'
import BadgeComp from '@root/components/common/alert/BadgeComp'
import { instructorQuestionsActions, instructorStoreAnswerActions, instructorUpdateAnswerActions } from '@root/redux/code/actions/member'
import ModalComp from '@root/components/common/alert/ModalComp'
import LoadingComp from '@root/components/common/LoadingComp'
import { useForm } from '@root/utils/Form'


type CardQuestionsProps = PropsWithChildren<{
    order: number
    id: string | number
    date: string
    studentName: string
    question: string,
    questionId: string | number
    answer: string
}>

const CardQuestions = ({ order, id, date, studentName, question, questionId, answer }: CardQuestionsProps) => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    const [editMode, setEditMode] = useState(false)

    const dispatch = useDispatch()

    const { data: storeAnswerSuccess, error: storeAnswerError, loading: storeAnswerLoading } = useSelector((state: RootState) => state.code.instructorStoreAnswerResult)
    const { data: updateAnswerSuccess, error: updateAnswerError, loading: updateAnswerLoading } = useSelector((state: RootState) => state.code.instructorUpdateAnswerResult)

    const modalClose = () => {
        dispatch(instructorQuestionsActions.init())
        dispatch(instructorStoreAnswerActions.success(null))
        dispatch(instructorUpdateAnswerActions.success(null))
    }

    const initialState = {
        question_id: questionId ? questionId : id,
        answer: answer ? answer : ''
    }

    const { formData, handleCustomChange } = useForm(initialState)

    return (
        <CardComp order={order} additional={
            <Text style={textCustom(theme).textLight}>{date}</Text>
        }>
            <View style={[borderDefault(theme).borderS, { padding: size.xxs, rowGap: size.xs }]}>
                <Text style={textCustom(theme).textRegular}>Student</Text>
                <ElementComp keyword='name' value={studentName} />
                <ElementComp keyword='question' value={question} />
            </View>

            {editMode ?
                <>
                    <View style={[borderDefault(theme).borderS, { padding: size.xxs, rowGap: size.xs }]}>
                        <Text style={[fontCustom(theme).fontMedium, { fontSize: size.s, textAlign: 'center' }]}>Your Answer</Text>
                        <TextInput
                            value={formData.answer}
                            defaultValue={formData.answer}
                            onChangeText={value => handleCustomChange(value, 'answer')}
                            style={[
                                textCustom(theme).textRegular,
                                borderDefault(theme).borderS, {
                                    backgroundColor: colors.bg,
                                    paddingHorizontal: size.s
                                }]}
                            multiline
                            numberOfLines={2}
                        />

                        {(storeAnswerError || updateAnswerError) &&
                            <BadgeComp
                                text={storeAnswerError ? storeAnswerError.answer : updateAnswerError.answer}
                                type='danger'
                                onClose={() => {
                                    dispatch(instructorStoreAnswerActions.failure(null))
                                    dispatch(instructorUpdateAnswerActions.failure(null))
                                }} />}

                        {(storeAnswerLoading || updateAnswerLoading) ? <LoadingComp type='primary' /> :
                            <View style={flexCustom.flexRowBetween as ViewStyle}>
                                <SubmitComp text='Submit' type='primary' onPress={() => {
                                    questionId === null ?
                                        dispatch(instructorStoreAnswerActions.init(formData)) :
                                        dispatch(instructorUpdateAnswerActions.init(formData))
                                }} />
                                <TouchableOpacity onPress={() => setEditMode(false)} style={[buttonCustom(theme).buttonCom as ViewStyle, borderDefault(theme).borderS, { backgroundColor: colors.bg, borderColor: color.orange }]}>
                                    <Text style={[textCustom(theme).textLight, { color: color.orange }]}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        }
                        {(storeAnswerSuccess || updateAnswerSuccess) &&
                            <ModalComp title='Answer' onClose={modalClose}>
                                <View style={{ rowGap: size.s }}>
                                    <BadgeComp text={storeAnswerSuccess ? storeAnswerSuccess : updateAnswerSuccess} type='success' />
                                    <HandleComp type='primary' text='Ok' onPress={modalClose} />
                                </View>
                            </ModalComp>}
                    </View>
                </>
                :
                <ElementComp keyword='answer' value={answer} />
            }

            <View style={flexCustom.flexRowBetween as ViewStyle}>
                {!editMode &&
                    <HandleComp small text='Edit' type='warning' onPress={() => setEditMode(!editMode)} />
                }
                <Text style={textCustom(theme).textLight}>Tag: Php</Text>
            </View>
        </CardComp>
    )
}

export default CardQuestions
