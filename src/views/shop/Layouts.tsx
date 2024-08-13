import { ScrollView, View } from 'react-native';
import FooterComp from '@root/components/common/FooterComp';
import HeaderComp from '@root/components/common/header/HeaderComp';
import { useSelector } from 'react-redux';
import { RootState } from '@root/redux/store';
import { size } from '@root/utils/Styles';
import { DrawerActions, useNavigation } from '@react-navigation/native';

interface LayoutsProps {
    children: React.ReactNode;
    forwardedRef?: React.RefObject<ScrollView>;
}

const Layouts = ({ children, forwardedRef }: LayoutsProps) => {
    const { colors } = useSelector((state: RootState) => state.theme)
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, backgroundColor: colors.bg }}>
            <HeaderComp onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
            <ScrollView ref={forwardedRef} style={{ paddingHorizontal: size.m }}>
                <View style={{
                    flex: 1,
                    paddingVertical: size.l,
                    rowGap: size.m * 5,
                }}>
                    {children}
                </View>
                <FooterComp />
            </ScrollView>
        </View>
    );
};

export default Layouts;
