import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";

// Import Combination of all Reducer
import rootReducer from "./rootReducer";
// Import All Saga code
import { rootsaga } from "./saga/index";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootsaga);

export default store;