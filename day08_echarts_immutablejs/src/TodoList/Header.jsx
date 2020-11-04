import React, { Component, Fragment } from "react";
// 引入仓库对象
import store from "../Store/index";

class Header extends Component {
    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="header-w w">
                        <div className="logo">
                            <h1>ToDoList</h1>
                        </div>
                        <div className="add">
                            <input
                                type="text"
                                id="title"
                                placeholder="添加ToDo"
                                onKeyUp={this.onKeyUpEnt}
                            />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
    onKeyUpEnt = (e) => {
        // 判断是否是回车操作
        if (e.keyCode === 13) {
            var title = e.target.value;
            var actionCreator = {
                type: "add",
                payload: title,
            };
            // 派发任务
            store.dispatch(actionCreator);
            // 清除当前已经输入的内容
            e.target.value = "";
        }
    };
}

export default Header;
