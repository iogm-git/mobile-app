import * as React from 'react';
import { Linking } from 'react-native';
import { Provider } from 'react-redux';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import Routes from './src/utils/Routes'

import IOGMdata from './src/redux/store'
import { meActions } from './src/redux/user/actions/auth';
import { webCategoriesActions, webDetailsActions } from './src/redux/shop/actions/guest';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { searchCourseActions } from './src/redux/code/actions/guest';

import NotifService from './src/utils/notifications/Service'

IOGMdata.dispatch(meActions.init())
IOGMdata.dispatch(webDetailsActions.init())
IOGMdata.dispatch(webCategoriesActions.init())
IOGMdata.dispatch(searchCourseActions.init())

function App() {

  React.useEffect(() => {
    const handleInitialURL = async () => {
      const initialUrl = await Linking.getInitialURL();
      if (initialUrl) {
        handleDeepLink({ url: initialUrl });
      }
    };

    const handleDeepLink = (event) => {
      const url = event.url;
      console.log('Deep link URL: ', url);
    };

    const linkingListener = Linking.addListener('url', handleDeepLink);

    handleInitialURL();

    return () => {
      linkingListener.remove();
    };
  }, []);

  React.useEffect(() => {
    const onRegister = (token: string) => {

    };

    const onNotification = (notification: any) => {

    };

    const notifService = NotifService;
    notifService.constructor(onRegister, onNotification);

  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={IOGMdata}>
        <BottomSheetModalProvider>
          <Routes />
        </BottomSheetModalProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
