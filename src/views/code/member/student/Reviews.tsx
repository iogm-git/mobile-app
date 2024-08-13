import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, ViewStyle, Alert } from 'react-native'

import Layouts from '../../Layouts'

import { CodeTabsStackParamList } from '@root/utils/Navigation'
import { borderDefault, flexCustom, fontCustom, size, textCustom } from '@root/utils/Styles'

import CardComp from '@root/components/specific/code/member/card/CardComp'
import BadgeComp from '@root/components/common/alert/BadgeComp'
import ModalComp from '@root/components/common/alert/ModalComp'
import StarRating from '@root/components/common/StarComp'
import HandleComp from '@root/components/common/button/HandleComp'
import LoadingComp from '@root/components/common/LoadingComp'
import PaginationComp from '@root/components/common/PaginationComp'

import { RootState } from '@root/redux/store'

import { studentDestroyReviewActions, studentReviewsActions } from '@root/redux/code/actions/member'

const Reviews = () => {
    const { theme } = useSelector((state: RootState) => state.theme)

    const { data: reviews, loading: reviewsLoading } = useSelector((state: RootState) => state.code.studentReviewsResult)
    const { data: deleteSuccess, loading: deleteLoading } = useSelector((state: RootState) => state.code.studentDestroyReviewResult)

    const navigation = useNavigation<NavigationProp<CodeTabsStackParamList>>()

    const dispatch = useDispatch()

    const styles = StyleSheet.create({
        text: {
            fontSize: size.m,
            textAlign: 'center'
        }
    })

    useEffect(() => {

    }, [reviews, deleteSuccess, deleteLoading])

    const modalClose = () => {
        dispatch(studentDestroyReviewActions.success(null))
        dispatch(studentReviewsActions.init())
    }

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <Text style={textCustom(theme).textBold}>Reviews</Text>
                {reviewsLoading ? <LoadingComp type='primary' /> : (!reviews || !(reviews && reviews.data.length > 0)) ? <BadgeComp text='You have not reviewed the course' type='warning' /> :
                    <>
                        <Text>sad</Text>
                        <PaginationComp data={reviews.links} onPageChange={value => dispatch(studentReviewsActions.init(value))} />
                        <View style={{ rowGap: size.m }}>
                            {reviews.data.map((value: any, index: number) => (
                                <CardComp key={index} order={1} additional={
                                    <Text style={fontCustom(theme).fontLight}>{value.created_at}</Text>
                                }>
                                    <Text style={[fontCustom(theme).fontBold, styles.text]}>{value.course.title}</Text>
                                    <Text style={[fontCustom(theme).fontRegular, borderDefault(theme).borderS, styles.text, { padding: size.xs }]}>{value.review}</Text>
                                    <View style={{ alignSelf: 'center' }}><StarRating star={value.rating} /></View>

                                    <View style={flexCustom.flexRowCenter as ViewStyle}>
                                        <HandleComp text='Edit' type='warning' small onPress={() =>
                                            navigation.navigate(
                                                'Member', {
                                                screen: 'Student',
                                                params: {
                                                    screen: 'UpdateReview',
                                                    params: {
                                                        data: {
                                                            title: value.course.title,
                                                            courseId: value.course_id,
                                                            review: value.review,
                                                            rating: value.rating
                                                        }
                                                    }
                                                }
                                            }

                                            )} />
                                        {deleteLoading ? <LoadingComp type='primary' /> :
                                            <HandleComp text='Delete' type='danger' small onPress={() => {
                                                Alert.alert(
                                                    'Delete Review',
                                                    `Course title : ${value.course.title}`,
                                                    [
                                                        { text: 'Cancel' },
                                                        { text: 'Delete', onPress: dispatch(studentDestroyReviewActions.init(value.course_id)) }])
                                            }} />}
                                    </View>
                                </CardComp>
                            ))}
                        </View>
                        <PaginationComp data={reviews.links} onPageChange={value => dispatch(studentReviewsActions.init(value))} />
                    </>
                }
                {deleteSuccess && <ModalComp title='Delete Review' onClose={modalClose}>
                    <View style={{ rowGap: size.s }}>
                        <BadgeComp text={deleteSuccess} type='success' />
                        <HandleComp text='Ok' type='primary' onPress={modalClose} />
                    </View>
                </ModalComp>}
            </View>

        </Layouts>
    )
}

export default Reviews