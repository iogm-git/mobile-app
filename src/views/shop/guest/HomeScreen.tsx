import { ScrollView, Text, TextInput, View } from 'react-native';
import React, { useRef } from 'react';
import Layouts from '../Layouts';
import Swiper from 'react-native-swiper';
import ImgCardComp from '@root/components/specific/shop/ImgCardComp';
import SearchIcon from '@svg/common/shop/search';
import WebCardComp from '@root/components/specific/shop/WebCardComp';
import PaginationComp from '@root/components/common/PaginationComp';
import { fontFamily, root, textCustom, flexCustom, borderDefault, fontCustom } from '@root/utils/Styles';

const HomeScreen = () => {
    const contentRef = useRef<ScrollView>(null);

    return (
        <Layouts forwardedRef={contentRef}>
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
                <Text style={textCustom.textBold}>There are a wide variety of landing pages available.</Text>
                <Text style={textCustom.textMedium}>Easy to use, make transactions and download files.</Text>
            </View>
            <Text style={{
                backgroundColor: root.blueColor,
                padding: root.sizeS,
                borderRadius: root.radiusS,
                fontFamily: fontFamily.medium,
                fontSize: root.sizeL,
                color: '#fff',
                textAlign: 'center',
                marginVertical: root.sizeXxxx
            }} onPress={() => contentRef.current?.scrollTo({ y: 600, animated: true })}>
                See Variety
            </Text>
            <Text style={textCustom.textBold}>Your Choice</Text>
            <View style={{
                ...flexCustom.flexRowBetween,
                ...borderDefault.borderS,
                paddingHorizontal: root.sizeM,
            }}>
                <TextInput placeholder='Search...' style={{
                    ...fontCustom.fontMedium,
                    fontSize: root.sizeM
                }} />
                <SearchIcon fill={root.textColor} width={25} height={25} />
            </View>
            <WebCardComp picture='sport-app_a.webp' />
            <PaginationComp />
        </Layouts>
    );
};

export default HomeScreen;