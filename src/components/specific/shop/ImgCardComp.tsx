import { Image, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { root } from '@root/utils/Styles'

type ImgCardProps = PropsWithChildren<{
    picture: string;
}>

const pictureSources: { [key: string]: any } = {
    'blog-app_a.webp': require('@image/shop/blog-app_a.webp'),
    'blog-app_b.webp': require('@image/shop/blog-app_b.webp'),
    'blog-app_c.webp': require('@image/shop/blog-app_c.webp'),
    'building-app_a.webp': require('@image/shop/building-app_a.webp'),
    'car-app_a.webp': require('@image/shop/car-app_a.webp'),
    'cloth-app_a.webp': require('@image/shop/cloth-app_a.webp'),
    'cloth-app_b.webp': require('@image/shop/cloth-app_b.webp'),
    'cloth-app_c.webp': require('@image/shop/cloth-app_c.webp'),
    'coffe-app_a.webp': require('@image/shop/coffe-app_a.webp'),
    'course-app_a.webp': require('@image/shop/course-app_a.webp'),
    'food-app_a.webp': require('@image/shop/food-app_a.webp'),
    'headphone-app_a.webp': require('@image/shop/headphone-app_a.webp'),
    'phone-app_a.webp': require('@image/shop/phone-app_a.webp'),
    'phone-app_b.webp': require('@image/shop/phone-app_b.webp'),
    'portfolio-app_a.webp': require('@image/shop/portfolio-app_a.webp'),
    'portfolio-app_b.webp': require('@image/shop/portfolio-app_b.webp'),
    'portfolio-app_c.webp': require('@image/shop/portfolio-app_c.webp'),
    'portfolio-app_d.webp': require('@image/shop/portfolio-app_d.webp'),
    'portfolio-app_e.webp': require('@image/shop/portfolio-app_e.webp'),
    'sport-app_a.webp': require('@image/shop/sport-app_a.webp'),
};

const ImgCardComp = ({ picture }: ImgCardProps) => {
    const imageSource = pictureSources[picture];

    return (
        <View style={{
            position: 'relative',
            borderRadius: root.radiusM,
            overflow: 'hidden',
            zIndex: 1,
            alignItems: 'center'
        }}>
            <Image
                source={imageSource}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    transform: [{ scale: 3.25 }],
                }}
                blurRadius={5}
            />
            <Image
                source={imageSource}
                style={{
                    width: '90%',
                    height: 183,
                    marginVertical: root.sizeL,
                    resizeMode: 'cover',
                    borderRadius: root.radiusS,
                    overflow: 'hidden',
                }}
            />
        </View>
    )
}

export default ImgCardComp
