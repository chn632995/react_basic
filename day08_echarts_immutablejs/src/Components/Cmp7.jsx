// 父 - 子

import React, { Component } from "react";

class Cmp7 extends Component {
    state = {
        msg: "hello world",
    };

    constructor(props) {
        super(props);
        this.changeMsg = this.changeMsg.bind(this);
    }

    render() {
        return <div>{this.state.msg}</div>;
    }

    changeMsg(msg) {
        // msg来自于父组件
        console.log(msg);
        this.setState(() => {
            return {
                msg: msg,
            };
        });
    }
}

export default Cmp7;
