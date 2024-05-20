import { View, Text, TextInput } from 'react-native'
import React, { PropsWithChildren } from 'react'
import Layouts from '@root/views/code/Layouts'
import { borderDefault, fontCustom, root, textCustom } from '@root/utils/Styles'
import SubmitComp from '@root/components/common/button/SubmitComp'
import NavigateComp from '@root/components/common/button/NavigateComp'

type FormProps = PropsWithChildren<{
    type: string
}>

const Form = ({ type }: FormProps) => {
    return (
        <Layouts>
            <Text style={[textCustom.textBold, { textTransform: 'capitalize' }]}>{type} Lesson</Text>
            <View>
                <Text style={[fontCustom.fontBold, { fontSize: root.sizeM }]}>Title</Text>
                <TextInput style={[borderDefault.borderS, textCustom.textRegular]} />
            </View>

            <View>
                <Text style={[fontCustom.fontBold, { fontSize: root.sizeM }]}>Description</Text>
                <TextInput
                    style={[textCustom.textRegular, borderDefault.borderS]}
                    multiline
                    numberOfLines={4}
                />
            </View>

            <View>
                <Text style={[fontCustom.fontBold, { fontSize: root.sizeM }]}>Order In Course</Text>
                <TextInput style={[borderDefault.borderS, textCustom.textRegular]} keyboardType='numeric' />
            </View>

            <SubmitComp text='Submit' type='primary' handleSubmitOnPress={() => console.log('asd')} />
            <NavigateComp text='Back' type='warning' goBack />
        </Layouts>
    )
}

export default Form