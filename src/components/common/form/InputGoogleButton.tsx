import React from 'react'
import { useSelector } from 'react-redux';
import { Text, TouchableOpacity, ViewStyle } from 'react-native'

import GoogleIcon from '@svg/common/user/google'

import { borderDefault, fontFamily, flexCustom, size } from '@root/utils/Styles';
import { RootState } from '@root/redux/store';

const InputGoogleButton = () => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    // useEffect(() => {
    //     GoogleSignin.configure({
    //         webClientId: "501957692849-nprqfdeclrvjseadfs3bpru3arci95eg.apps.googleusercontent.com",
    //         scopes: ['https://www.googleapis.com/auth/userinfo.profile'], // what API you want to access on behalf of the user, default is email and profile
    //         offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    //         // hostedDomain: '', // specifies a hosted domain restriction
    //         forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    //         // iosClientId: '501957692849-nprqfdeclrvjseadfs3bpru3arci95eg.apps.googleusercontent.com',
    //         // profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    //     });
    // })

    const signIn = async () => {
        console.log('asd');

        // try {
        //     await GoogleSignin.hasPlayServices();
        //     const userInfo = await GoogleSignin.signIn();
        //     console.log('User Info --> ', userInfo);
        // } catch (error) {
        //     console.log(error);
        // }
    };

    return (
        <TouchableOpacity onPress={signIn} style={{
            ...borderDefault(theme).borderS as ViewStyle,
            ...flexCustom.flexRowCenter as ViewStyle,
            padding: size.s,
            width: 253,
        }}>
            <Text style={{
                fontFamily: fontFamily.medium,
                fontSize: size.s,
                color: colors.text
            }}>
                Sign in with Google
            </Text>
            <GoogleIcon width={25} height={25} />
        </TouchableOpacity>
    )
}

export default InputGoogleButton
