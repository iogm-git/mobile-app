import ImagePicker from 'react-native-image-crop-picker';
import React, { PropsWithChildren, useState } from 'react';
import { Image, TouchableOpacity, Text, View, ViewStyle, ImageStyle, TextStyle } from 'react-native';

import { size, textCustom, flexCustom, borderDefault, color } from '@root/utils/Styles';

import GalleryIcon from '@svg/member/gallery'

import Element from './Element';
import { useSelector } from 'react-redux';
import { RootState } from '@root/redux/store';

type InputImageProps = PropsWithChildren<{
    name: string;
    handleInputOnChange?: (value: string) => void;
}>

const InputImageComp = ({ name = 'Image', handleInputOnChange }: InputImageProps) => {
    const [image, setImage] = useState<string | null>(null);
    const { theme } = useSelector((state: RootState) => state.theme)

    const openImagePicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            includeBase64: true
        }).then(image => {
            setImage(image.path);
            if (handleInputOnChange) {
                handleInputOnChange(image.data);
            }
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <Element name={name}>
            <View style={{
                padding: size.s,
                rowGap: size.s
            }}>
                <TouchableOpacity onPress={openImagePicker} style={{
                    ...(flexCustom.flexRowBetween as ViewStyle),
                    backgroundColor: color.transBlue,
                    padding: size.s,
                    borderRadius: size.radiusS,
                }}>
                    <Text style={{
                        ...(textCustom(theme).textRegular as TextStyle),
                        color: color.blue
                    }}>- Choose Image -</Text>
                    <GalleryIcon width={size.l} height={size.l} fill={color.blue} />
                </TouchableOpacity>
                {image &&
                    <>
                        <Image source={{ uri: image }} style={{
                            ...borderDefault(theme).borderS as ImageStyle,
                            height: 300
                        }} />
                        <TouchableOpacity onPress={() => {
                            if (handleInputOnChange) {
                                handleInputOnChange('')
                            }
                            setImage('')
                        }}>
                            <Text style={{
                                ...textCustom(theme).textLight as ViewStyle,
                                color: color.red,
                                textAlign: 'center',
                                textDecorationColor: color.red,
                                textDecorationLine: 'underline'
                            }}>Cancel</Text>
                        </TouchableOpacity>
                    </>
                }
            </View>
        </Element >
    );
};

export default InputImageComp;
