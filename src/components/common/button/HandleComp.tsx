import { useSelector } from 'react-redux';
import React, { PropsWithChildren } from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import { colorMap, buttonCustom, textCustom, size, flexCustom, color, buttonDefault } from '@root/utils/Styles';
import { RootState } from '@root/redux/store';

type HandleProps = PropsWithChildren<{
    text: string;
    type: 'primary' | 'warning' | 'danger' | 'success' | 'text';
    onPress: () => void;
    active?: boolean;
    small?: boolean;
}>;

const HandleComp: React.FC<HandleProps> = ({ text, type, onPress, children, active, small = false }) => {
    const { theme, colors } = useSelector((state: RootState) => state.theme);

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                ...flexCustom.flexRowBetween as ViewStyle,
                ...(small ? buttonDefault(theme).buttonSmall : buttonCustom(theme).buttonCom) as ViewStyle,
                backgroundColor: active ? colorMap(theme)[type] : colors.bg,
                borderColor: colors.border,
                borderWidth: 1.5,
                flexWrap: 'nowrap',
                borderRadius: size.radiusS
            }}
        >
            <Text style={{
                ...textCustom(theme).textMedium,
                fontSize: size.s,
                textTransform: 'capitalize',
                color: active ? (theme === 'dark' ? colors.bg : colors.bg) : colorMap(theme)[type],
            }}>
                {text}
            </Text>
            {children}
        </TouchableOpacity>
    );
};

export default HandleComp;
