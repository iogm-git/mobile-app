import { DrawerNavigationProp } from '@react-navigation/drawer';
import { createRef } from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

type PdfViewerStackParamList = {
    User: {
        screen: 'Member',
        params: {
            screen: 'PdfViewer',
            params: {
                base64Data: string
            }
        }
    }
};

export const navigationRef = createRef<NavigationContainerRef<PdfViewerStackParamList>>();

export const navigateToPdfViewer = (base64Data: string) => {
    navigationRef.current?.navigate('User', {
        screen: 'Member',
        params: {
            screen: 'PdfViewer',
            params: {
                base64Data
            }
        }
    });
};

export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
    ForgotPassword: undefined;
};

export type UserTabsStackParamList = {
    HomeScreen: undefined;
    User: {
        screen: string;
        params: {
            screen: string;
        }
    },
    Auth: {
        screen: string;
    },
    Member: {
        screen: string;
    }
};

export type ShopTabsStackParamList = {
    ShopHomeScreen: undefined;
    Show: { type: string; category: string };
    Paid: {
        data: any
    }
    Member: {
        screen: string,
        params?: {
            screen: string
        }
    }
};

export type CodeTabsStackParamList = {
    CodeHomeScreen: undefined;
    Courses: undefined;
    Certificates: undefined;
    Member: {
        screen: string,
        params: {
            screen: string,
            params?: {
                data?: any
            }
        }
    }
};

// Combine all stack navigators into one RootStackParamList (optional, if needed)
export type RootStackParamList = AuthStackParamList & UserTabsStackParamList & ShopTabsStackParamList & CodeTabsStackParamList;

// Define Drawer navigation props (optional, if needed)
export type DrawerNavigationProps<T extends keyof RootStackParamList> = DrawerNavigationProp<RootStackParamList, T>;