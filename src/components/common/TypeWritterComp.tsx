import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

import { textCustom } from '@root/utils/Styles';
import { RootState } from '@root/redux/store';

interface TypewriterCompProps {
    data: string[];
    begin?: string;
}

const TypewriterComp: React.FC<TypewriterCompProps> = ({ data, begin }) => {
    const { theme } = useSelector((state: RootState) => state.theme)

    const [text, setText] = useState('');
    const [counter, setCounter] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [delay, setDelay] = useState(100);
    const [delta, setDelta] = useState(delay);

    useEffect(() => {
        const tick = () => {
            const index = counter % data.length;
            const element = data[index];

            if (isDeleting) {
                setText(prevText => element.substring(0, prevText.length - 1));
            } else {
                setText(prevText => element.substring(0, prevText.length + 1));
            }

            if (isDeleting) {
                setDelta(50);
            }

            if (!isDeleting && text === element) {
                setDelta(1000);
                setIsDeleting(true);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setCounter(prevCounter => (prevCounter + 1) % data.length);
                setDelta(delay);
            }
        };

        const timer = setTimeout(() => {
            tick();
        }, delta);

        return () => clearTimeout(timer);
    }, [text, counter, isDeleting, delay, delta, data]);

    return (
        <Text style={textCustom(theme).textBold}>{begin} {text}</Text>
    );
};

export default TypewriterComp;
