import { View, Text } from 'react-native'
import React from 'react'
import Layouts from '@root/views/code/Layouts'
import { borderDefault, flexCustom, fontCustom, root, textCustom } from '@root/utils/Styles'

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
import SubmitComp from '@root/components/common/button/SubmitComp'

const icons = {
    ajax: AjaxIcon, 'c++': CppIcon, css: CssIcon, docker: DockerIcon,
    express: ExpressIcon, firebase: FirebaseIcon, git: GitIcon, github: GithubIcon,
    html: HtmlIcon, javascript: JavascriptIcon, laravel: LaravelIcon, mongodb: MongoDbIcon,
    mysql: MysqlIcon, php: PhpIcon, 'postgre-sql': PostgreSqlIcon, python: PythonIcon,
    react: ReactIcon, 'sql-server': SqlServerIcon, svg: SvgIcon, vue: VueIcon
};

const Sections = () => {
    const IconComp = icons['ajax']

    return (
        <Layouts>
            <Text style={textCustom.textBold}>Sections</Text>
            <IconComp width={root.sizeXxxx * 2} />
            <View style={[borderDefault.borderS, { padding: root.sizeM, rowGap: root.sizeXxs, backgroundColor: root.secondBgColor }]}>
                <View style={flexCustom.flexRowStart}>
                    <Text style={[fontCustom.fontMedium, { fontSize: root.sizeM, width: 60 }]}>Title</Text>
                    <Text style={textCustom.textRegular}>AJAX</Text>
                </View>
                <View style={flexCustom.flexRowStart}>
                    <Text style={[fontCustom.fontMedium, { fontSize: root.sizeM, width: 60 }]}>Status</Text>
                    <Text style={textCustom.textRegular}>Public</Text>
                </View>
                <View style={flexCustom.flexRowStart}>
                    <Text style={[fontCustom.fontMedium, { fontSize: root.sizeM, width: 60 }]}>Price</Text>
                    <Text style={textCustom.textRegular}>Rp. 15,000.00</Text>
                </View>
            </View>
            <Text style={textCustom.textRegular}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloribus nostrum vel tenetur. Mollitia provident laborum adipisci eos commodi, porro ex qui ipsam est quod impedit consequatur et doloremque explicabo maxime expedita quibusdam quaerat sapiente nulla quae repudiandae nobis. Eaque nulla qui modi debitis perspiciatis dolorem illo, iusto odio? Nemo explicabo repellat eos aut ab, minima alias libero delectus vel deserunt temporibus saepe molestias nisi obcaecati cum impedit sequi qui odit harum? Suscipit explicabo sequi impedit. Sed quo harum necessitatibus ab aliquid dolore praesentium consectetur nihil rem maiores reprehenderit aperiam, voluptatum dicta porro optio impedit aspernatur, maxime corporis, minus blanditiis?
            </Text>

            <View style={flexCustom.flexRowCenter}>
                <NavigateComp text='Back' type='warning' goBack />
                <NavigateComp text='Add Section' type='primary' to='code-member-instructor-Store-Section' />
                <NavigateComp text='Edit Section' type='success' to='code-member-instructor-Update-Section' />
                <NavigateComp text='Edit Section' type='danger' goBack />
            </View>

            <View style={{ rowGap: root.sizeM }}>
                <CardSectionLessonComp order={1} type='section' />
            </View>
        </Layouts>
    )
}

export default Sections