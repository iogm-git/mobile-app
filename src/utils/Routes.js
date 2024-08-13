import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserIcon from '@svg/common/@root/user'
import ShopIcon from '@svg/common/@root/shop'
import CodeIcon from '@svg/common/@root/code'

import { navigationRef } from './Navigation';

import RootLinking from './Linking';

import { color, size, textCustom } from './Styles';

import LoadingScreen from '@root/views/LoadingScreen';

import { Text, View } from 'react-native';

// Helper
import PdfViewer from '@root/components/common/PdfViewScreenComp';
import DrawerContentComp from '@root/components/specific/user/DrawerContentComp';
import ShopDrawerContentComp from '@root/components/specific/shop/DrawerContentComp';
import CodeDrawerContentComp from '@root/components/specific/code/DrawerContentComp';

// ####### IOGM - User #######
// === Guest ===
import HomeScreen from '@root/views/user/guest/HomeScreen';
import Login from '@root/views/user/guest/Login';
import Register from '@root/views/user/guest/Register';
// -- password --
import ForgotPassword from '@root/views/user/guest/ForgotPassword';
// === Guest ===
// === Member ===
import Setting from '@root/views/user/member/Setting';
import Ballot from '@root/views/user/member/Ballot';
// -- Code App --
import Instructor from '@root/views/user/member/code/Instructor';
import CodeRegister from '@root/views/user/member/code/Register';
// === Member ===
// ####### IOGM - User #######

// ####### IOGM - Shop #######
// === Guest ===
import ShopHomeScreen from '@root/views/shop/guest/HomeScreen';
import Show from '@root/views/shop/guest/Show';
// === Guest ===
// === Member ===
import ShopProfile from '@root/views/shop/member/Profile';
import ShopStashes from '@root/views/shop/member/Stashes';
import ShopTransactions from '@root/views/shop/member/Transactions';
import ShopDownload from '@root/views/shop/member/Download';
import ShopPurchases from '@root/views/shop/member/Purchases';
import ShopPaid from '@root/views/shop/member/Paid';
// === Member ===
// ####### IOGM - Shop #######

// ####### IOGM - Code #######
// === Guest ===
import CodeHomeScreen from '@root/views/code/guest/HomeScreen';
import Courses from '@root/views/code/guest/Courses';
import Certificates from '@root/views/code/guest/Certificates';
// === Guest ===
// === Member ===
// --- General ---
import DiscussionForums from '@root/views/code/member/general/DiscussionForums';
import CodeSetting from '@root/views/code/member/general/Setting';
// --- General ---
// --- Instructor ---
import InstructorProfile from '@root/views/code/member/instructor/Profile';
import InstructorCourses from '@root/views/code/member/instructor/studies/Courses';
import InstructorFormCourse from '@root/views/code/member/instructor/studies/Form';
import InstructorSections from '@root/views/code/member/instructor/studies/sections/Sections';
import InstructorFormSection from '@root/views/code/member/instructor/studies/sections/Form';
import InstructorLessons from '@root/views/code/member/instructor/studies/sections/lessons/Lessons';
import InstructorFormLesson from '@root/views/code/member/instructor/studies/sections/lessons/Form';
import Earnings from '@root/views/code/member/instructor/Earnings';
import Questions from '@root/views/code/member/instructor/Questions';
import Reviews from '@root/views/code/member/instructor/Reviews';
// --- Instructor ---
// --- Student ---
import StudentProfile from '@root/views/code/member/student/Profile';
import StudentCourses from '@root/views/code/member/student/studies/Courses';
import StudentSections from '@root/views/code/member/student/studies/Sections';
import StudentLessons from '@root/views/code/member/student/studies/Lessons';
import StudentQuestion from '@root/views/code/member/student/studies/Question';
import StudentReview from '@root/views/code/member/student/studies/Review';
import StudentCertificates from '@root/views/code/member/student/Certificates';
import StudentReviews from '@root/views/code/member/student/Reviews';
import StudentStashes from '@root/views/code/member/student/Stashes';
import StudentTransactions from '@root/views/code/member/student/Transactions';
import Answers from '@root/views/code/member/student/Answers';
// --- Student ---
// === Member ===
// ####### IOGM - Code #######

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack() {
    const { data: member } = useSelector(state => state.user.meData);
    const navigation = useNavigation();

    useEffect(() => {
        if (member) {
            navigation.navigate('User', { screen: 'Member', params: { screen: 'Setting' } });
        }
    }, [member, navigation]);

    if (member) {
        return null;
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        </Stack.Navigator>
    );
}

function UserTabs() {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContentComp {...props} />} screenOptions={{ headerShown: false }} >
            <Drawer.Screen name='HomeScreen' component={HomeScreen} />
            <Drawer.Screen name='Auth' component={AuthStack} />
            <Drawer.Screen name='Member' component={UserMemberStack} />
        </Drawer.Navigator>
    )
}

function UserMemberStack() {
    const { data: member } = useSelector(state => state.user.meData);
    const navigation = useNavigation();

    useEffect(() => {
        if (!member) {
            navigation.navigate('User', { screen: 'Auth', params: { screen: 'Login' } });
        }
    }, [member, navigation]);

    if (!member) {
        return null;
    }

    return (
        <Drawer.Navigator drawerContent={props => <DrawerContentComp {...props} />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name='Setting' component={Setting} />
            <Drawer.Screen name='Ballot' component={Ballot} />
            <Drawer.Screen name='Instructor' component={Instructor} />
            <Drawer.Screen name='CodeRegister' component={CodeRegister} />
            <Drawer.Screen name='PdfViewer' component={PdfViewer} />
        </Drawer.Navigator>
    )
}

function ShopTabs() {
    return (
        <Drawer.Navigator drawerContent={props => <ShopDrawerContentComp {...props} />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name='ShopHomeScreen' component={ShopHomeScreen} />
            <Drawer.Screen name='Show' component={Show} />
            <Drawer.Screen name='Member' component={ShopMemberStack} />
        </Drawer.Navigator>
    )
}

function ShopMemberStack() {
    const { data: member } = useSelector(state => state.user.meData);
    const navigation = useNavigation();

    useEffect(() => {
        if (!member) {
            navigation.navigate('User', { screen: 'Auth', params: { screen: 'Login' } });
        }
    }, [member, navigation]);

    if (!member) {
        return null;
    }

    return (
        <Drawer.Navigator drawerContent={props => <ShopDrawerContentComp {...props} />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name='Profile' component={ShopProfile} />
            <Drawer.Screen name='Stashes' component={ShopStashes} />
            <Drawer.Screen name='Transactions' component={ShopTransactions} />
            <Drawer.Screen name='Download' component={ShopDownload} />
            <Drawer.Screen name='Purchases' component={ShopPurchasesStack} />
        </Drawer.Navigator>
    );
}

function ShopPurchasesStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Index' component={ShopPurchases} />
            <Stack.Screen name='Paid' component={ShopPaid} />
        </Stack.Navigator>
    );
}

function CodeTabs() {
    return (
        <Drawer.Navigator drawerContent={props => <CodeDrawerContentComp {...props} />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name='CodeHomeScreen' component={CodeHomeScreen} />
            <Drawer.Screen name='GuestCourses' component={Courses} />
            <Drawer.Screen name='GuestCertificates' component={Certificates} />
            <Drawer.Screen name='Member' component={CodeMemberTabs} />
        </Drawer.Navigator>
    )
}

function CodeMemberTabs() {
    const { data: member } = useSelector(state => state.user.meData);
    const navigation = useNavigation();

    useEffect(() => {
        if (!member) {
            navigation.navigate('User', { screen: 'Auth', params: { screen: 'Login' } });
        }
    }, [member, navigation]);

    if (!member) {
        return null;
    }

    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name='General' component={CodeGeneralStack} />
            <Drawer.Screen name='Instructor' component={CodeInstructorStack} />
            <Drawer.Screen name='Student' component={CodeStudentStack} />
        </Drawer.Navigator>
    );
}

function CodeGeneralStack() {
    return (
        <Drawer.Navigator drawerContent={props => <CodeDrawerContentComp {...props} />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name='DiscussionForums' component={DiscussionForums} />
            <Drawer.Screen name='Setting' component={CodeSetting} />
        </Drawer.Navigator>
    );
}

function CodeInstructorStack() {
    return (
        <Drawer.Navigator drawerContent={props => <CodeDrawerContentComp {...props} />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name='Profile' component={InstructorProfile} />
            <Drawer.Screen name='Courses' component={InstructorCourses} />
            <Drawer.Screen name='StoreCourse'>
                {() => <InstructorFormCourse type='store' />}
            </Drawer.Screen>
            <Drawer.Screen name='UpdateCourse'>
                {() => <InstructorFormCourse type='update' />}
            </Drawer.Screen>
            <Drawer.Screen name='Sections' component={InstructorSections} />
            <Drawer.Screen name='StoreSection'>
                {() => <InstructorFormSection type='store' />}
            </Drawer.Screen>
            <Drawer.Screen name='UpdateSection'>
                {() => <InstructorFormSection type='update' />}
            </Drawer.Screen>
            <Drawer.Screen name='Lessons' component={InstructorLessons} />
            <Drawer.Screen name='StoreLesson'>
                {() => <InstructorFormLesson type='store' />}
            </Drawer.Screen>
            <Drawer.Screen name='UpdateLesson'>
                {() => <InstructorFormLesson type='update' />}
            </Drawer.Screen>
            <Drawer.Screen name='Earnings' component={Earnings} />
            <Drawer.Screen name='Questions' component={Questions} />
            <Drawer.Screen name='Reviews' component={Reviews} />
        </Drawer.Navigator>
    );
}

function CodeStudentStack() {
    return (
        <Drawer.Navigator drawerContent={props => <CodeDrawerContentComp {...props} />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name='Profile' component={StudentProfile} />
            <Drawer.Screen name='Courses' component={StudentCourses} />
            <Drawer.Screen name='Sections' component={StudentSections} />
            <Drawer.Screen name='Lessons' component={StudentLessons} />
            <Drawer.Screen name='Question' component={StudentQuestion} />
            <Drawer.Screen name='StoreReview' >
                {() => <StudentReview type='store' />}
            </Drawer.Screen>
            <Drawer.Screen name='UpdateReview' >
                {() => <StudentReview type='update' />}
            </Drawer.Screen>
            <Drawer.Screen name='Certificates' component={StudentCertificates} />
            <Drawer.Screen name='Stashes' component={StudentStashes} />
            <Drawer.Screen name='Transactions' component={StudentTransactions} />
            <Drawer.Screen name='Reviews' component={StudentReviews} />
            <Drawer.Screen name='Answers' component={Answers} />
        </Drawer.Navigator>
    );
}

const Routes = () => {
    const { theme, colors } = useSelector(state => state.theme)

    return (
        <NavigationContainer
            linking={RootLinking}
            fallback={<LoadingScreen />}
            ref={navigationRef}
        >
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    switch (route.name) {
                        case 'User':
                            IconComponent = UserIcon;
                            break;
                        case 'Shop':
                            IconComponent = ShopIcon;
                            break;
                        case 'Code':
                            IconComponent = CodeIcon;
                            break;
                        default:
                            return null;
                    }

                    return (
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            columnGap: 4,
                            width: 90,
                        }}>
                            <IconComponent width={size.l} height={size.l} fill={color} />
                            <Text style={[textCustom(theme).textLight, { color: color }]}>{route.name}</Text>
                        </View>
                    );
                },
                headerShown: false,
                tabBarActiveTintColor: color.blue,
                tabBarInactiveTintColor: colors.link,
                tabBarStyle: { backgroundColor: colors.bg, },
                tabBarLabel: () => null,
            })}>
                <Tab.Screen name='User' component={UserTabs} />
                <Tab.Screen name='Shop' component={ShopTabs} />
                <Tab.Screen name='Code' component={CodeTabs} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Routes;