import { Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';
import { navigateToPdfViewer } from '../Navigation';

class NotificationHandler {
    onNotification(notification) {
        if (typeof this._onNotification === 'function') {
            this._onNotification(notification);
        }

        if (notification.action === 'See' && notification.data) {
            if (Platform.OS === 'android') {
                const { data: base64Data } = notification.data;
                navigateToPdfViewer(base64Data);
            }
        }
    }

    onRegister(token) {
        console.log('NotificationHandler:', token);

        if (typeof this._onRegister === 'function') {
            this._onRegister(token);
        }
    }

    onAction(notification) {
        console.log('Notification Action:', notification);
    }

    onRegistrationError(err) {
        console.error('Notification Registration Error:', err);
    }

    attachRegister(handler) {
        this._onRegister = handler;
    }

    attachNotification(handler) {
        this._onNotification = handler;
    }
}

const handler = new NotificationHandler();

PushNotification.configure({
    onRegister: handler.onRegister.bind(handler),
    onNotification: handler.onNotification.bind(handler),
    onAction: handler.onAction.bind(handler),
    onRegistrationError: handler.onRegistrationError.bind(handler),
    permissions: {
        alert: true,
        badge: true,
        sound: true,
    },
    popInitialNotification: true,
    requestPermissions: Platform.OS === 'ios',
});

export default handler;
