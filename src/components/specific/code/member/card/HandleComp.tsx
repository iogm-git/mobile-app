import { Alert, Text, TouchableOpacity, ViewStyle } from 'react-native'
import React, { PropsWithChildren, useEffect } from 'react'
import { fontFamily, size, buttonDefault, colorMap } from '@root/utils/Styles'
import { useSelector } from 'react-redux'
import { RootState } from '@root/redux/store'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { UserTabsStackParamList } from '@root/utils/Navigation'

type HanldeProp = PropsWithChildren<{
    text: string
    type: 'primary' | 'warning' | 'danger' | 'success'
    onPress: () => void
}>

const HandleComp = ({ text, type, onPress }: HanldeProp) => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)
    const { data: member } = useSelector((state: RootState) => state.user.meData)

    const navigation = useNavigation<NavigationProp<UserTabsStackParamList>>()

    useEffect(() => {

    }, [member])

    return (
        <TouchableOpacity onPress={() => {
            if (member) {
                if (member.hasOwnProperty('role')) {
                    onPress()
                } else {
                    Alert.alert(
                        'Status Member',
                        'You must be registered as a member on the IOGM Code application',
                        [{ text: 'Later' }, { text: 'Register', onPress: () => navigation.navigate('User', { screen: 'Member', params: { screen: 'CodeRegister' } }) }],
                    )
                }
            } else {
                Alert.alert(
                    'Status User',
                    'You must log in first',
                    [{ text: 'Later' }, { text: 'Login Now', onPress: () => navigation.navigate('User', { screen: 'Auth', params: { screen: 'Login' } }) }],
                )
            }
        }} style={{
            flex: 1,
            ...buttonDefault(theme).buttonSmall as ViewStyle,
            backgroundColor: colorMap(theme)[type]
        }}>
            <Text style={{
                fontFamily: fontFamily.medium,
                fontSize: size.s,
                color: colors.bg,
                textAlign: 'center'
            }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default HandleComp