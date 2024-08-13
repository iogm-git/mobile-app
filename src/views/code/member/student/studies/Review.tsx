import { TouchableOpacity } from 'react-native-gesture-handler'
import { RouteProp, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, ViewStyle } from 'react-native'

import Layouts from '@root/views/code/Layouts'

import { useForm } from '@root/utils/Form'
import { borderDefault, buttonDefault, color, flexCustom, fontCustom, size, textCustom } from '@root/utils/Styles'

import BadgeComp from '@root/components/common/alert/BadgeComp'
import ModalComp from '@root/components/common/alert/ModalComp'
import StarRating from '@root/components/common/StarComp'
import SubmitComp from '@root/components/common/button/SubmitComp'
import LoadingComp from '@root/components/common/LoadingComp'
import NavigateComp from '@root/components/common/button/NavigateComp'

import { RootState } from '@root/redux/store'

import ClickIcon from '@svg/common/code/click'
import { studentReviewsActions, studentStoreReviewActions, studentUpdateReviewActions } from '@root/redux/code/actions/member'

type RouteParams = {
    data: any
};

type ScreenProps = {
    type: string
}

const Review = ({ type }: ScreenProps) => {
    const { theme } = useSelector((state: RootState) => state.theme)

    const { data: storeSuccess, error: storeError, loading: storeLoading } = useSelector((state: RootState) => state.code.studentStoreReviewResult)
    const { data: updateSuccess, error: updateError, loading: updateLoading } = useSelector((state: RootState) => state.code.studentUpdateReviewResult)

    const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>()
    const { courseId, title, rating, review } = route.params.data

    useEffect(() => {

    }, [
        storeSuccess, storeError, storeLoading,
        updateSuccess, updateError, updateLoading
    ])

    const initialState = {
        course_id: courseId && courseId,
        rating: rating ? rating : '',
        review: review ? review : ''
    }

    const { formData, handleCustomChange, setFormData } = useForm(initialState)

    const dispatch = useDispatch()

    const [star, setStar] = useState(initialState.rating)

    const inputRating = [1, 2, 3, 4, 5]

    const modalClose = () => {
        dispatch(studentStoreReviewActions.success(null))
        dispatch(studentUpdateReviewActions.success(null))
        dispatch(studentStoreReviewActions.failure(null))
        dispatch(studentUpdateReviewActions.failure(null))
        dispatch(studentReviewsActions.init())
        setFormData({
            rating: 0,
            review: ''
        })
    }

    const errorClose = () => {
        dispatch(studentStoreReviewActions.failure(null))
        dispatch(studentUpdateReviewActions.failure(null))
    }

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <Text style={textCustom(theme).textBold}>{type === 'update' && type} Review Course</Text>
                <View>
                    <Text style={[fontCustom(theme).fontBold, { fontSize: size.m }]}>Title</Text>
                    <TextInput readOnly defaultValue={title} style={[{ paddingHorizontal: size.xxs }, borderDefault(theme).borderS, textCustom(theme).textRegular]} />
                </View>
                <View style={{ rowGap: 2 }}>
                    <Text style={[fontCustom(theme).fontBold, { fontSize: size.m }]}>My Review</Text>
                    <TextInput
                        style={[{ paddingHorizontal: size.xxs }, textCustom(theme).textRegular, borderDefault(theme).borderS]}
                        multiline
                        numberOfLines={4}
                        value={formData.review}
                        defaultValue={formData.review}
                        onChangeText={value => handleCustomChange(value, 'review')}
                    />
                    {(storeError || updateError) && (storeError.review || updateError.review) &&
                        <BadgeComp text={storeError.review ? storeError.review : updateError.review} type='danger' onClose={errorClose} />}
                </View>
                <View style={{ rowGap: 2 }}>
                    <Text style={[fontCustom(theme).fontBold, { fontSize: size.m }]}>Rating</Text>
                    <StarRating star={star} />
                    <View style={[flexCustom.flexRowStart as ViewStyle, { gap: size.xxs }]}>
                        {inputRating.map((value: number) => (
                            <TouchableOpacity onPress={() => { setStar(value); handleCustomChange(value, 'rating') }} key={value} style={[
                                buttonDefault(theme).buttonSmall as ViewStyle,
                                { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', columnGap: size.m / 2 }
                            ]}>
                                <Text style={textCustom(theme).textLight}>{value}</Text>
                                <ClickIcon width={size.m} height={size.m} fill={color.blue} />
                            </TouchableOpacity>
                        ))}
                    </View>
                    {(storeError || updateError) && (storeError.rating || updateError.rating) &&
                        <BadgeComp text={storeError.rating ? storeError.rating : updateError.rating} type='danger' onClose={errorClose} />}
                </View>
                {(storeLoading || updateLoading) ? <LoadingComp type='primary' /> :
                    <SubmitComp text='Submit' type='primary' onPress={() => {
                        type === 'store' ? dispatch(studentStoreReviewActions.init(formData)) :
                            dispatch(studentUpdateReviewActions.init(formData))
                    }} />}
            </View>
            <NavigateComp text='Cancel' type='warning' goBack />

            {(storeSuccess || updateSuccess) && <ModalComp title={`${type} Review Course`} onClose={modalClose}>
                <View style={{ rowGap: size.s }}>
                    <BadgeComp text={storeSuccess ? storeSuccess : updateSuccess} type='success' />
                    <View style={flexCustom.flexRowBetween as ViewStyle}>
                        <NavigateComp
                            onPress={modalClose}
                            text='My Reviews'
                            type='primary'
                            to='Member'
                            isNested
                            nested={{ screen: 'Student', params: { screen: 'Reviews' } }} />
                        <NavigateComp
                            onPress={modalClose}
                            text='Back'
                            type='warning'
                            goBack />
                    </View>
                </View>
            </ModalComp>}
        </Layouts>
    )
}

export default Review