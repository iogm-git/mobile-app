import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { root, flexCustom, borderDefault, fontCustom, textCustom } from '@root/utils/Styles'

const PaginationComp = () => {
    return (
        <View style={{
            ...flexCustom.flexRowCenter,
            paddingTop: root.sizeM,
            borderTopColor: root.borderColor,
            borderTopWidth: 1
        }}>
            <TouchableOpacity>
                <Text style={textCustom.textRegular}>❮</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                ...borderDefault.borderS,
                width: 35,
                height: 35,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    ...fontCustom.fontMedium,
                    fontSize: root.sizeM,
                }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={textCustom.textRegular}>❯</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PaginationComp