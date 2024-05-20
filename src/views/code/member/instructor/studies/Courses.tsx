import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Layouts from '@root/views/code/Layouts';
import { flexCustom, root, textCustom } from '@root/utils/Styles';
import NavigateComp from '@root/components/common/button/NavigateComp';
import CardCourseComp, { styles } from '@root/components/specific/code/CardCourseComp';
import PaginationComp from '@root/components/common/PaginationComp';
import { useNavigation } from '@react-navigation/native';

const Courses = () => {
    const navigation = useNavigation();

    return (
        <Layouts>
            <Text style={textCustom.textBold}>Courses</Text>
            <NavigateComp text='Add Course' type='primary' to='code-member-instructor-Store-Course' />

            <View style={{ rowGap: root.sizeM }}>
                <CardCourseComp
                    icon='html'
                    title='html'
                    content='html'
                >
                    {({ setModalVisible }) =>
                        <View style={flexCustom.flexRowStart}>
                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: root.orangeColor }]}
                                onPress={() => {
                                    navigation.navigate('code-member-instructor-Update-Course');
                                    setModalVisible(false);
                                }}
                            >
                                <Text style={styles.buttonText}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: root.greenColor }]}
                                onPress={() => {
                                    navigation.navigate('code-member-instructor-Sections');
                                    setModalVisible(false);
                                }}
                            >
                                <Text style={styles.buttonText}>See</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, { backgroundColor: root.redColor }]}>
                                <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>
                        </View>}
                </CardCourseComp>
                <PaginationComp />
            </View>
        </Layouts>
    );
};

export default Courses;