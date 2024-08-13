import { useSelector } from 'react-redux';
import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity, ViewStyle, StyleSheet } from 'react-native';

import UserIcon from '@svg/member/code/user';
import ClickIcon from '@svg/common/code/click';
import PriceIcon from '@svg/member/code/paid';
import CourseIcon from '@svg/drawer/code/courses'

import { color, flexCustom, fontFamily, size } from '@root/utils/Styles';

import BadgeComp from '@root/components/common/alert/BadgeComp';

import AjaxIcon from '@svg/common/code/programming/ajax';
import CppIcon from '@svg/common/code/programming/cpp';
import CssIcon from '@svg/common/code/programming/css';
import DockerIcon from '@svg/common/code/programming/docker';
import ExpressIcon from '@svg/common/code/programming/express';
import FirebaseIcon from '@svg/common/code/programming/firebase';
import GitIcon from '@svg/common/code/programming/git';
import GithubIcon from '@svg/common/code/programming/github';
import HtmlIcon from '@svg/common/code/programming/html';
import JavascriptIcon from '@svg/common/code/programming/javascript';
import LaravelIcon from '@svg/common/code/programming/laravel';
import MongoDbIcon from '@svg/common/code/programming/mongodb';
import MysqlIcon from '@svg/common/code/programming/mysql';
import PhpIcon from '@svg/common/code/programming/php';
import PostgreSqlIcon from '@svg/common/code/programming/postgre-sql';
import PythonIcon from '@svg/common/code/programming/python';
import ReactIcon from '@svg/common/code/programming/react';
import SqlServerIcon from '@svg/common/code/programming/sql-server';
import SvgIcon from '@svg/common/code/programming/svg';
import VueIcon from '@svg/common/code/programming/vue';

import { RootState } from '@root/redux/store';
import { _formatCurrency } from '@root/utils/Helper';
import LoadingComp from '@root/components/common/LoadingComp';

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
    "vue": VueIcon,
};

interface CardCourseProps {
    setVisible: () => void
    isLoading?: boolean
    data: {
        icon_svg: string,
        title: string,
        price: string,
        level: string,
        status: string,
        instructor: {
            name: string;
        }
    }
}

const CardCourseComp = ({ data, setVisible, isLoading }: CardCourseProps) => {
    const IconComponent = iconMap[data.icon_svg] || null;

    const { theme, colors } = useSelector((state: RootState) => state.theme);

    return (
        <>
            <View style={styles.cardContainer}>
                <ImageBackground source={require('assets/image/code/background.png')} resizeMode='cover'
                    style={styles.imageBackground}>
                    <View style={[styles.iconContainer, { backgroundColor: theme === 'dark' ? colors.text : colors.bg }]}>
                        {IconComponent && <IconComponent width={35} height={35} />}
                    </View>
                    <View style={[styles.infoContainer, { backgroundColor: theme === 'dark' ? colors.transBg : colors.transText }]}>
                        <View style={flexCustom.flexRowStart as ViewStyle}>
                            <CourseIcon fill={theme === 'dark' ? colors.text : colors.bg} width={size.l} height={size.l} />
                            <Text style={[styles.instructorText, { color: theme === 'dark' ? colors.text : colors.bg }]}>
                                {data.title}
                            </Text>
                        </View>
                        <View style={flexCustom.flexRowStart as ViewStyle}>
                            <UserIcon fill={theme === 'dark' ? colors.text : colors.bg} width={size.l} height={size.l} />
                            <Text style={[styles.instructorText, { color: theme === 'dark' ? colors.text : colors.bg }]}>
                                {data.instructor.name}
                            </Text>
                        </View>
                        <View style={flexCustom.flexRowStart as ViewStyle}>
                            <PriceIcon fill={theme === 'dark' ? colors.text : colors.bg} width={size.l} height={size.l} />
                            <Text style={[styles.priceText, { color: theme === 'dark' ? colors.text : colors.bg }]}>
                                {_formatCurrency(data.price)}
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
                {isLoading ? <LoadingComp type='primary' /> :
                    <TouchableOpacity onPress={setVisible} style={[flexCustom.flexRowBetween as ViewStyle]}>
                        <View style={{ flex: 1 }}>
                            <BadgeComp text={data.level} type='primary' />
                        </View>
                        <View style={styles.clickIconContainer}>
                            <ClickIcon width={size.l} height={size.l} fill={color.blue} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <BadgeComp text={data.status === 'public' ? 'free' : 'paid'} type={data.status === 'public' ? 'success' : 'primary'} />
                        </View>
                    </TouchableOpacity>}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        rowGap: size.xs,
    },
    imageBackground: {
        justifyContent: 'center',
        padding: size.m,
        borderRadius: size.radiusS,
        overflow: 'hidden',
    },
    iconContainer: {
        padding: size.xxs,
        borderRadius: size.radiusS,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    infoContainer: {
        alignSelf: 'center',
        padding: size.s,
        borderRadius: size.radiusS,
        marginTop: size.m,
    },
    instructorText: {
        fontFamily: fontFamily.medium,
        fontSize: size.s,
    },
    priceText: {
        fontFamily: fontFamily.medium,
        fontSize: size.m,
    },
    clickIconContainer: {
        width: size.xxx,
        height: size.xxx,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 99,
        borderWidth: 1,
        borderColor: color.blue,
        flex: 1,
    },
});

export default CardCourseComp;
