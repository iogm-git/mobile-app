import Echo from 'laravel-echo';
import Pusher from '@pusher/pusher-websocket-react-native';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, StyleSheet, TextInput, ViewStyle, KeyboardAvoidingView } from 'react-native';

import { RootState } from '@root/redux/store';

import HeaderComp from '@root/components/common/header/HeaderComp';
import HandleComp from '@root/components/common/button/HandleComp';

import { PUSHER_APP_KEY, PUSHER_HOST, PUSHER_PORT, PUSHER_SCHEME, PUSHER_APP_CLUSTER } from '@env';

import { borderDefault, color, flexCustom, fontCustom, size, textCustom } from '@root/utils/Styles';

interface Message {
    user_id: string;
    message: string;
    created_at: string;
}

interface MessageData {
    message: Message;
}

const DiscussionForums = () => {
    const { theme, colors } = useSelector((state: RootState) => state.theme);
    const { data: member } = useSelector((state: RootState) => state.user.meData);
    const { data: chat } = useSelector((state: RootState) => state.code.discussionForumsResult);
    const [echo, setEcho] = useState<Echo | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState<string>('');

    const navigation = useNavigation();

    const styles = StyleSheet.create({
        chatFromUser: {
            ...borderDefault(theme).borderS,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomWidth: 0,
            zIndex: 2,
            marginBottom: -1,
            maxWidth: '50%',
            paddingTop: 2,
            paddingHorizontal: size.s / 2,
            backgroundColor: colors.bg,
        },
        chatToMe: {
            borderTopLeftRadius: 0,
            paddingVertical: 2,
            paddingHorizontal: size.s / 2,
        },
        chatFromMe: {
            backgroundColor: color.green,
            paddingVertical: 2,
            paddingHorizontal: size.s / 2,
            borderRadius: size.radiusS,
            borderBottomRightRadius: 0,
            width: '60%',
            alignSelf: 'flex-end',
        },
    });

    useEffect(() => {
        const initializeEcho = async () => {
            const pusherConfig = {
                client: new Pusher(PUSHER_APP_KEY, {
                    cluster: PUSHER_APP_CLUSTER ?? 'mt1',
                    forceTLS: (PUSHER_SCHEME ?? 'https') === 'https',
                    wsHost: PUSHER_HOST ?? `ws-${PUSHER_APP_CLUSTER}.pusher.com`,
                    wsPort: PUSHER_PORT ?? 80,
                    wssPort: PUSHER_PORT ?? 443,
                    enabledTransports: ['ws', 'wss'],
                }),
                broadcaster: 'pusher',
                key: PUSHER_APP_KEY,
                cluster: PUSHER_APP_CLUSTER ?? 'mt1',
                forceTLS: (PUSHER_SCHEME ?? 'https') === 'https',
            };

            const echoInstance = new Echo(pusherConfig);

            setEcho(echoInstance);

            echoInstance.channel('store').listen('.receive', (data: MessageData) => {
                setMessages((prev) => [...prev, data.message]);
            });
        };

        initializeEcho();

        return () => {
            if (echo) {
                echo.disconnect();
            }
        };
    }, []);


    useEffect(() => {
        if (echo) {
            echo.channel('store')
                .listen('.receive', (data: MessageData) => {
                    setMessages((prev) => [...prev, data.message]);
                });
        }
    }, [echo]);

    useEffect(() => {
        if (chat && chat.data) setMessages(chat.data);
    }, [chat]);

    const sendMessage = () => {

        setInputMessage('');
    };

    return (
        <View style={{ flex: 1, backgroundColor: colors.bg }}>
            <HeaderComp onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
            <View style={{ paddingHorizontal: size.m }}>
                <View style={flexCustom.flexRowStart as ViewStyle}>
                    <Text style={textCustom(theme).textLight}>Discussion category :</Text>
                    <ScrollView horizontal>
                        <View style={[flexCustom.flexRowStart as ViewStyle, { flexWrap: 'nowrap' }]}>
                            <HandleComp small text='cpp' type='text' onPress={() => console.log('asd')} />
                            {chat && Object.entries(chat.categories).map((value, index) => (
                                <HandleComp key={index} small text={value[0]} type='text' onPress={() => console.log(value[1])} />
                            ))}
                        </View>
                    </ScrollView>
                </View>
                <ScrollView
                    style={{
                        marginTop: size.s,
                        borderTopColor: colors.border,
                        borderTopWidth: 1,
                        borderBottomColor: colors.border,
                        borderBottomWidth: 1,
                        paddingVertical: size.m,
                        maxHeight: '65%',
                    }}
                >
                    <View style={{ rowGap: size.s }}>
                        {messages && messages.map((item: Message, index: number) => (
                            <React.Fragment key={index}>
                                {(index === 0 || messages[index].created_at.substring(0, 11) !== messages[index - 1].created_at.substring(0, 11)) && (
                                    <Text style={[fontCustom(theme).fontLight, { fontSize: size.xs }]}>
                                        {item.created_at.substring(0, 11)}
                                    </Text>
                                )}
                                {item.user_id === member.username ? (
                                    <View style={styles.chatFromMe}>
                                        <Text style={[textCustom(theme).textRegular, { color: colors.bg }]}>{item.message}</Text>
                                        <Text style={[fontCustom(theme).fontLight, { color: colors.transBg, fontSize: size.xs, alignSelf: 'flex-end' }]}>
                                            {item.created_at.substring(11, 19)}
                                        </Text>
                                    </View>
                                ) : (
                                    <View style={{ width: '60%' }}>
                                        <View style={styles.chatFromUser}>
                                            <Text style={[fontCustom(theme).fontLight, { fontSize: size.xs }]}>Ilham</Text>
                                        </View>
                                        <View style={[styles.chatToMe, borderDefault(theme).borderS]}>
                                            <Text style={textCustom(theme).textRegular}>{item.message}</Text>
                                            <Text style={[fontCustom(theme).fontLight, { fontSize: size.xs, color: colors.link, alignSelf: 'flex-end' }]}>
                                                {item.created_at.substring(11, 19)}
                                            </Text>
                                        </View>
                                    </View>
                                )}
                            </React.Fragment>
                        ))}
                    </View>
                </ScrollView>
                <KeyboardAvoidingView behavior="padding">
                    <TextInput
                        style={[textCustom(theme).textLight, borderDefault(theme).borderS, { marginVertical: size.xxs, paddingHorizontal: size.xxs }]}
                        onChangeText={(text) => setInputMessage(text)}
                        placeholder="Type here..."
                        value={inputMessage}
                    />
                    <HandleComp text='Send' type='primary' onPress={sendMessage} />
                </KeyboardAvoidingView>
            </View>
        </View>
    );
};

export default DiscussionForums;