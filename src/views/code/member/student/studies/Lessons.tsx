import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { View, Text, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';

import Layouts from '@root/views/code/Layouts';

import { size, textCustom } from '@root/utils/Styles';
import { CodeTabsStackParamList } from '@root/utils/Navigation';

import PaginationComp from '@root/components/common/PaginationComp';

import { RootState } from '@root/redux/store';
import { studentCourseProgressActions, studentLessonsActions, studentUpdateCompletedLecturesActions } from '@root/redux/code/actions/member';

import CardComp from '@root/components/specific/code/member/card/CardComp';
import ModalComp from '@root/components/common/alert/ModalComp';
import BadgeComp from '@root/components/common/alert/BadgeComp';
import HandleComp from '@root/components/common/button/HandleComp';
import LoadingComp from '@root/components/common/LoadingComp';
import NavigateComp from '@root/components/common/button/NavigateComp';
import SyntaxHighlightComp from '@root/components/specific/code/SyntaxHighlightComp';
import BottomSheetModalComp from '@root/components/common/BottomSheetModalComp';

type RouteParams = PropsWithChildren<{
    data: any;
}>;

const Lessons = () => {
    const { theme } = useSelector((state: RootState) => state.theme);

    const contentRef = useRef<ScrollView>(null);

    const bottomSheetRef = useRef<BottomSheetModal>(null);

    const navigation = useNavigation<NavigationProp<CodeTabsStackParamList>>();

    const { data: lessons, loading: lessonsLoading } = useSelector((state: RootState) => state.code.studentLessonsResult);
    const { data: updateCompletedLecturesSuccess, loading: updateCompletedLecturesLoading } = useSelector((state: RootState) => state.code.studentUpdateCompletedLecturesResult)

    const dispatch = useDispatch();

    const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
    const { courseId, sectionId, title } = route.params?.data || {};

    const [yPositions, setYPositions] = useState<number[]>([]);

    useEffect(() => {
        if (sectionId) {
            dispatch(studentLessonsActions.init(1, sectionId, courseId));
        } else {
            navigation.navigate('Member', { screen: 'Student', params: { screen: 'Courses' } });
        }

    }, []);

    const handleScrollTo = (index: number) => {

        if (contentRef.current) {
            contentRef.current.scrollTo({ y: yPositions[index], animated: true });
        }
    };

    const modalClose = () => {
        dispatch(studentUpdateCompletedLecturesActions.success(null))
        dispatch(studentCourseProgressActions.init())
    }

    return (
        <>
            {/* <Layouts additional={
                <View style={{ flexDirection: 'row', columnGap: size.s, justifyContent: 'center', alignItems: 'center', paddingBottom: size.s }}>
                    <HandleComp small text='Open' type='primary' onPress={() => bottomSheetRef.current?.present()} />
                    <HandleComp small text='Close' type='warning' onPress={() => bottomSheetRef.current?.close()} />
                </View>
            }> */}
            <Layouts>
                <View style={{ rowGap: size.l }}>
                    <Text style={textCustom(theme).textBold}>{title}</Text>
                    <Text style={textCustom(theme).textLight}>The finish button will appear on the last page.</Text>
                    {lessonsLoading ? <LoadingComp type='primary' /> :
                        lessons && <>
                            {lessons.data.map((value: any, index: any) => (
                                <View key={index} onLayout={(event) => {
                                    const layout = event.nativeEvent.layout;
                                    setYPositions((prev) => {
                                        const newYPositions = [...prev];
                                        newYPositions[index] = layout.y;
                                        return newYPositions;
                                    });
                                }}>
                                    <CardComp order={index + 1}>
                                        <Text style={textCustom(theme).textMedium}>{value.title}</Text>
                                        <Text style={textCustom(theme).textLight}>{value.description}</Text>
                                        <SyntaxHighlightComp codeString={value.code} language={value.section.course.icon_svg} />
                                    </CardComp>
                                </View>
                            ))}
                            <PaginationComp data={lessons.links} onPageChange={value => dispatch(studentLessonsActions.init(value, sectionId, courseId))} />
                            {updateCompletedLecturesLoading ? <LoadingComp type='primary' /> : lessons.current_page === lessons.last_page &&
                                <HandleComp type='success' text='Finish' onPress={() => dispatch(studentUpdateCompletedLecturesActions.init({ course_id: courseId, section: title }))} />}
                        </>}
                </View>
                {updateCompletedLecturesSuccess &&
                    <ModalComp title='Finished lectures' onClose={modalClose}>
                        <View style={{ rowGap: size.s }}>
                            <BadgeComp text={updateCompletedLecturesSuccess} type='success' />
                            <NavigateComp
                                text='My progress'
                                type='primary'
                                to='Member'
                                isNested
                                nested={{
                                    screen: 'Student', params: {
                                        screen: 'Sections',
                                        params: {
                                            data: {
                                                courseId: courseId,
                                                title: title
                                            }
                                        }
                                    }
                                }}
                                onPress={() => dispatch(studentCourseProgressActions.init())}
                            />
                        </View>
                    </ModalComp>}
            </Layouts>
            {/* {<BottomSheetModalComp ref={bottomSheetRef}>
                <View style={{ padding: size.m }}>
                    {lessons && lessons.data.map((value: any, index: any) => (
                        <HandleComp key={index} text={value.title} type='primary'
                            onPress={() => handleScrollTo(index)}
                        />
                    ))}
                </View>
            </BottomSheetModalComp>} */}
        </>
    );
};

export default Lessons;
