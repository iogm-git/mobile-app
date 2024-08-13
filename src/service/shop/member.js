import RNFS from 'react-native-fs';
import { Buffer } from 'buffer';

import NotifService from '@root/utils/notifications/Service'

import BaseApi from './../utils'
import { APP_BASE_URL } from '@env'

import {
    destroyStashActions,
    downloadTransactionsActions,
    downloadWebActions,
    getStashActions,
    storeStashActions,
    transactionActions,
    transactionHavePaidActions,
    transactionInformationActions,
    transactionLatestUnpaidActions

} from '@root/redux/shop/actions/member'
import { meActions } from '@root/redux/user/actions/auth'

import { getToken } from '@root/utils/Authentication'
import { _downloadPdfConfig, _getDateNow, _requestStoragePermission } from '@root/utils/Helper'

export const fetchGetStash = (page = 1) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {
            dispatch(getStashActions.request())
            try {
                const { data } = await BaseApi.get(`shop/member/stash?page=${page}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(getStashActions.success(data.data))
            } catch (error) {
                dispatch(getStashActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchStoreStash = (value) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {
            dispatch(storeStashActions.request())
            try {
                const { data } = await BaseApi.post(`shop/member/stash`, { web_id: value }, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(storeStashActions.success(data.message))
            } catch (error) {
                dispatch(storeStashActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchDestroyStash = (value) => {
    return async dispatch => {
        const token = await getToken()
        if (token) {
            dispatch(destroyStashActions.request())
            try {
                const { data } = await BaseApi.delete(`shop/member/stash?id=${value}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(destroyStashActions.success(data.message))
            } catch (error) {
                dispatch(destroyStashActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchDownloadWeb = (id, filename) => {
    return async dispatch => {
        const token = await getToken();

        if (token) {
            dispatch(downloadWebActions.request());

            try {
                _requestStoragePermission()

                let downloadPath = `${RNFS.DownloadDirectoryPath}/${filename}`;

                const response = await RNFS.downloadFile({
                    fromUrl: `${APP_BASE_URL}/shop/member/download/web?id=${id}`,
                    toFile: downloadPath,
                    headers: { Authorization: `Bearer ${token}` }
                }).promise;


                if (response.statusCode === 200) {
                    NotifService.localNotification({
                        title: 'Download Success',
                        message: 'Filename : ' + filename,
                        actions: ['Ok']
                    });

                    dispatch(downloadWebActions.success());
                } else {
                    console.log(response);
                    dispatch(downloadWebActions.failure('Download failed.'));
                }
            } catch (error) {
                console.log(error);
                dispatch(downloadWebActions.failure(error.response ? error.response.data.message : error.message));
            }
        } else {
            dispatch(meActions.success(null));
        }
    };
};

export const fetchDownloadTransactions = () => {
    return async dispatch => {
        const token = await getToken();

        if (token) {
            dispatch(downloadTransactionsActions.request());
            try {
                _requestStoragePermission();

                const response = await BaseApi.get(`shop/member/download/transactions`, {
                    headers: { Authorization: `Bearer ${token}` },
                    responseType: 'arraybuffer'
                })

                const fileName = `history-transactions ${_getDateNow()}.pdf`

                const filePath = `${RNFS.DownloadDirectoryPath}/${fileName}`

                // Convert response data to base64
                const base64Data = Buffer.from(response.data, 'binary').toString('base64');

                await RNFS.writeFile(filePath, base64Data, 'base64')

                NotifService.localNotification({
                    title: 'Download Success',
                    message: 'Filename : ' + fileName,
                    data: base64Data,
                    actions: ['See', 'Ok']
                })

                dispatch(downloadTransactionsActions.success(null))
            } catch (error) {
                console.error(error);
                dispatch(downloadTransactionsActions.failure(error.message));
                return null;
            }

        } else {
            dispatch(meActions.success(null));
        }
    };
};

export const fetchTransaction = (value) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {
            dispatch(transactionActions.request())
            try {
                const { data } = await BaseApi.post(`shop/member/transaction/store`, {
                    is_android: true,
                    web_id: value
                }, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(transactionActions.success(data.message))
                dispatch(transactionLatestUnpaidActions.init())
                dispatch(transactionInformationActions.init())
            } catch (error) {
                dispatch(transactionActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchTransactionInformation = (page = 1) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {
            dispatch(transactionInformationActions.request())
            try {
                const { data } = await BaseApi.get(`shop/member/transaction/information?page=${page}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(transactionInformationActions.success(data.data))
            } catch (error) {
                dispatch(transactionInformationActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchTransactionHavePaid = (page = 1) => {
    return async dispatch => {
        const token = await getToken()

        if (token) {
            dispatch(transactionHavePaidActions.request())
            try {
                const { data } = await BaseApi.get(`shop/member/transaction/have-paid?page=${page}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(transactionHavePaidActions.success(data.data))
            } catch (error) {
                dispatch(transactionHavePaidActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}

export const fetchTransactionLatestUnpaid = () => {
    return async dispatch => {
        const token = await getToken()

        if (token) {
            dispatch(transactionLatestUnpaidActions.request())
            try {
                const { data } = await BaseApi.get(`shop/member/transaction/latest-unpaid`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(transactionLatestUnpaidActions.success(data.data))
            } catch (error) {
                dispatch(transactionLatestUnpaidActions.failure(error.response.data.message))
            }
        } else {
            dispatch(meActions.success(null))
        }
    }
}