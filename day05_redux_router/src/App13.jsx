// 非受控组件

import React, { Component, createRef } from "react";

class App12 extends Component {
    constructor(props) {
        super(props);
        // 创建ref对象
        this.username = createRef();
        // this.username = React.createRef()
    }
    state = {
        msg: "hello world",
    };
    render() {
        return (
            <div>
                <input
                    type="text"
                    defaultValue={this.state.msg}
                    ref={this.username}
                />
                <button onClick={this.clickHandler.bind(this)}>提交</button>
            </div>
        );
    }
    clickHandler() {
        console.log(this.username.current.value);
        this.setState(() => {
            return {
                msg: this.username.current.value,
            };
        });
    }
}

export default App12;
