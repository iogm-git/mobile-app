import React from 'react'
import Layouts from '../Layouts'
import { Image, StyleSheet, Text, View } from 'react-native'
import { borderDefault, flexCustom, fontCustom, root, textCustom } from '@root/utils/Styles'

import VerifiedIcon from '@svg/member/shop/verified'

const Profile = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>Profile</Text>
            <Image source={{ uri: 'https://scontent.cdninstagram.com/v/t51.29350-15/437375432_441314685089013_7185413258698744672_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=FYmnaGTvz_UQ7kNvgH_UHNo&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzM0MzA4NzExMDA1MDUwNTMwNw%3D%3D.2-ccb7-5&oh=00_AYAR8-rMeBwIPTvifa8m_2pmI4RctMcTUYJyTP2bPGeXBQ&oe=664B7E51&_nc_sid=10d13b' }} style={styles.image} />
            <View style={flexCustom.flexRowStart}>
                <Text style={textCustom.textMedium}>Welcome,</Text>
                <Text style={textCustom.textMedium}>Fathia Febrianti</Text>
                <View style={{
                    alignSelf: 'flex-start'
                }}>
                    <VerifiedIcon fill={root.blueColor} width={root.sizeM} height={root.sizeM} />
                </View>
            </View>
            <View style={styles.box}>
                <Text style={styles.key}>Username</Text>
                <Text style={styles.value}>fathia</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.key}>Email</Text>
                <Text style={styles.value}>fathia@gmail.com</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.key}>Name</Text>
                <Text style={styles.value}>Fathia Febrianti</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.key}>Stashes</Text>
                <Text style={styles.value}>0</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.key}>Last Transaction Unpaid</Text>
                <Text style={styles.value}>w031 | 50.000,00 | 07 May 2024</Text>
            </View>
        </Layouts>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 175,
        height: 175,
        borderRadius: root.radiusS,
        overflow: 'hidden'
    },
    box: {
        ...borderDefault.borderS,
        padding: root.sizeM,
    },
    key: {
        ...fontCustom.fontMedium,
        fontSize: root.sizeM,
    },
    value: {
        ...fontCustom.fontLight,
        color: root.textColor
    }

})

export default Profile