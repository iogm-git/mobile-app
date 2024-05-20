import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Layouts from '../../Layouts'
import { flexCustom, root, textCustom } from '@root/utils/Styles'
import CardCourseComp, { styles } from '@root/components/specific/code/CardCourseComp'

const Stashes = () => {
    return (
        <Layouts>
            <Text style={textCustom.textBold}>Stashes</Text>
            <CardCourseComp icon='html' title='html' content='html'>
                {() =>

                    <View style={flexCustom.flexRowStart}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: root.blueColor }]}>
                            <Text style={styles.buttonText}>See</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: root.orangeColor }]}>
                            <Text style={styles.buttonText}>Buy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: root.greenColor }]}>
                            <Text style={styles.buttonText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                }
            </CardCourseComp>
        </Layouts>
    )
}

export default Stashes