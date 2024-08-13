import { fetchActions } from "@root/redux/utils";
import { fetchDestroyStash, fetchDownloadTransactions, fetchDownloadWeb, fetchGetStash, fetchStoreStash, fetchTransaction, fetchTransactionHavePaid, fetchTransactionInformation, fetchTransactionLatestUnpaid } from "@root/service/shop/member";

export const getStashActions = fetchActions('GET_STASH', fetchGetStash)
export const storeStashActions = fetchActions('STORE_STASH', fetchStoreStash)
export const destroyStashActions = fetchActions('DESTROY_STASH', fetchDestroyStash)
export const downloadWebActions = fetchActions('DOWNLOAD_WEB', fetchDownloadWeb)
export const downloadTransactionsActions = fetchActions('DOWNLOAD_TRANSACTIONS', fetchDownloadTransactions)
export const transactionActions = fetchActions('TRANSACTION', fetchTransaction)
export const transactionInformationActions = fetchActions('TRANSACTION_INFORMATION', fetchTransactionInformation)
export const transactionHavePaidActions = fetchActions('TRANSACTION_HAVE_PAID', fetchTransactionHavePaid)
export const transactionLatestUnpaidActions = fetchActions('TRANSACTION_LATEST_UNPAID', fetchTransactionLatestUnpaid)