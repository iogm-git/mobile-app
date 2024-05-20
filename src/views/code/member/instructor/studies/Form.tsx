import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import Layouts from '@root/views/code/Layouts'
import { borderDefault, flexCustom, fontCustom, root, textCustom } from '@root/utils/Styles'
import NavigateComp from '@root/components/common/button/NavigateComp'
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
import SubmitComp from '@root/components/common/button/SubmitComp'

const icons = {
    ajax: AjaxIcon, 'c++': CppIcon, css: CssIcon, docker: DockerIcon,
    express: ExpressIcon, firebase: FirebaseIcon, git: GitIcon, github: GithubIcon,
    html: HtmlIcon, javascript: JavascriptIcon, laravel: LaravelIcon, mongodb: MongoDbIcon,
    mysql: MysqlIcon, php: PhpIcon, 'postgre-sql': PostgreSqlIcon, python: PythonIcon,
    react: ReactIcon, 'sql-server': SqlServerIcon, svg: SvgIcon, vue: VueIcon
};

type FormProps = PropsWithChildren<{
    type: string
}>

const Form = ({ type }: FormProps) => {
    const [icon, setIcon] = useState({ show: false, svg: '-- Choose Icon --' })

    const IconButtons = Object.entries(icons).map(([name, IconComponent]) => (
        <TouchableOpacity
            key={name}
            style={[borderDefault.borderS, { padding: root.sizeS }]}
            onPress={() => setIcon({ show: false, svg: name })}
        >
            <IconComponent width={root.sizeXxxx} height={root.sizeXxxx} />
        </TouchableOpacity>
    ));

    return (
        <Layouts>
            <Text style={[textCustom.textBold, { textTransform: 'capitalize' }]}>{type} Course</Text>
            <NavigateComp text='Cancel' type='warning' goBack />
            <Text style={[textCustom.textMedium, {
                paddingVertical: root.sizeXs,
                borderTopColor: root.borderColor,
                borderTopWidth: 1,
            }]}>Form</Text>
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
                <Text style={[fontCustom.fontBold, { fontSize: root.sizeM }]}>Icon Svg</Text>
                <TouchableOpacity
                    onPress={() => setIcon(prev => ({ ...prev, show: !prev.show }))}
                    style={[borderDefault.borderS, { paddingHorizontal: root.sizeXs, paddingVertical: root.sizeM }]}
                >
                    <Text style={[textCustom.textRegular, { textTransform: 'capitalize' }]}>{icon.svg}</Text>
                </TouchableOpacity>
            </View>

            {icon.show && (
                <ModalComp title='Choose Icon Svg' onClose={() => setIcon(prev => ({ ...prev, show: false }))}>
                    <View style={flexCustom.flexRowBetween}>
                        {IconButtons}
                    </View>
                </ModalComp>
            )}

            <View>
                <Text style={[fontCustom.fontBold, { fontSize: root.sizeM }]}>Level</Text>
                <View style={flexCustom.flexRowStart}>
                    <TouchableOpacity style={[borderDefault.borderS, { paddingHorizontal: root.sizeM, paddingVertical: root.sizeXxs }]}>
                        <Text style={textCustom.textRegular}>Junior</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[borderDefault.borderS, { paddingHorizontal: root.sizeM, paddingVertical: root.sizeXxs }]}>
                        <Text style={textCustom.textRegular}>Midle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[borderDefault.borderS, { paddingHorizontal: root.sizeM, paddingVertical: root.sizeXxs }]}>
                        <Text style={textCustom.textRegular}>Senior</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Text style={[fontCustom.fontBold, { fontSize: root.sizeM }]}>Visibility</Text>
                <View style={flexCustom.flexRowStart}>
                    <TouchableOpacity style={[borderDefault.borderS, { paddingHorizontal: root.sizeM, paddingVertical: root.sizeXxs }]}>
                        <Text style={textCustom.textRegular}>Public</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[borderDefault.borderS, { paddingHorizontal: root.sizeM, paddingVertical: root.sizeXxs }]}>
                        <Text style={textCustom.textRegular}>Student</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[borderDefault.borderS, { paddingHorizontal: root.sizeM, paddingVertical: root.sizeXxs }]}>
                        <Text style={textCustom.textRegular}>Private</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <SubmitComp text='Submit' type='primary' handleSubmitOnPress={() => console.log('asd')} />
        </Layouts>
    )
}

export default Form
