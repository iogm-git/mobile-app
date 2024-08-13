import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';
import Layouts from '@root/views/code/Layouts';
import { borderDefault, fontCustom, size, textCustom } from '@root/utils/Styles';
import SubmitComp from '@root/components/common/button/SubmitComp';
import NavigateComp from '@root/components/common/button/NavigateComp';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@root/redux/store';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useForm } from '@root/utils/Form';
import {
    instructorLessonsActions,
    instructorStoreLessonActions,
    instructorUpdateLessonActions
} from '@root/redux/code/actions/member';
import BadgeComp from '@root/components/common/alert/BadgeComp';
import LoadingComp from '@root/components/common/LoadingComp';
import ModalComp from '@root/components/common/alert/ModalComp';
import CodeEditorComp from '@root/components/specific/code/CodeEditorComp';
import ShowIconProgrammingComp from '@root/components/specific/code/member/instructor/ShowIconProgrammingComp';

type FormProps = PropsWithChildren<{
    type: string;
}>;

type RouteParams = {
    data?: any;
};

const Form = ({ type }: FormProps) => {
    const { theme } = useSelector((state: RootState) => state.theme);
    const dispatch = useDispatch();

    const {
        data: storeSuccess,
        error: storeError,
        loading: storeLoading
    } = useSelector((state: RootState) => state.code.instructorStoreLessonResult);
    const {
        data: updateSuccess,
        error: updateError,
        loading: updateLoading
    } = useSelector((state: RootState) => state.code.instructorUpdateLessonResult);

    const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();

    const {
        orderIn,
        courseId,
        courseTitle,
        sectionId,
        sectionTitle,
        lessonId,
        lessonTitle,
        description,
        code,
        price,
        iconSvg,
        level,
        status
    } = route.params.data;

    const [codeValue, setCodeValue] = useState(code || '');

    const initialState = useMemo(() => ({
        id: lessonId || '',
        section_id: sectionId || '',
        title: lessonTitle || '',
        description: description || '',
        code: code || '',
        order_in_section: orderIn || '',
    }), [
        lessonId,
        sectionId,
        lessonTitle,
        description,
        code,
        orderIn
    ]);

    const { formData, setFormData, handleCustomChange } = useForm(initialState);

    useEffect(() => {
        setFormData(initialState);
        setCodeValue(code || '');
    }, [initialState]);

    const handleWhenInputChange = useCallback((value: string) => {
        setCodeValue(value);
    }, []);

    const modalClose = useCallback(() => {
        dispatch(instructorLessonsActions.init(sectionId));
        setFormData(initialState);
        setCodeValue('');
        dispatch(instructorStoreLessonActions.success(null));
        dispatch(instructorUpdateLessonActions.success(null));
    }, [dispatch, sectionId, initialState, setFormData]);

    const errorClose = useCallback(() => {
        if (type === 'store') {
            dispatch(instructorStoreLessonActions.failure(null));
        } else {
            dispatch(instructorUpdateLessonActions.failure(null));
        }
    }, [dispatch, type]);

    const languageChoiceInitial = { show: false, language: '' };
    const [languageChoice, setLanguageChoice] = useState(languageChoiceInitial);

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <Text style={[textCustom(theme).textBold, { textTransform: 'capitalize' }]}>{type} Lesson</Text>

                <View>
                    <Text style={[fontCustom(theme).fontBold, { fontSize: size.m }]}>Title</Text>
                    <TextInput
                        style={[
                            borderDefault(theme).borderS,
                            textCustom(theme).textRegular, {
                                paddingHorizontal: size.xs,
                                paddingVertical: size.xxs,
                                marginBottom: size.xxs
                            }]}
                        value={formData.title}
                        onChangeText={value => handleCustomChange(value, 'title')}
                    />
                    {((storeError?.title || updateError?.title) && (
                        <BadgeComp
                            text={storeError?.title?.[0] || updateError?.title?.[0]}
                            type='danger'
                            onClose={errorClose}
                        />
                    ))}
                </View>

                <View>
                    <Text style={[fontCustom(theme).fontBold, { fontSize: size.m }]}>Description</Text>
                    <TextInput
                        style={[
                            borderDefault(theme).borderS,
                            textCustom(theme).textRegular, {
                                paddingHorizontal: size.xs,
                                paddingVertical: size.xxs,
                                marginBottom: size.xxs
                            }]}
                        multiline
                        numberOfLines={2}
                        value={formData.description}
                        onChangeText={value => handleCustomChange(value, 'description')}
                    />
                    {((storeError?.description || updateError?.description) && (
                        <BadgeComp
                            text={storeError?.description?.[0] || updateError?.description?.[0]}
                            type='danger'
                            onClose={errorClose}
                        />
                    ))}
                </View>

                <View>
                    <Text style={[fontCustom(theme).fontBold, { fontSize: size.m }]}>Code</Text>
                    <TouchableOpacity
                        onPress={() => setLanguageChoice(prev => ({ ...prev, show: !prev.show }))}
                        style={[
                            borderDefault(theme).borderS, {
                                paddingHorizontal: size.xs,
                                paddingVertical: size.xxs,
                                marginBottom: size.xxs
                            }]}
                    >
                        <Text style={[textCustom(theme).textRegular, { textTransform: 'capitalize' }]}>
                            {languageChoice.language === '' ? 'Choice Language: javascript' : `Choice Language: ${languageChoice.language}`}
                        </Text>
                    </TouchableOpacity>

                    {languageChoice.show && (
                        <ShowIconProgrammingComp
                            onClose={() => setLanguageChoice(prev => ({ ...prev, show: !prev.show }))}
                            onChange={value => setLanguageChoice({ show: false, language: value })}
                        />
                    )}

                    <CodeEditorComp
                        defaultValue={code ? code : codeValue}
                        language={languageChoice.language || 'javascript'}
                        handleInputOnChange={(value: any) => handleWhenInputChange(value)}
                    />

                    {((storeError?.code || updateError?.code) && (
                        <BadgeComp
                            text={storeError?.code?.[0] || updateError?.code?.[0]}
                            type='danger'
                            onClose={errorClose}
                        />
                    ))}
                </View>

                <View>
                    <Text style={[fontCustom(theme).fontBold, { fontSize: size.m }]}>Order In Section</Text>
                    <TextInput
                        style={[
                            borderDefault(theme).borderS,
                            textCustom(theme).textRegular, {
                                paddingHorizontal: size.xs,
                                paddingVertical: size.xxs,
                                marginBottom: size.xxs
                            }]}
                        keyboardType='numeric'
                        value={formData.order_in_section.toString()}
                        onChangeText={value => handleCustomChange(value, 'order_in_section')}
                    />
                    {((storeError?.order_in_section || updateError?.order_in_section) && (
                        <BadgeComp
                            text={storeError?.order_in_section?.[0] || updateError?.order_in_section?.[0]}
                            type='danger'
                            onClose={errorClose}
                        />
                    ))}
                </View>

                {(storeLoading || updateLoading) ? (
                    <LoadingComp type='primary' />
                ) : (
                    <SubmitComp
                        text='Submit'
                        type='primary'
                        onPress={() => {
                            if (type === 'store') {
                                dispatch(instructorStoreLessonActions.init(formData));
                            } else {
                                dispatch(instructorUpdateLessonActions.init(formData));
                            }
                        }}
                    />
                )}

                <NavigateComp
                    text='Cancel'
                    type='warning'
                    to='Member'
                    isNested
                    nested={{
                        screen: 'Instructor',
                        params: {
                            screen: 'Lessons',
                            params: {
                                data: {
                                    sectionId: sectionId,
                                    sectionTitle: sectionTitle,

                                    courseId: courseId,
                                    courseTitle: courseTitle,
                                    price: price,
                                    iconSvg: iconSvg,
                                    level: level,
                                    status: status
                                }
                            }
                        }
                    }}
                />
            </View>

            {(storeSuccess || updateSuccess) && (
                <ModalComp title='Section' onClose={modalClose}>
                    <View style={{ rowGap: size.s }}>
                        <BadgeComp text={storeSuccess || updateSuccess} type='success' onClose={modalClose} />
                        <NavigateComp
                            text='My Lessons'
                            type='primary'
                            to='Member'
                            isNested
                            nested={{
                                screen: 'Instructor',
                                params: {
                                    screen: 'Lessons',
                                    params: {
                                        data: {
                                            sectionId: sectionId,
                                            sectionTitle: sectionTitle,

                                            courseId: courseId,
                                            courseTitle: courseTitle,
                                            price: price,
                                            iconSvg: iconSvg,
                                            level: level,
                                            status: status
                                        }
                                    }
                                }
                            }}
                            onPress={modalClose}
                        />
                    </View>
                </ModalComp>
            )}
        </Layouts>
    );
};

export default Form;