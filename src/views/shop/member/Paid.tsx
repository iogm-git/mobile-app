import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native';
import WebView from 'react-native-webview';

import Layouts from '../Layouts';
import SubmitComp from '@root/components/common/button/SubmitComp';
import BottomSheetModalComp from '@root/components/common/BottomSheetModalComp';
import { borderDefault, flexCustom, size, textCustom } from '@root/utils/Styles';
import { RootState } from '@root/redux/store';
import LoadingComp from '@root/components/common/LoadingComp';

type RouteParams = {
    data: {
        customer_name: string,
        customer_email: string,
        id: string,
        category: string,
        type: string,
        price: number,
        order_id: string,
        date: string,
        redirect_url: string
    }
};

const Paid = () => {
    const { theme, colors } = useSelector((state: RootState) => state.theme);
    const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
    const { data } = route.params;
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const [loading, setLoading] = useState(true);

    const styles = StyleSheet.create({
        box: {
            ...borderDefault(theme).borderS,
            rowGap: size.s,
            padding: size.s,
            backgroundColor: colors.thirdBg
        },
        pack: {
            ...borderDefault(theme).borderS,
            backgroundColor: colors.bg,
            padding: size.xs,
        },
        label: {
            ...textCustom(theme).textLight,
            minWidth: 75
        },
    });

    return (
        <>
            <Layouts>
                <View style={{ rowGap: size.l }}>
                    <Text style={textCustom(theme).textBold}>Paid</Text>

                    <View style={styles.box}>
                        <Text style={textCustom(theme).textMedium}>Customer</Text>
                        <View style={styles.pack}>
                            <View style={flexCustom.flexRowStart as ViewStyle}>
                                <Text style={styles.label}>Name</Text>
                                <Text style={textCustom(theme).textRegular}>: {data.customer_name}</Text>
                            </View>
                            <View style={flexCustom.flexRowStart as ViewStyle}>
                                <Text style={styles.label}>Email</Text>
                                <ScrollView horizontal>
                                    <Text style={textCustom(theme).textRegular}>: {data.customer_email}</Text>
                                </ScrollView>
                            </View>
                        </View>
                    </View>

                    <View style={styles.box}>
                        <Text style={textCustom(theme).textMedium}>Web</Text>
                        <View style={styles.pack}>
                            <View style={flexCustom.flexRowStart as ViewStyle}>
                                <Text style={styles.label}>Id</Text>
                                <Text style={textCustom(theme).textRegular}>: {data.id}</Text>
                            </View>
                            <View style={flexCustom.flexRowStart as ViewStyle}>
                                <Text style={styles.label}>Category</Text>
                                <Text style={textCustom(theme).textRegular}>: {data.category}</Text>
                            </View>
                            <View style={flexCustom.flexRowStart as ViewStyle}>
                                <Text style={styles.label}>Type</Text>
                                <Text style={textCustom(theme).textRegular}>: {data.type}</Text>
                            </View>
                            <View style={flexCustom.flexRowStart as ViewStyle}>
                                <Text style={styles.label}>Price</Text>
                                <Text style={textCustom(theme).textRegular}>: Rp. {data.price}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.box}>
                        <Text style={textCustom(theme).textMedium}>Order</Text>
                        <View style={styles.pack}>
                            <View style={flexCustom.flexRowStart as ViewStyle}>
                                <Text style={styles.label}>Id</Text>
                                <Text style={textCustom(theme).textRegular}>: {data.order_id}</Text>
                            </View>
                            <View style={flexCustom.flexRowStart as ViewStyle}>
                                <Text style={styles.label}>Date</Text>
                                <Text style={textCustom(theme).textRegular}>: {data.date}</Text>
                            </View>
                        </View>
                    </View>

                    <SubmitComp text='Paid Now' type='primary' onPress={() => bottomSheetRef.current?.present()} />

                </View>
            </Layouts>
            {data && (
                <BottomSheetModalComp ref={bottomSheetRef}>
                    {loading && (
                        <LoadingComp type='primary' />
                    )}
                    <WebView
                        source={{ uri: data.redirect_url.replace(/"/g, "") }}
                        startInLoadingState={true}
                        onLoadStart={() => setLoading(true)}
                        onLoadEnd={() => setLoading(false)}
                        javaScriptEnabled={true}
                        javaScriptCanOpenWindowsAutomatically={true}
                        domStorageEnabled={true}
                        cacheEnabled={true}
                        allowFileAccessFromFileURLs={true}
                        allowFileAccess={true}
                        cacheMode="LOAD_NO_CACHE"
                        mixedContentMode="compatibility"
                    />
                </BottomSheetModalComp>
            )}
        </>
    );
};

export default Paid;