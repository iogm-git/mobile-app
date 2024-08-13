import { TouchableOpacity } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import DeleteIcon from '@svg/member/shop/delete'

import { RootState } from '@root/redux/store'
import { destroyStashActions } from '@root/redux/shop/actions/member'

import LoadingComp from '@root/components/common/LoadingComp'

import { size } from '@root/utils/Styles'

type DeleteWebProps = PropsWithChildren<{
    id: number | undefined
}>

const DeleteWebComp = ({ id }: DeleteWebProps) => {
    const { colors } = useSelector((state: RootState) => state.theme)

    const dispatch = useDispatch()

    const { loading } = useSelector((state: RootState) => state.shop.destroyStashResult)

    return (
        loading ? <LoadingComp type='primary' /> :
            <TouchableOpacity onPress={() => {
                dispatch(destroyStashActions.init(id))
            }}>
                <DeleteIcon width={size.x} height={size.x} fill={colors.link} />
            </TouchableOpacity>
    )
}

export default DeleteWebComp