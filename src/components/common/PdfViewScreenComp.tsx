import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import PDFView from 'react-native-pdf';
import NavigateComp from './button/NavigateComp';
import { borderDefault, size } from '@root/utils/Styles';
import { useSelector } from 'react-redux';
import { RootState } from '@root/redux/store';

type RootStackParamList = {
    'PdfViewer': { base64Data: string };
};

type PdfViewerRouteProp = RouteProp<RootStackParamList, 'PdfViewer'>;

const PdfViewer: React.FC = () => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)
    const route = useRoute<PdfViewerRouteProp>();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: size.m,
            backgroundColor: colors.bg,
            rowGap: size.m
        },
        pdf: {
            ...borderDefault(theme).borderS,
            flex: 1,
            backgroundColor: colors.bg,
            width: '90%',
        },
        error: {
            fontSize: 16,
            color: 'red',
        },
    });

    if (!route.params?.base64Data) {

        return (
            <View style={styles.container}>
                <Text style={styles.error}>PDF tidak ditemukan atau data tidak valid.</Text>
            </View>
        );
    }

    const { base64Data } = route.params;

    return (
        <View style={styles.container}>
            <PDFView
                style={styles.pdf}
                source={{ uri: `data:application/pdf;base64,${base64Data}` }}
            />
            <NavigateComp text='Back' type='warning' goBack />
        </View>
    );
};

export default PdfViewer;
