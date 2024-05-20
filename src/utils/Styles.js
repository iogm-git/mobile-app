import { StyleSheet } from "react-native";

export const root = {
    bgColor: '#ffffff',
    transbgColor: '#ffffff80',
    secondBgColor: '#fcfcfc',
    thirdBgColor: '#fafafa',
    fourthBgColor: '#f7f7f7',
    fifthBgColor: '#f5f5f5',
    textColor: '#09090b',
    transtextColor: '#09090b80',
    linkColor: '#5f6368',
    translinkColor: '#5f636811',
    borderColor: '#ebebeb',
    redColor: '#ef2323',
    transredColor: '#ef232311',
    orangeColor: '#ff7200',
    transorangeColor: '#ff720011',
    greenColor: '#009f4d',
    transgreenColor: '#009f4d17',
    blueColor: '#0060fa',
    transblueColor: '#0060fa11',
    shadowColor: '#4e78a5',
    sizeXxxx: 36, // 2.25rem
    sizeXxx: 32, // 2rem
    sizeXx: 28, // 1.75rem
    sizeX: 24, // 1.5rem
    sizeL: 20, // 1.25rem
    sizeM: 16, // 1rem
    sizeS: 14, // .875rem
    sizeXs: 10.8, // .675rem
    sizeXxs: 9.5, // .475rem
    radiusX: 12, // .775rem
    radiusL: 11, // .575rem
    radiusM: 9, // .375rem
    radiusS: 6.75, // .275rem
}

export const colorMap = {
    text: root.textColor,
    primary: root.blueColor,
    warning: root.orangeColor,
    danger: root.redColor,
    success: root.greenColor,
};

export const transColorMap = {
    text: root.transtextColor,
    primary: root.transblueColor,
    warning: root.transorangeColor,
    danger: root.transredColor,
    success: root.transgreenColor,
};

export const fontFamily = {
    bold: 'Poppins Bold',
    medium: 'Poppins-Medium',
    regular: 'Poppins-Regular',
    light: 'Poppins-Light',
}

export const fontCustom = StyleSheet.create({
    fontBold: {
        fontFamily: fontFamily.bold,
        color: root.textColor,
    },
    fontMedium: {
        fontFamily: fontFamily.medium,
        color: root.textColor,
    },
    fontRegular: {
        fontFamily: fontFamily.regular,
        color: root.textColor,
    },
    fontLight: {
        fontFamily: fontFamily.light,
        color: root.textColor,
    },
})

export const textCustom = StyleSheet.create({
    textBold: {
        ...fontCustom.fontBold,
        fontSize: root.sizeX
    },
    textMedium: {
        ...fontCustom.fontMedium,
        fontSize: root.sizeL
    },
    textRegular: {
        ...fontCustom.fontRegular,
        fontSize: root.sizeM
    },
    textLight: {
        ...fontCustom.fontLight,
        fontSize: root.sizeS
    }
})

export const borderDefault = StyleSheet.create({
    borderX: {
        borderWidth: 1,
        borderRadius: root.radiusX,
        borderColor: root.borderColor
    },
    borderL: {
        borderWidth: 1,
        borderRadius: root.radiusL,
        borderColor: root.borderColor
    },
    borderM: {
        borderWidth: 1,
        borderRadius: root.radiusM,
        borderColor: root.borderColor
    },
    borderS: {
        borderWidth: 1,
        borderRadius: root.radiusS,
        borderColor: root.borderColor
    }
})

export const buttonDefault = StyleSheet.create({
    buttonSmall: {
        ...borderDefault.borderS,
        minWidth: 50,
        height: 31,
        paddingHorizontal: root.sizeXxs,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonMedium: {
        minWidth: 100,
        height: 40,
        paddingHorizontal: root.sizeL,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: root.sizeL
    },
})

export const buttonCustom = StyleSheet.create({
    buttonPil: {
        ...buttonDefault.buttonMedium,
        borderRadius: 99
    },
    buttonCom: {
        ...buttonDefault.buttonMedium,
        borderRadius: root.radiusS
    }
})

export const flexCustom = StyleSheet.create({
    flexRowStart: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: root.sizeM,
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },

    flexRowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: root.sizeM,
        flexWrap: 'wrap',
        justifyContent: 'center'
    },

    flexRowBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: root.sizeM,
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
})
