import React, { Component, Fragment } from "react";
// 引入仓库对象
import store from "../Store/index";

class To extends Component {
    constructor(props) {
        super(props);
        // 获取初始值
        this.state = store.getState();
        // 订阅数据
        store.subscribe(() => {
            this.setState(() => store.getState());
        });
    }

    render() {
        // 获取当前待完成的数量
        let count = 0;
        this.state.todo.list.map((item, index) => {
            if (!item.done) {
                count++;
            }
        });
        return (
            <Fragment>
                <div className="start">
                    <div className="title">
                        <h1>正在进行</h1>
                        <div className="count">
                            <span id="todoCount">{count}</span>
                        </div>
                    </div>
                    <ol id="todolist" className="demo-box">
                        {this.state.todo.list.map((item, index) => {
                            if(!item.done){
                                return (
                                    <li key={index}>
                                        <input
                                            type="checkbox"
                                            onChange={this.changeTodo.bind(
                                                this,
                                                index
                                            )}
                                        />
                                        <p>{item.title}</p>
                                        <a href="#" id="">
                                            <div
                                                className="del"
                                                onClick={this.del.bind(
                                                    this,
                                                    index
                                                )}
                                            >
                                                ×
                                            </div>
                                        </a>
                                    </li>
                                );
                            }
                        })}
                    </ol>
                </div>
            </Fragment>
        );
    }
    del(index) {
        // 创建任务派发
        const actionCreator = {
            type: "del",
            payload: index,
        };
        store.dispatch(actionCreator);
    }
    changeTodo(index) {
        // 创建任务派发
        const actionCreator = {
            type: "switch",
            payload: index,
        };
        store.dispatch(actionCreator);
    }
}

export default To;
