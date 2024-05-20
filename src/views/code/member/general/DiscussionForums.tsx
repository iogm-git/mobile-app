import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Layouts from '../../Layouts'
import { borderDefault, buttonDefault, flexCustom, fontFamily, root, textCustom } from '@root/utils/Styles'

const DiscussionForums = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>DiscussionForums</Text>

            <View>
                <Text style={textCustom.textLight}>Categories :</Text>
                <ScrollView horizontal>
                    <View style={[flexCustom.flexRowStart, { flexWrap: 'nowrap' }]}>
                        <TouchableOpacity style={buttonDefault.buttonSmall}>
                            <Text style={textCustom.textLight}>C++</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <View style={{ rowGap: root.sizeM }}>
                <Text style={textCustom.textMedium}>Chat</Text>
                <View style={{
                    borderTopColor: root.borderColor,
                    borderTopWidth: 1,
                    borderBottomColor: root.borderColor,
                    borderBottomWidth: 1,
                    paddingVertical: root.sizeM,
                    maxHeight: 200,
                    overflow: 'scroll'
                }}>
                    <View style={{ rowGap: root.sizeS }}>
                        <View style={{ width: '60%' }}>
                            <View style={styles.chatFromUser}>
                                <Text style={textCustom.textLight}>Ilham</Text>
                            </View>
                            <View style={styles.chatMessage}>
                                <Text style={textCustom.textRegular}>Halo Fath</Text>
                                <Text style={[textCustom.textLight, { color: root.linkColor, alignSelf: 'flex-end' }]}>18:30</Text>
                            </View>
                        </View>
                        <View style={{ width: '60%', alignSelf: 'flex-end' }}>
                            <View style={[styles.chatMessage, { backgroundColor: root.greenColor, borderTopLeftRadius: root.radiusS }]}>
                                <Text style={[textCustom.textRegular, { color: root.bgColor }]}>Halo Fath</Text>
                                <Text style={[textCustom.textLight, { color: root.transbgColor, alignSelf: 'flex-end' }]}>18:30</Text>
                            </View>
                            <View style={[styles.chatMessage, { backgroundColor: root.greenColor, borderTopLeftRadius: root.radiusS }]}>
                                <Text style={[textCustom.textRegular, { color: root.bgColor }]}>Halo Fath</Text>
                                <Text style={[textCustom.textLight, { color: root.transbgColor, alignSelf: 'flex-end' }]}>18:30</Text>
                            </View>
                            <View style={[styles.chatMessage, { backgroundColor: root.greenColor, borderTopLeftRadius: root.radiusS }]}>
                                <Text style={[textCustom.textRegular, { color: root.bgColor }]}>Halo Fath</Text>
                                <Text style={[textCustom.textLight, { color: root.transbgColor, alignSelf: 'flex-end' }]}>18:30</Text>
                            </View>
                            <View style={[styles.chatMessage, { backgroundColor: root.greenColor, borderTopLeftRadius: root.radiusS }]}>
                                <Text style={[textCustom.textRegular, { color: root.bgColor }]}>Halo Fath</Text>
                                <Text style={[textCustom.textLight, { color: root.transbgColor, alignSelf: 'flex-end' }]}>18:30</Text>
                            </View>
                            <View style={[styles.chatMessage, { backgroundColor: root.greenColor, borderTopLeftRadius: root.radiusS }]}>
                                <Text style={[textCustom.textRegular, { color: root.bgColor }]}>Halo Fath</Text>
                                <Text style={[textCustom.textLight, { color: root.transbgColor, alignSelf: 'flex-end' }]}>18:30</Text>
                            </View>
                            <View style={[styles.chatMessage, { backgroundColor: root.greenColor, borderTopLeftRadius: root.radiusS }]}>
                                <Text style={[textCustom.textRegular, { color: root.bgColor }]}>Halo Fath</Text>
                                <Text style={[textCustom.textLight, { color: root.transbgColor, alignSelf: 'flex-end' }]}>18:30</Text>
                            </View>
                            <View style={[styles.chatMessage, { backgroundColor: root.greenColor, borderTopLeftRadius: root.radiusS }]}>
                                <Text style={[textCustom.textRegular, { color: root.bgColor }]}>Halo Fath</Text>
                                <Text style={[textCustom.textLight, { color: root.transbgColor, alignSelf: 'flex-end' }]}>18:30</Text>
                            </View>
                            <View style={[styles.chatMessage, { backgroundColor: root.greenColor, borderTopLeftRadius: root.radiusS }]}>
                                <Text style={[textCustom.textRegular, { color: root.bgColor }]}>Halo Fath</Text>
                                <Text style={[textCustom.textLight, { color: root.transbgColor, alignSelf: 'flex-end' }]}>18:30</Text>
                            </View>
                            <View style={[styles.chatMessage, { backgroundColor: root.greenColor, borderTopLeftRadius: root.radiusS }]}>
                                <Text style={[textCustom.textRegular, { color: root.bgColor }]}>Halo Fath</Text>
                                <Text style={[textCustom.textLight, { color: root.transbgColor, alignSelf: 'flex-end' }]}>18:30</Text>
                            </View>
                            <View style={[styles.chatMessage, { backgroundColor: root.greenColor, borderTopLeftRadius: root.radiusS }]}>
                                <Text style={[textCustom.textRegular, { color: root.bgColor }]}>Halo Fath</Text>
                                <Text style={[textCustom.textLight, { color: root.transbgColor, alignSelf: 'flex-end' }]}>18:30</Text>
                            </View>
                            <View style={[styles.chatMessage, { backgroundColor: root.greenColor, borderTopLeftRadius: root.radiusS }]}>
                                <Text style={[textCustom.textRegular, { color: root.bgColor }]}>Halo Fath</Text>
                                <Text style={[textCustom.textLight, { color: root.transbgColor, alignSelf: 'flex-end' }]}>18:30</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <TextInput
                    style={[textCustom.textRegular, borderDefault.borderS]}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={text => console.log(text)}
                    placeholder="Type here..."
                />
                <TouchableOpacity style={{
                    borderRadius: root.radiusS,
                    borderWidth: 1,
                    width: 80,
                    borderColor: root.blueColor,
                    paddingHorizontal: root.sizeS,
                    paddingVertical: root.sizeS / 2
                }}>
                    <Text style={{
                        fontFamily: fontFamily.medium,
                        fontSize: root.sizeM,
                        color: root.blueColor,
                        textAlign: 'center'
                    }}>
                        Send
                    </Text>
                </TouchableOpacity>
            </View>
        </Layouts>
    )
}

const styles = StyleSheet.create({
    chatFromUser: {
        ...borderDefault.borderS,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomWidth: 0,
        zIndex: 2,
        marginBottom: -2,
        maxWidth: '50%',
        paddingTop: root.sizeS / 2,
        paddingHorizontal: root.sizeS,
        backgroundColor: root.bgColor
    },
    chatMessage: {
        ...borderDefault.borderS,
        borderTopLeftRadius: 0,
        paddingVertical: root.sizeS / 2,
        paddingHorizontal: root.sizeS,
    }
})

export default DiscussionForums