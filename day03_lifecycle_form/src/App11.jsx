// shouldComponentUpdate

import React, { Component } from "react";

// 引入2个子组件
import Cmp5 from "./Components/Cmp5";
import Cmp6 from "./Components/Cmp6";

class App11 extends Component {
    // 定义2个数字
    state = {
        a: 0,
        b: 0,
    };

    render() {
        return (
            <div>
                <Cmp5 a={this.state.a}></Cmp5>
                <button onClick={this.handler_cmp5.bind(this)}>给a+1</button>
                <hr />
                <Cmp6 b={this.state.b}></Cmp6>
                <button onClick={this.handler_cmp6.bind(this)}>给b+1</button>
            </div>
        );
    }

    handler_cmp5() {
        this.setState((state) => {
            return {
                a: state.a + 1,
            };
        });
    }

    handler_cmp6() {
        this.setState((state) => {
            return {
                b: state.b + 1,
            };
        });
    }
}

export default App11;
