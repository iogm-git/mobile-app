import { View, Text, TextInput } from 'react-native'
import React, { PropsWithChildren, useEffect } from 'react'
import Layouts from '@root/views/code/Layouts'
import { borderDefault, fontCustom, size, textCustom } from '@root/utils/Styles'
import SubmitComp from '@root/components/common/button/SubmitComp'
import NavigateComp from '@root/components/common/button/NavigateComp'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@root/redux/store'
import { instructorSectionsActions, instructorStoreSectionActions, instructorUpdateSectionActions } from '@root/redux/code/actions/member'
import { useForm } from '@root/utils/Form'
import { RouteProp, useRoute } from '@react-navigation/native'
import BadgeComp from '@root/components/common/alert/BadgeComp'
import ModalComp from '@root/components/common/alert/ModalComp'
import LoadingComp from '@root/components/common/LoadingComp'

type FormProps = PropsWithChildren<{
    type: string
}>

type RouteParams = {
    data?: any
}

const Form = ({ type }: FormProps) => {
    const { theme } = useSelector((state: RootState) => state.theme)

    const dispatch = useDispatch()

    const { data: storeSuccess, error: storeError, loading: storeLoading } = useSelector((state: RootState) => state.code.instructorStoreSectionResult)
    const { data: updateSuccess, error: updateError, loading: updateLoading } = useSelector((state: RootState) => state.code.instructorUpdateSectionResult)

    const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>()

    const {
        sectionId,
        sectionTitle,
        orderIn,

        courseId,
        courseTitle,
        price,
        iconSvg,
        level,
        status, } = route.params.data

    const initialState = {
        id: sectionId ? sectionId : '',
        course_id: courseId ? courseId : '',
        title: sectionTitle ? sectionTitle : '',
        order_in_course: orderIn ? orderIn : '',
    }
    const { formData, setFormData, handleCustomChange } = useForm(initialState)

    const modalClose = () => {
        dispatch(instructorSectionsActions.init(courseId))
        if (type === 'store') {
            setFormData({
                title: '',
                order_in_course: ''
            })
        }
        dispatch(instructorStoreSectionActions.success(null))
        dispatch(instructorUpdateSectionActions.success(null))
    }

    const errorClose = () => {
        type === 'store' ?
            dispatch(instructorStoreSectionActions.failure(null)) :
            dispatch(instructorUpdateSectionActions.failure(null))
    }

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <Text style={[textCustom(theme).textBold, { textTransform: 'capitalize' }]}>{type} Section</Text>
                <View>
                    <Text style={[fontCustom(theme).fontBold, { fontSize: size.m }]}>Title</Text>
                    <TextInput style={[
                        borderDefault(theme).borderS,
                        textCustom(theme).textRegular, {
                            paddingHorizontal: size.xs,
                            paddingVertical: size.xxs,
                            marginBottom: size.xxs
                        }]}
                        value={formData.title}
                        defaultValue={formData.title}
                        onChangeText={value => handleCustomChange(value, 'title')}
                    />
                    {((storeError && storeError.title) || (updateError && updateError.title)) &&
                        <BadgeComp text={storeError ? storeError.title[0] : updateError.title[0]} type='danger' onClose={errorClose} />}
                </View>
                <View>
                    <Text style={[fontCustom(theme).fontBold, { fontSize: size.m }]}>Order In Course</Text>
                    <TextInput style={[
                        borderDefault(theme).borderS,
                        textCustom(theme).textRegular, {
                            paddingHorizontal: size.xs,
                            paddingVertical: size.xxs,
                            marginBottom: size.xxs
                        }]}
                        keyboardType='numeric'
                        value={formData.order_in_course.toString()}
                        defaultValue={formData.order_in_course.toString()}
                        onChangeText={value => handleCustomChange(value, 'order_in_course')}
                    />
                    {((storeError && storeError.order_in_course) || (updateError && updateError.order_in_course)) &&
                        <BadgeComp text={storeError ? storeError.order_in_course[0] : updateError.order_in_course[0]} type='danger' onClose={errorClose} />}
                </View>
                {(storeLoading || updateLoading) ? <LoadingComp type='primary' /> :
                    <SubmitComp text='Submit' type='primary' onPress={() => {
                        if (type === 'store') {
                            dispatch(instructorStoreSectionActions.init(formData))
                        } else {
                            dispatch(instructorUpdateSectionActions.init(formData))
                        }
                    }
                    } />}

                <NavigateComp
                    text='Cancel'
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
                                    status: status,
                                }
                            }
                        }
                    }} />
            </View>
            {(storeSuccess || updateSuccess) &&
                <ModalComp title='Section' onClose={modalClose}>
                    <View style={{ rowGap: size.s }}>
                        <BadgeComp text={storeSuccess ? storeSuccess : updateSuccess} type='success' onClose={modalClose} />
                        <NavigateComp
                            text='My sections'
                            type='primary'
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
                                            status: status,
                                        }
                                    }
                                }
                            }}
                            onPress={modalClose} />
                    </View>
                </ModalComp>
            }
        </Layouts>
    )
}

export default Form