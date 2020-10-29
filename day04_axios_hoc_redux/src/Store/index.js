// 引入该引入的元素
import { createStore } from "redux";

// 引入reducer
import reducer from "./reducers/reducer_app20";

// 创建仓库
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 导出仓库
export default store;
