import { ScrollView, View } from 'react-native';
import FooterComp from '@root/components/common/FooterComp';
import HeaderComp from '@root/components/common/header/HeaderComp';
import ShopMenuComp from '@root/components/common/header/ShopMenuComp';
import { root } from '@root/utils/Styles';
import NavigationComp from '@root/components/specific/shop/member/NavigationComp';
import { useState } from 'react';

interface LayoutsProps {
    children: React.ReactNode;
    forwardedRef?: React.RefObject<ScrollView>;
}

const Layouts = ({ children, forwardedRef }: LayoutsProps) => {
    const [isNavShow, setNavShow] = useState(false)

    return (
        <View style={{ flex: 1, backgroundColor: root.bgColor }}>
            <HeaderComp>
                <ShopMenuComp openNavigation={() => setNavShow(!isNavShow)} />
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
