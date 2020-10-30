// 引入
import React from "react";
import ReactDOM from "react-dom";

// 配置react-redux
import {Provider} from 'react-redux'
import store from './Store/index'

// 导入根组件
import App from "./App20";

// 渲染视图
ReactDOM.render(
    // 共享store给全局的组件
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById("root")
);