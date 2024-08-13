import React from 'react'
import { View, Text } from 'react-native'
import { RootState } from '@root/redux/store'
import { useDispatch, useSelector } from 'react-redux'

import Layouts from '../../Layouts'

import { fontCustom, size, textCustom } from '@root/utils/Styles'

import CardComp from '@root/components/specific/code/member/card/CardComp'
import BadgeComp from '@root/components/common/alert/BadgeComp'
import StarRating from '@root/components/common/StarComp'
import ElementComp from '@root/components/specific/code/member/card/ElementComp'
import LoadingComp from '@root/components/common/LoadingComp'
import PaginationComp from '@root/components/common/PaginationComp'

import { instructorCourseReviewsActions } from '@root/redux/code/actions/member'

const Reviews = () => {
    const { theme } = useSelector((state: RootState) => state.theme)

    const dispatch = useDispatch()

    const { data: reviews, loading: reviewsLoading } = useSelector((state: RootState) => state.code.instructorCourseReviewsResult)

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <Text style={textCustom(theme).textBold}>Reviews</Text>
                {reviewsLoading ? <LoadingComp type='primary' /> : (!reviews || !reviews.data) ? <BadgeComp text='No reviews available' type='warning' /> :
                    <>
                        <PaginationComp data={reviews.links} onPageChange={value => dispatch(instructorCourseReviewsActions.init(value))} />
                        {reviews.data.map((value: any, index: number) => (
                            <CardComp order={index + 1} key={index} additional={
                                <Text style={fontCustom(theme).fontLight}>
                                    {value.created_at}
                                </Text>}>
                                <ElementComp keyword='student name' value={value.student.name} />
                                <ElementComp keyword='course title' value={value.course.title} />
                                <ElementComp keyword='review' value={value.review} />
                                <View style={{ alignSelf: 'center' }}>
                                    <StarRating star={value.rating > 5 ? Math.round(value.rating / 2) : value.rating} />
                                </View>
                            </CardComp>
                        ))}
                    </>
                }
            </View>
        </Layouts>
    )
}

export default Reviews