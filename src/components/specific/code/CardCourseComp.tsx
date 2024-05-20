import { View, ImageBackground, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import UserIcon from '@svg/member/code/user'
import ClickIcon from '@svg/common/code/click'
import PriceIcon from '@svg/member/code/paid'

import { buttonDefault, flexCustom, fontFamily, root, textCustom } from '@root/utils/Styles'
import BadgeComp from '@root/components/common/alert/BadgeComp'
import ModalComp from '@root/components/common/alert/ModalComp'

import AjaxIcon from '@svg/common/code/programming/ajax'
import CppIcon from '@svg/common/code/programming/cpp'
import CssIcon from '@svg/common/code/programming/css'
import DockerIcon from '@svg/common/code/programming/docker'
import ExpressIcon from '@svg/common/code/programming/express'
import FirebaseIcon from '@svg/common/code/programming/firebase'
import GitIcon from '@svg/common/code/programming/git'
import GithubIcon from '@svg/common/code/programming/github'
import HtmlIcon from '@svg/common/code/programming/html'
import JavascriptIcon from '@svg/common/code/programming/javascript'
import LaravelIcon from '@svg/common/code/programming/laravel'
import MongoDbIcon from '@svg/common/code/programming/mongodb'
import MysqlIcon from '@svg/common/code/programming/mysql'
import PhpIcon from '@svg/common/code/programming/php'
import PostgreSqlIcon from '@svg/common/code/programming/postgre-sql'
import PythonIcon from '@svg/common/code/programming/python'
import ReactIcon from '@svg/common/code/programming/react'
import SqlServerIcon from '@svg/common/code/programming/sql-server'
import SvgIcon from '@svg/common/code/programming/svg'
import VuewIcon from '@svg/common/code/programming/vue'

const iconMap = {
    "ajax": AjaxIcon,
    "cpp": CppIcon,
    "css": CssIcon,
    "docker": DockerIcon,
    "express": ExpressIcon,
    "firebase": FirebaseIcon,
    "git": GitIcon,
    "github": GithubIcon,
    "html": HtmlIcon,
    "javascript": JavascriptIcon,
    "laravel": LaravelIcon,
    "mongodb": MongoDbIcon,
    "mysql": MysqlIcon,
    "php": PhpIcon,
    "postgre-sql": PostgreSqlIcon,
    "python": PythonIcon,
    "react": ReactIcon,
    "sql-server": SqlServerIcon,
    "svg": SvgIcon,
    "vuew": VuewIcon,
};

interface CardCourseProps {
    children: ({ setModalVisible }: { setModalVisible: (visible: boolean) => void }) => React.ReactNode;
    icon: string;
    title: string;
    content: string;
}

const CardCourseComp = ({ children, icon, title, content }: CardCourseProps) => {
    const IconComponent = iconMap[icon] || null
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <View style={{
                rowGap: root.sizeXs
            }}>
                <ImageBackground source={require('assets/image/code/background.png')} resizeMode='cover'
                    style={{
                        justifyContent: 'center',
                        padding: root.sizeM,
                        borderRadius: root.radiusS,
                        overflow: 'hidden'
                    }}>
                    <View style={{
                        paddingHorizontal: root.sizeX,
                        paddingVertical: root.sizeM,
                        backgroundColor: root.bgColor,
                        borderRadius: root.radiusS,
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center'
                    }}>
                        <IconComponent width={75} height={50} />
                    </View>
                    <View style={{
                        backgroundColor: root.transtextColor,
                        padding: root.sizeS,
                        borderRadius: root.radiusS,
                        rowGap: root.sizeS,
                        marginTop: root.sizeM
                    }}>
                        <View style={flexCustom.flexRowStart}>
                            <UserIcon fill={root.bgColor} width={root.sizeX} height={root.sizeX} />
                            <Text style={{
                                fontFamily: fontFamily.medium,
                                fontSize: root.sizeM,
                                color: root.bgColor
                            }}>Ilham R.a</Text>
                        </View>
                        <View style={flexCustom.flexRowStart}>
                            <PriceIcon fill={root.bgColor} width={root.sizeX} height={root.sizeX} />
                            <Text style={{
                                fontFamily: fontFamily.medium,
                                fontSize: root.sizeM,
                                color: root.bgColor
                            }}>
                                Rp. 15,0000.00
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={flexCustom.flexRowBetween}>
                    <BadgeComp text='Junior' type='primary' />
                    <View style={{
                        width: root.sizeXxx,
                        height: root.sizeXxx,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 99,
                        borderWidth: 1,
                        borderColor: root.blueColor
                    }}>
                        <ClickIcon width={root.sizeL} height={root.sizeL} fill={root.blueColor} />
                    </View>
                    <BadgeComp text='Free' type='success' />
                </TouchableOpacity>
            </View>
            {modalVisible &&
                <ModalComp title={title} onClose={() => setModalVisible(!modalVisible)}>
                    {children({ setModalVisible })}
                    <ScrollView style={{
                        maxHeight: 300,
                        marginTop: root.sizeM
                    }}>
                        <Text style={textCustom.textRegular}>{content}</Text>
                    </ScrollView>
                </ModalComp>
            }
        </>
    )
}

export default CardCourseComp

export const styles = StyleSheet.create({
    button: {
        flex: 1,
        ...buttonDefault.buttonSmall
    },
    buttonText: {
        fontFamily: fontFamily.medium,
        fontSize: root.sizeS,
        color: root.bgColor,
        textAlign: 'center'
    }
})