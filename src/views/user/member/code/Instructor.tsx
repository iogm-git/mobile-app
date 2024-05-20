import { ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import Layouts from '@root/views/user/Layouts'
import { fontFamily, root, textCustom } from '@root/utils/Styles'
import { styles } from '../_style'
import InputTextComp from '@root/components/common/form/InputTextComp'
import ModalComp from '@root/components/common/alert/ModalComp'
import { _dataBanks } from '@root/utils/Helper'
import SubmitComp from '@root/components/common/button/SubmitComp'

const Instructor = () => {
    const [show, setShow] = useState(false)

    return (
        <Layouts>
            <Text style={textCustom.textBold}>Instructor</Text>

            <View style={styles.boxForm}>
                <Text style={textCustom.textMedium}>Info</Text>
                <InputTextComp name='Name' type='disabled' />
                <InputTextComp name='Email' type='disabled' />
            </View>

            <View style={styles.boxForm}>
                <Text style={textCustom.textMedium}>Account</Text>
                <InputTextComp name='Number' type='numeric' handleInputOnChange={value => console.log(value)} />
                <InputTextComp name='Bank Name' type='disabled' />
                <Text onPress={() => setShow(true)} style={{
                    fontFamily: fontFamily.light,
                    fontSize: root.sizeM,
                    textDecorationLine: 'underline',
                    color: root.blueColor,
                    textAlign: 'center'
                }}>Show Bank</Text>
                {show &&
                    <ModalComp onClose={() => setShow(false)} title='Bank' children={
                        <View style={{
                            margin: root.sizeM,
                            rowGap: root.sizeM
                        }}>
                            <InputTextComp name='Bank Name' handleInputOnChange={value => console.log(value)} />
                            <ScrollView style={{
                                maxHeight: 325,
                                rowGap: root.sizeM
                            }}>
                                {_dataBanks.map((value, index) => (
                                    <Text style={{
                                        fontSize: root.sizeS,
                                        fontFamily: fontFamily.regular,
                                        backgroundColor: root.transblueColor,
                                        color: root.blueColor,
                                        padding: root.sizeXxs,
                                        marginBottom: root.sizeS,
                                        borderRadius: root.radiusS
                                    }} key={index}>{Object.values(value)[0]}</Text>
                                ))}
                            </ScrollView>
                        </View>
                    } />
                }
                <InputTextComp name='Alias Name' type='text' handleInputOnChange={value => console.log(value)} />

                <View style={{ alignSelf: 'center' }}>
                    <SubmitComp text='Submit' type='primary' handleSubmitOnPress={() => console.log('asd')} />
                </View>
            </View>
        </Layouts>
    )
}

export default Instructor