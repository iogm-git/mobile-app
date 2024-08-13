import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text, View } from 'react-native'

import Layouts from '../Layouts'

import BadgeComp from '@root/components/common/alert/BadgeComp'
import HandleComp from '@root/components/common/button/HandleComp'
import LoadingComp from '@root/components/common/LoadingComp'
import ImgCardComp from '@root/components/specific/shop/ImgCardComp'
import NavigateComp from '@root/components/common/button/NavigateComp'
import PaginationComp from '@root/components/common/PaginationComp'

import { size, textCustom } from '@root/utils/Styles'

import { RootState } from '@root/redux/store'

import { downloadWebActions, transactionHavePaidActions } from '@root/redux/shop/actions/member'

const Download = () => {
    const { theme } = useSelector((state: RootState) => state.theme)

    const dispatch = useDispatch()

    const { loading: downloadWebLoading } = useSelector((state: RootState) => state.shop.downloadWebResult)
    const { data, loading } = useSelector((state: RootState) => state.shop.transactionHavePaidResult)

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <Text style={textCustom(theme).textBold}>Download</Text>
                <View style={{
                    rowGap: size.m
                }}>
                    {loading ? <LoadingComp type='primary' /> : data && data.data && data.data.length > 0 ?
                        <>
                            {data.data.map((value: any, index: number) => (
                                <View key={index} style={{
                                    rowGap: size.xs
                                }}>
                                    <ImgCardComp picture={`${value.web.web_category.name}-${value.web.web_type.name}.webp`} />
                                    {downloadWebLoading ? <LoadingComp type='primary' /> :
                                        <HandleComp text='Download Web' type='success' onPress={() => dispatch(downloadWebActions.init(value.id, `${value.web.web_category.name}-${value.web.web_type.name}.zip`))} />}
                                </View>
                            ))}
                            {data.links && <PaginationComp data={data.links} onPageChange={value => dispatch(transactionHavePaidActions.init(value))} />}
                        </> :
                        <>
                            <BadgeComp text="Please make payment if you haven't already" type='warning' />
                            <NavigateComp text='See My Purchase' type='primary' to='Member' isNested nested={{ screen: 'Purchases', params: { screen: 'Index' } }} />
                        </>
                    }
                </View>
            </View>
        </Layouts>
    )
}

export default Download