import React, { Component } from "react";
import { Route } from "react-router-dom";

// 导入后续非公共的路由部分的需要使用的组件
import User from './User'
import Goods from './Goods'

class Index extends Component {
    render() {
        // 获取前缀
        let prefix = this.props.match.path
        return (
            <div>
                <h1>欢迎使用后台管理程序</h1>
                <Route path={`${prefix}/user`} component={User}></Route>
                <Route path={`${prefix}/goods`} component={Goods}></Route>
            </div>
        );
    }
}

export default Index;
