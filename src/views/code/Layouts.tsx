import { ScrollView, View } from 'react-native';
import FooterComp from '@root/components/common/FooterComp';
import HeaderComp from '@root/components/common/header/HeaderComp';
import { root } from '@root/utils/Styles';
import NavigationComp from '@root/components/specific/code/member/NavigationComp';
import { useState } from 'react';
import CodeMenuComp from '@root/components/common/header/CodeMenuComp';

interface LayoutsProps {
    children: React.ReactNode;
    forwardedRef?: React.RefObject<ScrollView>;
}

const Layouts = ({ children, forwardedRef }: LayoutsProps) => {
    const [isNavShow, setNavShow] = useState(false)

    return (
        <View style={{ flex: 1, backgroundColor: root.bgColor }}>
            <HeaderComp>
                <CodeMenuComp openNavigation={() => setNavShow(!isNavShow)} />
            </HeaderComp>
            <ScrollView ref={forwardedRef} style={{ paddingHorizontal: root.sizeM }}>
                <View style={{
                    flex: 1,
                    paddingVertical: root.sizeL,
                    rowGap: root.sizeXx,
                }}>
                    {children}
                </View>
                <FooterComp />
            </ScrollView>
            {isNavShow && <NavigationComp />}
        </View>
    );
};

export default Layouts;
