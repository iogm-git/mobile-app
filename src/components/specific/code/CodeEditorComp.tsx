import React, { useCallback, useEffect } from 'react';
import CodeEditor, { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';
import { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import { size, textCustom } from '@root/utils/Styles';
import { useSelector } from 'react-redux';
import { RootState } from '@root/redux/store';

type CustomCodeEditorProps = PropsWithChildren<{
    language: any;
    defaultValue?: any
    readOnly?: boolean
    handleInputOnChange?: (value: any) => void
}>;

const CodeEditorComp = ({ language, defaultValue, readOnly, handleInputOnChange }: CustomCodeEditorProps): JSX.Element => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    const handleChange = useCallback((value: any) => {
        if (handleInputOnChange) {
            handleInputOnChange(value);
        }
    }, []);

    useEffect(() => {

    }, [defaultValue])

    return (
        <View style={{ borderRadius: size.radiusS, overflow: 'hidden' }}>
            <Text style={[textCustom(theme).textLight, {
                paddingHorizontal: size.xxs,
                paddingVertical: 2,
                backgroundColor: colors.text,
                color: colors.bg,
                textTransform: 'capitalize'
            }]}>{language === '' ? '-' : language}</Text>
            <CodeEditor
                style={{
                    fontSize: 20,
                    inputLineHeight: 26,
                    highlighterLineHeight: 26,
                    height: 350,
                }}
                onChange={handleChange}
                language={language}
                syntaxStyle={CodeEditorSyntaxStyles.atomOneDark}
                showLineNumbers
                initialValue={defaultValue}
                readOnly={readOnly}
                autoFocus={false}
            />
        </View>
    );
};

export default CodeEditorComp;