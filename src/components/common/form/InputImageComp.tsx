import { root, textCustom, flexCustom } from '@root/utils/Styles';
import React, { PropsWithChildren, useState } from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import GalleryIcon from '@svg/member/gallery'
import Element from './Element';

type InputImageProps = PropsWithChildren<{
    name: string;
}>

const InputImageComp = ({ name = 'Image' }: InputImageProps) => {
    const [image, setImage] = useState(null);

    const openImagePicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImage(image.path);
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <Element name={name}>
            <View style={{
                padding: root.sizeS
            }}>
                <TouchableOpacity onPress={openImagePicker} style={{
                    ...flexCustom.flexRowBetween,
                    backgroundColor: root.transblueColor,
                    padding: root.sizeS,
                    borderRadius: root.radiusS,
                }}>
                    <Text style={{
                        ...textCustom.textRegular,
                        color: root.blueColor
                    }}>- Choise Image -</Text>
                    <GalleryIcon width={root.sizeL} height={root.sizeL} fill={root.blueColor} />
                </TouchableOpacity>
                {image && <Image source={{ uri: image }} style={{ width: 300, height: 400 }} />}
            </View>
        </Element>
    );
};

export default InputImageComp;
