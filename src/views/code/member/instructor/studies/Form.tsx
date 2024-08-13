import { useDispatch, useSelector } from 'react-redux'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ViewStyle } from 'react-native'

import Layouts from '@root/views/code/Layouts'

import { useForm } from '@root/utils/Form'
import { borderDefault, flexCustom, fontCustom, size, textCustom } from '@root/utils/Styles'

import ModalComp from '@root/components/common/alert/ModalComp'
import BadgeComp from '@root/components/common/alert/BadgeComp'
import LoadingComp from '@root/components/common/LoadingComp'
import NavigateComp from '@root/components/common/button/NavigateComp'

import SubmitComp from '@root/components/common/button/SubmitComp'

import { RootState } from '@root/redux/store'
import { instructorStoreCourseActions, instructorStudiesActions, instructorUpdateCourseActions } from '@root/redux/code/actions/member'
import { RouteProp, useRoute } from '@react-navigation/native'
import ShowIconProgrammingComp from '@root/components/specific/code/member/instructor/ShowIconProgrammingComp'

type FormProps = PropsWithChildren<{
    type: string
}>

type RouteParams = {
    data?: any
}

const Form = ({ type }: FormProps) => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    const dispatch = useDispatch()

    const { data: storeSuccess, error: storeError, loading: storeLoading } = useSelector((state: RootState) => state.code.instructorStoreCourseResult)
    const { data: updateSuccess, error: updateError, loading: updateLoading } = useSelector((state: RootState) => state.code.instructorUpdateCourseResult)

    const modalClose = () => {
        dispatch(instructorStudiesActions.init())
        if (type === 'store') {
            setFormData({
                title: '',
                description: '',
                price: '',
                icon_svg: '',
                level: '',
                status: ''
            })
        }
        dispatch(instructorStoreCourseActions.success(null))
        dispatch(instructorUpdateCourseActions.success(null))
    }

    const errorClose = () => {
        type === 'store' ?
            dispatch(instructorStoreCourseActions.failure(null)) :
            dispatch(instructorUpdateCourseActions.failure(null))
    }

    const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>()

    const { courseId, courseTitle, description, price, iconSvg, level, status } = route.params.data

    const initialState = {
        id: courseId ? courseId : '',
        title: courseTitle ? courseTitle : '',
        description: description ? description : '',
        price: price ? price : '',
        icon_svg: iconSvg ? iconSvg : '',
        level: level ? level : '',
        status: status ? status : ''
    }

    const { formData, setFormData, handleCustomChange } = useForm(initialState)

    const [iconShow, setIconShow] = useState(false)
    const [activeLevel, setActiveLevel] = useState('')
    const [activeStatus, setActiveStatus] = useState('')

    useEffect(() => {
        if (level) {
            setActiveLevel(level)
            setActiveStatus(status)
        }
    }, [])

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <Text style={[textCustom(theme).textBold, { textTransform: 'capitalize' }]}>{type} Course</Text>

                <NavigateComp
                    text='Cancel'
                    type='warning'
                    to='Member'
                    isNested
                    nested={{
                        screen: 'Instructor',
                        params: {
                            screen: 'Courses',
                        }
                    }} />

                <View>
                    <Text style={[fontCustom(theme).fontMedium, { fontSize: size.m }]}>Title</Text>
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
                    <Text style={[fontCustom(theme).fontMedium, { fontSize: size.m }]}>Description</Text>
                    <TextInput
                        style={[
                            textCustom(theme).textRegular,
                            borderDefault(theme).borderS, {
                                paddingHorizontal: size.xs,
                                paddingVertical: size.xxs,
                                marginBottom: size.xxs
                            }]}
                        value={formData.description}
                        defaultValue={formData.description}
                        onChangeText={value => handleCustomChange(value, 'description')}
                        multiline
                        numberOfLines={4}
                    />
                    {((storeError && storeError.description) || updateError && updateError.description) &&
                        <BadgeComp text={storeError ? storeError.description[0] : updateError.description[0]} type='danger' onClose={errorClose} />}

                    <View>
                        <Text style={[fontCustom(theme).fontMedium, { fontSize: size.m }]}>Price</Text>
                        <TextInput style={[
                            borderDefault(theme).borderS,
                            textCustom(theme).textRegular, {
                                paddingHorizontal: size.xs,
                                paddingVertical: size.xxs,
                                marginBottom: size.xxs
                            }]}
                            value={formData.price}
                            defaultValue={formData.price}
                            keyboardType='numeric'
                            onChangeText={value => handleCustomChange(value, 'price')} />
                        {((storeError && storeError.price) || updateError && updateError.price) &&
                            <BadgeComp text={storeError ? storeError.price[0] : updateError.price[0]} type='danger' onClose={errorClose} />}
                    </View>

                    <View>
                        <Text style={[fontCustom(theme).fontMedium, { fontSize: size.m }]}>Icon Svg</Text>
                        <TouchableOpacity onPress={() => setIconShow(true)}
                            style={[
                                borderDefault(theme).borderS, {
                                    paddingHorizontal: size.xs,
                                    paddingVertical: size.xxs,
                                    marginBottom: size.xxs
                                }]}
                        >
                            <Text style={[textCustom(theme).textRegular, { textTransform: 'capitalize' }]}>{formData.icon_svg === '' ? '--Choise Icon--' : formData.icon_svg}</Text>
                        </TouchableOpacity>
                        {((storeError && storeError.icon_svg) || updateError && updateError.icon_svg) &&
                            <BadgeComp text={storeError ? storeError.icon_svg[0] : updateError.icon_svg[0]} type='danger' onClose={errorClose} />}
                    </View>

                    {iconShow && <ShowIconProgrammingComp onClose={() => setIconShow(false)} onChange={value => { handleCustomChange(value, 'icon_svg'); setIconShow(false) }} />}

                    <View>
                        <Text style={[fontCustom(theme).fontMedium, { fontSize: size.m }]}>Level</Text>
                        <View style={[flexCustom.flexRowStart as ViewStyle, { marginBottom: size.xxs }]}>
                            <TouchableOpacity onPress={() => { handleCustomChange('junior', 'level'); setActiveLevel('junior') }} style={[
                                borderDefault(theme).borderS, {
                                    paddingHorizontal: size.m,
                                    paddingVertical: size.xxs,
                                    backgroundColor: activeLevel === 'junior' ? colors.text : colors.bg
                                }]}>
                                <Text style={[textCustom(theme).textRegular, { color: activeLevel === 'junior' ? colors.bg : colors.text }]}>Junior</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { handleCustomChange('middle', 'level'); setActiveLevel('middle') }} style={[
                                borderDefault(theme).borderS, {
                                    paddingHorizontal: size.m,
                                    paddingVertical: size.xxs,
                                    backgroundColor: activeLevel === 'middle' ? colors.text : colors.bg
                                }]}>
                                <Text style={[textCustom(theme).textRegular, { color: activeLevel === 'middle' ? colors.bg : colors.text }]}>Midle</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { handleCustomChange('senior', 'level'); setActiveLevel('senior') }} style={[
                                borderDefault(theme).borderS, {
                                    paddingHorizontal: size.m,
                                    paddingVertical: size.xxs,
                                    backgroundColor: activeLevel === 'senior' ? colors.text : colors.bg
                                }]}>
                                <Text style={[textCustom(theme).textRegular, { color: activeLevel === 'senior' ? colors.bg : colors.text }]}>Senior</Text>
                            </TouchableOpacity>
                        </View>
                        {((storeError && storeError.level) || updateError && updateError.level) &&
                            <BadgeComp text={storeError ? storeError.level[0] : updateError.level[0]} type='danger' onClose={errorClose} />}
                    </View>

                    <View>
                        <Text style={[fontCustom(theme).fontMedium, { fontSize: size.m }]}>Visibility</Text>
                        <View style={[flexCustom.flexRowStart as ViewStyle, { marginBottom: size.xxs }]}>
                            <TouchableOpacity onPress={() => { handleCustomChange('public', 'status'); setActiveStatus('public') }} style={[
                                borderDefault(theme).borderS, {
                                    paddingHorizontal: size.m,
                                    paddingVertical: size.xxs,
                                    backgroundColor: activeStatus === 'public' ? colors.text : colors.bg
                                }]}>
                                <Text style={[textCustom(theme).textRegular, { color: activeStatus === 'public' ? colors.bg : colors.text }]}>Public</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { handleCustomChange('student', 'status'); setActiveStatus('student') }} style={[
                                borderDefault(theme).borderS, {
                                    paddingHorizontal: size.m,
                                    paddingVertical: size.xxs,
                                    backgroundColor: activeStatus === 'student' ? colors.text : colors.bg
                                }]}>
                                <Text style={[textCustom(theme).textRegular, { color: activeStatus === 'student' ? colors.bg : colors.text }]}>Student</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { handleCustomChange('private', 'status'); setActiveStatus('private') }} style={[
                                borderDefault(theme).borderS, {
                                    paddingHorizontal: size.m,
                                    paddingVertical: size.xxs,
                                    backgroundColor: activeStatus === 'private' ? colors.text : colors.bg
                                }]}>
                                <Text style={[textCustom(theme).textRegular, { color: activeStatus === 'private' ? colors.bg : colors.text }]}>Private</Text>
                            </TouchableOpacity>
                        </View>
                        {((storeError && storeError.status) || updateError && updateError.status) &&
                            <BadgeComp text={storeError ? storeError.status[0] : updateError.status[0]} type='danger' onClose={errorClose} />}
                    </View>

                </View>

                {(storeLoading || updateLoading) ? <LoadingComp type='primary' /> :
                    <SubmitComp text='Submit' type='primary' onPress={() => {
                        if (type === 'store') {
                            dispatch(instructorStoreCourseActions.init(formData))
                        } else {
                            dispatch(instructorUpdateCourseActions.init(formData))
                        }
                    }
                    } />}

                {(storeSuccess || updateSuccess) &&
                    <ModalComp title='Course' onClose={modalClose}>
                        <View style={{ rowGap: size.s }}>
                            <BadgeComp text={storeSuccess ? storeSuccess : updateSuccess} type='success' onClose={modalClose} />
                            <NavigateComp text='My courses' type='primary' to='Courses' onPress={modalClose} />
                        </View>
                    </ModalComp>
                }
            </View>
        </Layouts>
    )
}

export default Form
