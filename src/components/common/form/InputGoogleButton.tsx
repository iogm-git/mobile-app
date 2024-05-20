import { Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import GoogleIcon from '@svg/common/user/google'
import {
    GoogleSignin,
} from '@react-native-google-signin/google-signin';
import { root, borderDefault, fontFamily, flexCustom } from '@root/utils/Styles';

const InputGoogleButton = () => {

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '501957692849-nprqfdeclrvjseadfs3bpru3arci95eg.apps.googleusercontent.com',
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            hostedDomain: '', // specifies a hosted domain restriction
            forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
            iosClientId: '501957692849-nprqfdeclrvjseadfs3bpru3arci95eg.apps.googleusercontent.com',
            profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
        });
    })

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('User Info --> ', userInfo);
        } catch (error) {
            console.log(error);

            //   if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            //     console.log('User cancelled the login flow');
            //   } else if (error.code === statusCodes.IN_PROGRESS) {
            //     console.log('Sign in is in progress already');
            //   } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            //     console.log('Play services not available or outdated');
            //   } else {
            //     console.error('Some other error happened: ', error);
            //   }
        }
    };

    return (
        <TouchableOpacity onPress={() => console.log('asd')
        } style={{
            ...borderDefault.borderS,
            ...flexCustom.flexRowCenter,
            padding: root.sizeS,
            width: 253,
        }}>
            <Text style={{
                fontFamily: fontFamily.medium,
                fontSize: root.sizeS
            }}>
                Sign in with Google
            </Text>
            <GoogleIcon width={25} height={25} />
        </TouchableOpacity>
    )
}

export default InputGoogleButton