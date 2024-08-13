import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeToken = async (token) => {
    try {
        const expiryTime = Date.now() + 3600 * 1000;
        const tokenData = JSON.stringify({ token, expiry: expiryTime });
        await AsyncStorage.setItem('token', tokenData);
    } catch (error) {
        console.error('Error storing the token', error);
    }
}

export const getToken = async () => {
    try {
        const tokenData = await AsyncStorage.getItem('token');

        if (tokenData !== null) {
            const { token, expiry } = JSON.parse(tokenData);
            if (Date.now() < expiry) {
                return token;
            } else {
                await AsyncStorage.removeItem('token');
                return false;
            }
        } else {
            await destroyToken();
            return false;
        }
    } catch (error) {
        return false;
    }
}

export const destroyToken = async () => {
    try {
        await AsyncStorage.removeItem('token');
    } catch (error) {
        console.error('Error removing the token', error);
    }
}
