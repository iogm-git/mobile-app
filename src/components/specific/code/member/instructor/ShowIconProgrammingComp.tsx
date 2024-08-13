import React, { PropsWithChildren } from 'react'
import { View, TouchableOpacity, ViewStyle } from 'react-native'
import { useSelector } from 'react-redux'

import { RootState } from '@root/redux/store'

import { borderDefault, flexCustom, size } from '@root/utils/Styles'

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
import VueIcon from '@svg/common/code/programming/vue'

const icons = {
    ajax: AjaxIcon, 'c++': CppIcon, css: CssIcon, docker: DockerIcon,
    express: ExpressIcon, firebase: FirebaseIcon, git: GitIcon, github: GithubIcon,
    html: HtmlIcon, javascript: JavascriptIcon, laravel: LaravelIcon, mongodb: MongoDbIcon,
    mysql: MysqlIcon, php: PhpIcon, 'postgre-sql': PostgreSqlIcon, python: PythonIcon,
    react: ReactIcon, 'sql-server': SqlServerIcon, svg: SvgIcon, vue: VueIcon
};

type ShowIconProgrammingProps = PropsWithChildren<{
    onClose: () => void
    onChange: (value: any) => void
}>

const ShowIconProgrammingComp = ({ onChange, onClose }: ShowIconProgrammingProps) => {
    const { theme } = useSelector((state: RootState) => state.theme)

    return (
        <ModalComp title='Choise' onClose={onClose}>
            <View style={flexCustom.flexRowBetween as ViewStyle}>
                {Object.entries(icons).map(([name, IconComponent]) => (
                    <TouchableOpacity
                        key={name}
                        style={[borderDefault(theme).borderS, { padding: size.s }]}
                        onPress={() => onChange(name)}
                    >
                        <IconComponent width={size.xxxx} height={size.xxxx} />
                    </TouchableOpacity>
                ))}
            </View>
        </ModalComp>
    )
}

export default ShowIconProgrammingComp