export const lightTheme = {
    bg: '#ffffff',
    transBg: '#ffffff80',
    secondBg: '#fcfcfc',
    thirdBg: '#fafafa',
    fourthBg: '#f7f7f7',
    fifthBg: '#f5f5f5',
    text: '#09090b',
    transText: '#09090b80',
    link: '#5f6368',
    translink: '#5f636811',
    border: '#ebebeb',
};

export const darkTheme = {
    bg: '#202124',
    transBg: '#20212480',
    secondBg: '#232427',
    thirdBg: '#26272a',
    fourthBg: '#292a2d',
    fifthBg: '#2c2d30',
    text: '#ffffff',
    transText: '#ffffff13',
    link: '#9aa0a6',
    translink: '#9aa0a613',
    border: '#38393e',
};

export const color = {
    red: '#ef2323',
    transRed: '#ef232311',
    orange: '#ff7200',
    transOrange: '#ff720011',
    green: '#009f4d',
    transGreen: '#009f4d17',
    blue: '#0060fa',
    transBlue: '#0060fa11',
}

export const size = {
    xxxx: 36, // 2.25rem
    xxx: 32, // 2rem
    xx: 28, // 1.75rem
    x: 24, // 1.5rem
    l: 20, // 1.25rem
    m: 16, // 1rem
    s: 14, // .875rem
    xs: 10.8, // .675rem
    xxs: 9.5, // .475rem
    radiusX: 12, // .775rem
    radiusL: 11, // .575rem
    radiusM: 9, // .375rem
    radiusS: 6.75, // .275rem
}

export const colorMap = (theme) => {
    return {
        text: theme === 'dark' ? darkTheme.text : lightTheme.text,
        primary: color.blue,
        warning: color.orange,
        danger: color.red,
        success: color.green,
    }
};

export const transColorMap = (theme) => {
    return {
        text: theme === 'dark' ? darkTheme.transText : lightTheme.transText,
        primary: color.transBlue,
        warning: color.transOrange,
        danger: color.transRed,
        success: color.transGreen,
    }
};

export const fontFamily = {
    bold: 'Poppins Bold',
    medium: 'Poppins-Medium',
    regular: 'Poppins-Regular',
    light: 'Poppins-Light',
}

export const fontCustom = (theme) => {
    return {
        fontBold: {
            fontFamily: fontFamily.bold,
            color: theme === 'dark' ? darkTheme.text : lightTheme.text,
        },
        fontMedium: {
            fontFamily: fontFamily.medium,
            color: theme === 'dark' ? darkTheme.text : lightTheme.text,
        },
        fontRegular: {
            fontFamily: fontFamily.regular,
            color: theme === 'dark' ? darkTheme.text : lightTheme.text,
        },
        fontLight: {
            fontFamily: fontFamily.light,
            color: theme === 'dark' ? darkTheme.text : lightTheme.text,
        },
    }
}

export const textCustom = (theme) => {
    return {
        textBold: {
            ...fontCustom(theme).fontBold,
            fontSize: size.x
        },
        textMedium: {
            ...fontCustom(theme).fontMedium,
            fontSize: size.l
        },
        textRegular: {
            ...fontCustom(theme).fontRegular,
            fontSize: size.m
        },
        textLight: {
            ...fontCustom(theme).fontLight,
            fontSize: size.s
        }
    }
}

export const borderDefault = (theme) => {
    return {
        borderX: {
            borderWidth: 1,
            borderRadius: size.radiusX,
            borderColor: theme === 'dark' ? darkTheme.border : lightTheme.border
        },
        borderL: {
            borderWidth: 1,
            borderRadius: size.radiusL,
            borderColor: theme === 'dark' ? darkTheme.border : lightTheme.border
        },
        borderM: {
            borderWidth: 1,
            borderRadius: size.radiusM,
            borderColor: theme === 'dark' ? darkTheme.border : lightTheme.border
        },
        borderS: {
            borderWidth: 1,
            borderRadius: size.radiusS,
            borderColor: theme === 'dark' ? darkTheme.border : lightTheme.border
        }
    }
}

export const buttonDefault = (theme) => {
    return {
        buttonSmall: {
            ...borderDefault(theme).borderS,
            minWidth: 50,
            height: 31,
            paddingHorizontal: size.xxs,
            alignItems: 'center',
            justifyContent: 'center',
        },

        buttonMedium: {
            minWidth: 100,
            height: 40,
            paddingHorizontal: size.l,
            alignItems: 'center',
            justifyContent: 'center',
            rowGap: size.l
        },
    }
}

export const buttonCustom = (theme) => {
    return {
        buttonPil: {
            ...buttonDefault(theme).buttonMedium,
            borderRadius: 99
        },
        buttonCom: {
            ...buttonDefault(theme).buttonMedium,
            borderRadius: size.radiusS
        }
    }
}

export const flexCustom = {
    flexRowStart: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: size.m,
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },

    flexRowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: size.m,
        flexWrap: 'wrap',
        justifyContent: 'center'
    },

    flexRowBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: size.m,
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
}
