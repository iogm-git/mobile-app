import { combineReducers } from "redux";
import { webCategoriesReducer, webDetailsReducer, webShowReducer } from "./reducers/guest";
import {
    destroyStashReducer,
    downloadTransactionsReducer,
    downloadWebReducer,
    getStashReducer,
    storeStashReducer,
    transactionHavePaidReducer,
    transactionInformationReducer,
    transactionLatestUnpaidReducer,
    transactionReducer
} from "./reducers/member";

export const ShopReducers = combineReducers({
    // guest
    webDetailsResult: webDetailsReducer,
    webCategoriesResult: webCategoriesReducer,
    webShowResult: webShowReducer,

    // member
    getStashResult: getStashReducer,
    storeStashResult: storeStashReducer,
    destroyStashResult: destroyStashReducer,
    downloadWebResult: downloadWebReducer,
    downloadTransactionsResult: downloadTransactionsReducer,
    transactionResult: transactionReducer,
    transactionInformationResult: transactionInformationReducer,
    transactionHavePaidResult: transactionHavePaidReducer,
    transactionLatestUnpaidResult: transactionLatestUnpaidReducer,
})