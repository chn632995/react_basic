import React, { Component } from "react";
import context from "../Context/index";

class Cmp10 extends Component {
    // 设置静态成员属性
    static contextType = context;

    render() {
        return <div>{this.context}</div>;
    }
}

export default Cmp10;
