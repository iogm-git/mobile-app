import { RootState } from '@root/redux/store';
import { color, textCustom } from '@root/utils/Styles';
import React, { PropsWithChildren } from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

type StarProps = PropsWithChildren<{
    star: number
}>

const StarRating = ({ star }: StarProps) => {
    const { theme } = useSelector((state: RootState) => state.theme)

    const renderStars = () => {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (star > 0) {
                stars += '★'
            } else {
                stars += '☆'
            }
            star--
        }
        return stars;
    };

    return (
        <Text style={[textCustom(theme).textMedium, { color: color.orange }]}>{renderStars()}</Text>
    );
};

export default StarRating;
