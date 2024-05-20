import { View } from 'react-native';
import React from 'react';
import { BASEURL } from '@root/utils/Env';
import { root, flexCustom } from '@root/utils/Styles';
import { SvgUri } from 'react-native-svg';

const HeaderComp = ({ children }: any) => {
    return (
        <View style={{
            ...flexCustom.flexRowBetween,
            backgroundColor: root.bgColor,
            padding: root.sizeM,
            height: 63,
            borderBottomWidth: 1,
            borderBottomColor: root.borderColor,
        }}>
            <SvgUri uri={BASEURL + '/logo.svg'} style={{
                maxHeight: 25,
                maxWidth: 25,
            }} />
            {children}
        </View >
    )
}

export default HeaderComp;
