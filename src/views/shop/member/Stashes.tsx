import React, { useEffect } from 'react'
import { Text, View, ViewStyle } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { NavigationProp, useNavigation } from '@react-navigation/native'

import Layouts from '../Layouts'

import BadgeComp from '@root/components/common/alert/BadgeComp'
import ModalComp from '@root/components/common/alert/ModalComp'
import HandleComp from '@root/components/common/button/HandleComp'
import LoadingComp from '@root/components/common/LoadingComp'
import WebCardComp from '@root/components/specific/shop/WebCardComp'
import NavigateComp from '@root/components/common/button/NavigateComp'
import PaginationComp from '@root/components/common/PaginationComp'

import { RootState } from '@root/redux/store'
import { destroyStashActions, getStashActions } from '@root/redux/shop/actions/member'

import { ShopTabsStackParamList } from '@root/utils/Navigation'
import { flexCustom, size, textCustom } from '@root/utils/Styles'

const Stashes = () => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    const navigation = useNavigation<NavigationProp<ShopTabsStackParamList>>()
    const dispatch = useDispatch()

    const { data, loading } = useSelector((state: RootState) => state.shop.getStashResult)
    const { data: success } = useSelector((state: RootState) => state.shop.destroyStashResult)

    const handleAfterDelete = () => {
        dispatch(getStashActions.init())
        dispatch(destroyStashActions.success(null))
        dispatch(destroyStashActions.failure(null))
    }

    useEffect(() => { }, [data])

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <Text style={textCustom(theme).textBold}>Stashes</Text>

                <NavigateComp text='Add More' type='primary' to='ShopHomeScreen' />

                <View style={{
                    rowGap: size.m
                }}>
                    {loading ? <LoadingComp type='primary' /> : data ? <>
                        {data.data && data.data.map((value: any, index: number) => (
                            <WebCardComp key={index} data={value.web} stashId={value.id} url='android-shop-guest-Stash' midButton='destroy' />
                        ))}
                        <PaginationComp data={data.links} onPageChange={value => dispatch(getStashActions.init(value))} />
                    </> : <>
                        <BadgeComp text="You haven't added a favorite website yet" type='warning' />
                        <NavigateComp text='See Website' type='primary' to='ShopHomeScreen' />
                    </>}
                </View>
            </View>

            {success &&
                <ModalComp title='Delete Web from Stash' onClose={handleAfterDelete}>
                    <BadgeComp text={success} type={success.includes('has been') ? 'warning' : 'success'} />
                    <View style={[flexCustom.flexRowBetween as ViewStyle, { marginTop: size.m }]}>
                        <HandleComp text='See Another Web' type='primary' onPress={() => {
                            handleAfterDelete()
                            navigation.navigate('ShopHomeScreen')
                        }} />
                        <HandleComp text='My Stash' type='success' onPress={handleAfterDelete} />
                    </View>
                </ModalComp>}
        </Layouts>
    )
}

export default Stashes