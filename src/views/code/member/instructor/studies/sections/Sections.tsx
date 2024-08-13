import { View, Text, ViewStyle } from 'react-native'
import React, { useEffect } from 'react'
import Layouts from '@root/views/code/Layouts'
import { flexCustom, size, textCustom } from '@root/utils/Styles'

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
import VueIcon from '@svg/common/code/programming/vue'

import NavigateComp from '@root/components/common/button/NavigateComp'
import CardSectionLessonComp from '@root/components/specific/code/member/instructor/CardSectionLessonComp'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@root/redux/store'
import { _formatCurrency } from '@root/utils/Helper'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { CodeTabsStackParamList } from '@root/utils/Navigation'
import { instructorSectionsActions } from '@root/redux/code/actions/member'
import LoadingComp from '@root/components/common/LoadingComp'
import BadgeComp from '@root/components/common/alert/BadgeComp'
import CardComp from '@root/components/specific/code/member/card/CardComp'
import ElementComp from '@root/components/specific/code/member/card/ElementComp'

const icons = {
    ajax: AjaxIcon, 'c++': CppIcon, css: CssIcon, docker: DockerIcon,
    express: ExpressIcon, firebase: FirebaseIcon, git: GitIcon, github: GithubIcon,
    html: HtmlIcon, javascript: JavascriptIcon, laravel: LaravelIcon, mongodb: MongoDbIcon,
    mysql: MysqlIcon, php: PhpIcon, 'postgre-sql': PostgreSqlIcon, python: PythonIcon,
    react: ReactIcon, 'sql-server': SqlServerIcon, svg: SvgIcon, vue: VueIcon
};

type IconType = keyof typeof icons;

type RouteParams = {
    data: {
        courseId: string;
        courseTitle: string;
        price: number;
        iconSvg: IconType;
        level: string;
        status: string;
    }
}

const Sections = () => {
    const { theme } = useSelector((state: RootState) => state.theme)

    const navigation = useNavigation<NavigationProp<CodeTabsStackParamList>>()

    const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>()
    const { courseId, courseTitle, price, iconSvg, level, status } = route.params.data

    const IconComp = icons[iconSvg]

    const dispatch = useDispatch()

    const { data: sections, loading: sectionsLoading } = useSelector((state: RootState) => state.code.instructorSectionsResult)

    useEffect(() => {
        if (courseId) {
            dispatch(instructorSectionsActions.init(courseId))
        } else {
            navigation.navigate('Member', { screen: 'Instructor', params: { screen: 'Courses' } })
        }
    }, [courseId])

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <Text style={[textCustom(theme).textBold, { textAlign: 'center' }]}>Sections</Text>
                <View style={{ alignSelf: 'center' }}>
                    <IconComp width={size.xxxx * 2} />
                </View>
                <CardComp>
                    <ElementComp keyword='title' value={courseTitle} />
                    <ElementComp keyword='status' value={status} />
                    <ElementComp keyword='level' value={level} />
                    <ElementComp keyword='price' value={_formatCurrency(price)} />
                </CardComp>

                <View style={flexCustom.flexRowCenter as ViewStyle}>
                    <NavigateComp
                        text='Back'
                        type='warning'
                        to='Member'
                        isNested
                        nested={{ screen: 'Instructor', params: { screen: 'Courses' } }} />
                    <NavigateComp
                        text='Add Section'
                        type='primary'
                        to='Member'
                        isNested
                        nested={{
                            screen: 'Instructor',
                            params: {
                                screen: 'StoreSection',
                                params: {
                                    data: {
                                        sectionId: '',
                                        title: '',
                                        orderIn: '',

                                        courseId: courseId,
                                        courseTitle: courseTitle,
                                        price: price,
                                        iconSvg: iconSvg,
                                        level: level,
                                        status: status,
                                    }
                                }
                            }
                        }} />
                </View>

                <View style={{ rowGap: size.m }}>
                    {sectionsLoading ? <LoadingComp type='primary' /> : (!sections || !sections.length) ? <BadgeComp text='No Sections' type='warning' /> :
                        sections.map((value: any, index: any) => (
                            <CardSectionLessonComp
                                key={index}
                                type='section'
                                order={index + 1}
                                orderIn={value.order_in_course}
                                created_at={value.created_at}
                                updated_at={value.updated_at}

                                sectionId={value.id}
                                sectionTitle={value.title}

                                courseId={value.course_id}
                                courseTitle={courseTitle}
                                price={price}
                                iconSvg={iconSvg}
                                level={level}
                                status={status}
                            />
                        ))}
                </View>
            </View>
        </Layouts>
    )
}

export default Sections