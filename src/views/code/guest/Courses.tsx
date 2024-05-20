import React from 'react'
import CardCourseComp, { styles } from '@root/components/specific/code/CardCourseComp'
import Layouts from '../Layouts'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { borderDefault, buttonDefault, flexCustom, fontCustom, root, textCustom } from '@root/utils/Styles'

import SearchIcon from '@svg/common/code/search'
import PaginationComp from '@root/components/common/PaginationComp'

const Courses = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>Courses</Text>
            <View style={[borderDefault.borderS, flexCustom.flexRowBetween, { padding: root.sizeM }]}>
                <TextInput style={fontCustom.fontMedium} placeholder='Search...' />
                <SearchIcon width={root.sizeL} height={root.sizeL} fill={root.linkColor} />
            </View>

            <View style={{ rowGap: root.sizeXxs }}>
                <Text style={textCustom.textLight}>Categories :</Text>
                <ScrollView horizontal>
                    <View style={[flexCustom.flexRowStart, { flexWrap: 'nowrap' }]}>
                        <TouchableOpacity style={buttonDefault.buttonSmall}>
                            <Text style={textCustom.textLight}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={buttonDefault.buttonSmall}>
                            <Text style={textCustom.textLight}>C++</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={buttonDefault.buttonSmall}>
                            <Text style={textCustom.textLight}>Docer</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

            <View style={{ rowGap: root.sizeXxs }}>
                <Text style={textCustom.textLight}>Filter :</Text>
                <View style={flexCustom.flexRowStart}>
                    <TouchableOpacity style={buttonDefault.buttonSmall}>
                        <Text style={textCustom.textLight}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={buttonDefault.buttonSmall}>
                        <Text style={textCustom.textLight}>Free</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={buttonDefault.buttonSmall}>
                        <Text style={textCustom.textLight}>Paid</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ rowGap: root.sizeXxs }}>
                <Text style={textCustom.textLight}>Instructor :</Text>
                <ScrollView horizontal>
                    <View style={[flexCustom.flexRowStart, { flexWrap: 'nowrap' }]}>
                        <TouchableOpacity style={buttonDefault.buttonSmall}>
                            <Text style={textCustom.textLight}>Ilham</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={buttonDefault.buttonSmall}>
                            <Text style={textCustom.textLight}>Rahmat</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <PaginationComp />
            <CardCourseComp icon='html' title='html' content='html'>
                {() =>
                    <View style={flexCustom.flexRowStart}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: root.blueColor }]}>
                            <Text style={styles.buttonText}>Buy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: root.orangeColor }]}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                }
            </CardCourseComp>
            <CardCourseComp icon='html' title='html' content='html'>
                {() =>

                    <View style={flexCustom.flexRowStart}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: root.blueColor }]}>
                            <Text style={styles.buttonText}>Buy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: root.orangeColor }]}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                }
            </CardCourseComp>
            <PaginationComp />
        </Layouts>
    )
}

export default Courses