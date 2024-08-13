import { createReducer, initData } from "@root/redux/utils";
import { destroyStashActions, downloadTransactionsActions, downloadWebActions, getStashActions, storeStashActions, transactionActions, transactionHavePaidActions, transactionInformationActions, transactionLatestUnpaidActions } from "../actions/member";

export const getStashReducer = createReducer({ ...initData }, getStashActions)
export const storeStashReducer = createReducer({ ...initData }, storeStashActions)
export const destroyStashReducer = createReducer({ ...initData }, destroyStashActions)
export const downloadWebReducer = createReducer({ ...initData }, downloadWebActions)
export const downloadTransactionsReducer = createReducer({ ...initData }, downloadTransactionsActions)
export const transactionReducer = createReducer({ ...initData }, transactionActions)
export const transactionInformationReducer = createReducer({ ...initData }, transactionInformationActions)
export const transactionHavePaidReducer = createReducer({ ...initData }, transactionHavePaidActions)
export const transactionLatestUnpaidReducer = createReducer({ ...initData }, transactionLatestUnpaidActions)