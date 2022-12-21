import {
    legacy_createStore,
    applyMiddleware,
    combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./user/user.reducer";

const rootReducer = combineReducers({
    user: userReducer
});
// const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
    rootReducer,
    applyMiddleware(thunk)
);
