import { RouteProp, useRoute } from '@react-navigation/native'
import React, { PropsWithChildren } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, TextInput, ViewStyle } from 'react-native'

import Layouts from '@root/views/code/Layouts'

import { useForm } from '@root/utils/Form'
import { borderDefault, flexCustom, fontCustom, size, textCustom } from '@root/utils/Styles'

import BadgeComp from '@root/components/common/alert/BadgeComp'
import ModalComp from '@root/components/common/alert/ModalComp'
import SubmitComp from '@root/components/common/button/SubmitComp'
import LoadingComp from '@root/components/common/LoadingComp'
import NavigateComp from '@root/components/common/button/NavigateComp'

import { RootState } from '@root/redux/store'
import { studentAnswersActions, studentQuestionActions } from '@root/redux/code/actions/member'

type QuestionParams = PropsWithChildren<{
    data: any
}>

const Question = () => {
    const { theme } = useSelector((state: RootState) => state.theme)

    const { data: success, error, loading } = useSelector((state: RootState) => state.code.studentQuestionResult)

    const route = useRoute<RouteProp<{ params: QuestionParams }, 'params'>>()
    const { courseId, title } = route.params?.data

    const dispatch = useDispatch()

    const initialState = {
        course_id: courseId,
        question: ''
    }

    const { setFormData, handleCustomChange, formData } = useForm(initialState)

    const modalClose = () => {
        dispatch(studentQuestionActions.failure(null))
        dispatch(studentQuestionActions.success(null))
        dispatch(studentAnswersActions.init())
        setFormData(initialState)
    }

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <Text style={textCustom(theme).textBold}>Ask</Text>
                <View>
                    <Text style={[fontCustom(theme).fontBold, { fontSize: size.m }]}>Title</Text>
                    <TextInput readOnly defaultValue={title} style={[borderDefault(theme).borderS, textCustom(theme).textRegular, { paddingHorizontal: size.s }]} />
                </View>
                <View>
                    <Text style={[fontCustom(theme).fontBold, { fontSize: size.m }]}>My Question</Text>
                    <TextInput
                        style={[textCustom(theme).textRegular, borderDefault(theme).borderS, { paddingHorizontal: size.s, marginBottom: size.xxs }]}
                        multiline
                        numberOfLines={4}
                        onChangeText={value => handleCustomChange(value, 'question')}
                    />
                    {error && <BadgeComp text={error.question} type='danger' onClose={() => dispatch(studentQuestionActions.failure(null))} />}
                </View>
                {loading ? <LoadingComp type='primary' /> :
                    <SubmitComp text='Submit' type='primary' onPress={() => dispatch(studentQuestionActions.init(formData))} />}
            </View>

            {success && <ModalComp title='Question' onClose={modalClose}>
                <View style={{ rowGap: size.s }}>
                    <BadgeComp text={success} type='success' />
                    <View style={flexCustom.flexRowBetween as ViewStyle}>
                        <NavigateComp text='Ok' type='warning' onPress={modalClose} />
                        <NavigateComp
                            text='My answer'
                            type='primary'
                            to='Member'
                            isNested
                            nested={{ screen: 'Student', params: { screen: 'Answers' } }}
                            onPress={modalClose} />
                    </View>
                </View>

            </ModalComp>}

            <NavigateComp text='Cancel' type='warning' goBack />
        </Layouts>
    )
}

export default Question