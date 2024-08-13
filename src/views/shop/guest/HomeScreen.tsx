import Swiper from 'react-native-swiper';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native';

import Layouts from '../Layouts';

import { RootState } from '@root/redux/store';

import ModalComp from '@root/components/common/alert/ModalComp';
import BadgeComp from '@root/components/common/alert/BadgeComp';
import HandleComp from '@root/components/common/button/HandleComp';
import WebCardComp from '@root/components/specific/shop/WebCardComp';
import ImgCardComp from '@root/components/specific/shop/ImgCardComp';
import LoadingComp from '@root/components/common/LoadingComp';
import PaginationComp from '@root/components/common/PaginationComp';

import SearchIcon from '@svg/common/shop/search';

import { getStashActions, storeStashActions } from '@root/redux/shop/actions/member';
import { webCategoryActions, webDetailsActions, webSearchActions } from '@root/redux/shop/actions/guest';

import { ShopTabsStackParamList } from '@root/utils/Navigation';
import { textCustom, flexCustom, borderDefault, fontCustom, buttonDefault, color, size } from '@root/utils/Styles';

const HomeScreen = () => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    const navigation = useNavigation<NavigationProp<ShopTabsStackParamList>>()
    const dispatch = useDispatch()

    const contentRef = useRef<ScrollView>(null)

    const { data: success } = useSelector((state: RootState) => state.shop.storeStashResult)
    const { data: webDetails, loading: webDetailsLoading } = useSelector((state: RootState) => state.shop.webDetailsResult)
    const { data: webCategories } = useSelector((state: RootState) => state.shop.webCategoriesResult)

    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('all')

    useEffect(() => {

    }, [webDetails, webCategories, success])

    const handleAfterStore = () => {
        dispatch(storeStashActions.success(null))
        dispatch(storeStashActions.failure(null))
        dispatch(getStashActions.init())
    }

    return (
        <Layouts forwardedRef={contentRef}>
            <View style={{ rowGap: size.l }}>
                <Swiper
                    style={{
                        height: 290
                    }}
                    autoplay
                    showsButtons={false}
                >
                    <ImgCardComp picture='portfolio-app_b.webp' />
                    <ImgCardComp picture='sport-app_a.webp' />
                    <ImgCardComp picture='car-app_a.webp' />
                </Swiper>
                <View>
                    <Text style={textCustom(theme).textBold}>There are a wide variety of landing pages available.</Text>
                    <Text style={textCustom(theme).textMedium}>Easy to use, make transactions and download files.</Text>
                </View>
                <HandleComp text='See Variety' type='primary' onPress={() => contentRef.current?.scrollTo({ y: 600, animated: true })} />
            </View>

            <View style={{ rowGap: size.l }}>
                <Text style={textCustom(theme).textBold}>Your Choice</Text>

                <View style={{
                    ...flexCustom.flexRowBetween as ViewStyle,
                    ...borderDefault(theme).borderS,
                    paddingHorizontal: size.m,
                }}>
                    <TextInput placeholderTextColor={colors.link} placeholder='Search...' onChangeText={value => {
                        dispatch(webSearchActions.init(value, 1));
                        setSearch(value)
                        setPage(1)
                        setCategory(value.toLowerCase())
                    }} style={{
                        ...fontCustom(theme).fontMedium,
                        fontSize: size.m,
                        width: '80%',
                        color: colors.text
                    }} />
                    <SearchIcon fill={colors.text} width={25} height={25} />
                </View>

                {webDetailsLoading ? <LoadingComp type='primary' /> :
                    <ScrollView horizontal>
                        <TouchableOpacity style={[buttonDefault(theme).buttonSmall as ViewStyle, {
                            marginRight: size.s,
                            backgroundColor: 'all' === category ? color.blue : colors.bg
                        }]} onPress={() => { setCategory('all'); setPage(1); dispatch(webDetailsActions.init()) }}>
                            <Text style={[textCustom(theme).textLight, {
                                color: 'all' === category ? (theme === 'dark' ? colors.text : colors.bg) : colors.text
                            }]}>All</Text>
                        </TouchableOpacity>
                        {webCategories && webCategories.map((value: string, index: number) => (
                            <TouchableOpacity key={index} style={[buttonDefault(theme).buttonSmall as ViewStyle, {
                                marginRight: size.s,
                                backgroundColor: value === category ? color.blue : colors.bg
                            }]} onPress={() => { setCategory(value); setPage(1); dispatch(webCategoryActions.init(value)) }}>
                                <Text style={[textCustom(theme).textLight, {
                                    textTransform: 'capitalize',
                                    color: value === category ? (theme === 'dark' ? colors.text : colors.bg) : colors.text
                                }]}>{value}</Text>
                            </TouchableOpacity>
                        ))
                        }
                    </ScrollView>
                }

                {webDetailsLoading ? <LoadingComp type='primary' /> :
                    webDetails && webDetails.data && webDetails.data.length > 0 ?
                        <>
                            {webDetails.data.map((value: any, index: number) => (
                                <WebCardComp key={index} data={value} url='android-shop-guest-HomeScreen' />
                            ))}
                            <PaginationComp data={webDetails.links} page={page} onPageChange={value => {
                                if (search === '') {
                                    dispatch(webDetailsActions.init(value))
                                } else {
                                    dispatch(webSearchActions.init(search, value))
                                }
                                setPage(parseInt(value))
                            }} />
                        </> :
                        <BadgeComp text='Web Not Found' type='danger' />
                }
            </View>



            {success &&
                <ModalComp title='Store Web to Stash' onClose={handleAfterStore}>
                    <BadgeComp text={success} type={success.includes('has been') ? 'warning' : 'success'} />
                    <View style={[flexCustom.flexRowBetween as ViewStyle, { marginTop: size.m }]}>
                        <HandleComp text='See Stash' type='success' onPress={() => {
                            handleAfterStore()
                            navigation.navigate('Member', { screen: 'Stashes' })
                        }} />
                        <HandleComp text='Add More' type='primary' onPress={handleAfterStore} />
                    </View>
                </ModalComp>}
        </Layouts>
    );
};

export default HomeScreen;