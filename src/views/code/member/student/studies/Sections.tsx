import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Layouts from '@root/views/code/Layouts'
import { borderDefault, buttonCustom, buttonDefault, flexCustom, fontCustom, root, textCustom } from '@root/utils/Styles'
import NavigateComp from '@root/components/common/button/NavigateComp'
import { useNavigation } from '@react-navigation/native'
import CardComp from '@root/components/specific/code/member/card/CardComp'

const Sections = () => {
    const navigation = useNavigation()

    return (
        <Layouts>
            <Text style={textCustom.textBold}>PHP</Text>
            <Text style={textCustom.textRegular}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloribus nostrum vel tenetur. Mollitia provident laborum adipisci eos commodi, porro ex qui ipsam est quod impedit consequatur et doloremque explicabo maxime expedita quibusdam quaerat sapiente nulla quae repudiandae nobis. Eaque nulla qui modi debitis perspiciatis dolorem illo, iusto odio? Nemo explicabo repellat eos aut ab, minima alias libero delectus vel deserunt temporibus saepe molestias nisi obcaecati cum impedit sequi qui odit harum? Suscipit explicabo sequi impedit. Sed quo harum necessitatibus ab aliquid dolore praesentium consectetur nihil rem maiores reprehenderit aperiam, voluptatum dicta porro optio impedit aspernatur, maxime corporis, minus blanditiis?
            </Text>

            <NavigateComp text='Back' type='warning' goBack />
            <Text style={textCustom.textLight}>Complete all the material then you will get a certificate.</Text>
            <TouchableOpacity style={[buttonCustom.buttonCom, { borderColor: root.greenColor, borderWidth: 1 }]}>
                <Text style={[fontCustom.fontMedium, { color: root.greenColor }]}>Download Certificate</Text>
            </TouchableOpacity>

            <CardComp order={1} additional={
                <>
                    <TouchableOpacity onPress={() => navigation.navigate('code-member-student-Lessons')} style={[buttonDefault.buttonSmall, { borderColor: root.blueColor, borderWidth: 1 }]}>
                        <Text style={[textCustom.textLight, { color: root.blueColor }]}>See</Text>
                    </TouchableOpacity>
                    <Text style={textCustom.textLight}>Uncompleted</Text>
                </>
            }>
                <View style={[borderDefault.borderS, { rowGap: root.sizeXs, backgroundColor: root.secondBgColor, padding: root.sizeXs / 2 }]}>
                    <Text style={[textCustom.textLight, { textAlign: 'center' }]}>Title</Text>
                    <Text style={textCustom.textRegular}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed culpa iusto dolores aliquam eaque modi possimus magni dolorum beatae voluptas.</Text>
                </View>
            </CardComp>
        </Layouts>
    )
}

export default Sections