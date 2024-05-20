import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Layouts from '../../Layouts'
import { borderDefault, flexCustom, root, textCustom } from '@root/utils/Styles'

import UserIcon from '@svg/member/code/user'
import CalendarIcon from '@svg/member/code/calendar'
import AddressIcon from '@svg/member/code/location'

const Profile = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>Profile</Text>
            <Image source={{ uri: 'https://scontent.cdninstagram.com/v/t51.29350-15/437375432_441314685089013_7185413258698744672_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=FYmnaGTvz_UQ7kNvgH_UHNo&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzM0MzA4NzExMDA1MDUwNTMwNw%3D%3D.2-ccb7-5&oh=00_AYAR8-rMeBwIPTvifa8m_2pmI4RctMcTUYJyTP2bPGeXBQ&oe=664B7E51&_nc_sid=10d13b' }} style={styles.image} />
            <View style={{ rowGap: root.sizeM }}>
                <View style={styles.box}>
                    <UserIcon width={root.sizeX} height={root.sizeX} fill={root.textColor} />
                    <View style={styles.pack}>
                        <View style={flexCustom.flexRowStart}>
                            <Text style={styles.key}>Username</Text>
                            <Text style={textCustom.textRegular}>: Fathia</Text>
                        </View>
                        <View style={flexCustom.flexRowStart}>
                            <Text style={styles.key}>Name</Text>
                            <Text style={textCustom.textRegular}>: Fathia</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.box}>
                    <CalendarIcon width={root.sizeX} height={root.sizeX} fill={root.textColor} />
                    <View style={styles.pack}>
                        <View style={flexCustom.flexRowStart}>
                            <Text style={styles.key}>Date of birth</Text>
                            <Text style={textCustom.textRegular}>: Fathia</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.box}>
                    <AddressIcon width={root.sizeX} height={root.sizeX} fill={root.textColor} />
                    <View style={styles.pack}>
                        <View style={flexCustom.flexRowStart}>
                            <Text style={styles.key}>Address</Text>
                            <Text style={textCustom.textRegular}>: Fathia</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ rowGap: root.sizeM }}>
                <View style={flexCustom.flexRowStart}>
                    <View style={styles.pack}>
                        <Text style={textCustom.textMedium}>Answers</Text>
                        <Text style={textCustom.textLight}>5</Text>
                    </View>
                    <View style={styles.pack}>
                        <Text style={textCustom.textMedium}>Earnings</Text>
                        <Text style={textCustom.textLight}>5</Text>
                    </View>
                </View>
                <View style={styles.pack}>
                    <Text style={textCustom.textMedium}>Course Reviews</Text>
                    <Text style={textCustom.textLight}>5</Text>
                </View>
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
        ...flexCustom.flexRowStart,
        ...borderDefault.borderS,
        padding: root.sizeS,
        backgroundColor: root.thirdBgColor
    },
    pack: {
        flex: 1,
        ...borderDefault.borderS,
        backgroundColor: root.secondBgColor,
        padding: root.sizeS
    },
    key: {
        ...flexCustom.flexRowStart,
        width: 70
    }
})

export default Profile