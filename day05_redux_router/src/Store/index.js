// 引入该引入的元素
import { createStore, applyMiddleware, compose } from "redux";
// 引入thunk
import thunk from "redux-thunk";

// 引入reducer
import reducer from "./reducers/reducer_app20";

const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

// 创建仓库
const store = createStore(
    reducer,
    // applyMiddleware(thunk)
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 导出仓库
export default store;
