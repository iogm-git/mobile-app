import React, { useEffect } from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import { color, fontCustom, size, flexCustom } from '@root/utils/Styles';
import { useSelector } from 'react-redux';
import { RootState } from '@root/redux/store';
import { SvgProps } from 'react-native-svg';

interface CustomDrawerItemProps {
    label: string;
    onPress: () => void;
    icon: React.ComponentType<SvgProps>;
    focused: boolean;
}

const CustomDrawerItemComp: React.FC<CustomDrawerItemProps> = ({ label, onPress, icon: Icon, focused }) => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    useEffect(() => {
    }, [focused])

    return (
        <TouchableOpacity onPress={onPress} style={{
            ...flexCustom.flexRowStart as ViewStyle,
            borderRadius: size.s / 2,
            padding: size.xxs,
            backgroundColor: focused ? color.transBlue : colors.translink
        }}>
            <Icon width={size.m} height={size.m} fill={focused ? color.blue : colors.link} />
            <Text style={[fontCustom(theme).fontMedium, { fontSize: size.s, color: focused ? color.blue : colors.link }]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomDrawerItemComp;
