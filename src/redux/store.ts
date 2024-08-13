import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from 'redux-thunk'

import { UserReducers } from "./user/store";
import { ShopReducers } from "./shop/store";
import { CodeReducers } from "./code/store";
import themeReducer from "./theme";

const reducers = combineReducers({
    user: UserReducers,
    shop: ShopReducers,
    code: CodeReducers,

    theme: themeReducer
})

const IOGMdata = createStore(
    reducers,
    applyMiddleware(thunk)
)

export type RootState = ReturnType<typeof reducers>;

export default IOGMdata