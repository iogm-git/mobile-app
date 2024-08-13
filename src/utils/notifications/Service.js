import PushNotification, { Importance } from 'react-native-push-notification';
import NotificationHandler from './Handler';

class NotifService {
    constructor(onRegister, onNotification) {
        this.lastId = 0;
        this.lastChannelCounter = 0;

        this.createDefaultChannels();

        NotificationHandler.attachRegister(onRegister);
        NotificationHandler.attachNotification(onNotification);

        // Clear badge number at start
        PushNotification.getApplicationIconBadgeNumber(function (number) {
            if (number > 0) {
                PushNotification.setApplicationIconBadgeNumber(0);
            }
        });

        PushNotification.getChannels(function (channels) {
            // console.log(channels);
        });
    }

    createDefaultChannels() {
        PushNotification.createChannel(
            {
                channelId: "open-file",
                channelName: `Open File`,
                importance: Importance.HIGH,
                vibrate: true,
            },
        );
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new NotifService();
        }
        return this.instance;
    }


    localNotification({ title, message, data, actions }) {
        PushNotification.localNotification({
            channelId: "open-file",
            title: title,
            message: message,
            data: { data },
            actions: actions,
        });
    }
}

export default NotifService.getInstance();

