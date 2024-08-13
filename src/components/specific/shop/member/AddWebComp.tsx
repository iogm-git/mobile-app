import { Alert, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { PropsWithChildren, useEffect, useState } from 'react';

import SaveIcon from '@svg/member/shop/save';

import LoadingComp from '@root/components/common/LoadingComp';

import { getToken } from '@root/utils/Authentication';
import { AuthStackParamList } from '@root/utils/Navigation';

import { RootState } from '@root/redux/store';
import { storeStashActions } from '@root/redux/shop/actions/member';
import { size } from '@root/utils/Styles';

type AddWebProps = PropsWithChildren<{
    webId: string
}>

const AddWebComp = ({ webId }: AddWebProps) => {
    const { colors } = useSelector((state: RootState) => state.theme)

    const dispatch = useDispatch()

    const [isLogin, setIsLogin] = useState(false);

    const { loading } = useSelector((state: RootState) => state.shop.storeStashResult)

    const navigation = useNavigation<NavigationProp<AuthStackParamList>>()

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const token = await getToken();
                if (token) {
                    setIsLogin(true);
                } else {
                    setIsLogin(false)
                }
            } catch (error) {
                setIsLogin(false);
            }
        };

        checkLoginStatus();
    }, []);

    return (
        loading ? <LoadingComp type='primary' /> :
            <TouchableOpacity onPress={() => {
                if (isLogin) {
                    dispatch(storeStashActions.init(webId))
                } else {
                    Alert.alert(
                        'Status Login', 'You are not logged in yet, please sign in first', [
                        { text: 'Sign In Now', onPress: () => navigation.navigate('Login') },
                        { text: 'Later' }]
                    )
                }
            }}>
                <SaveIcon width={size.x} height={size.x} fill={colors.link} />
            </TouchableOpacity>
    );
};

export default AddWebComp;
