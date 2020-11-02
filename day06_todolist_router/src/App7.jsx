import React, { Component } from "react";

import Cmp1 from "./Components/Cmp1";

class App7 extends Component {
    state = {
        msg: "x你好，中午一起吃饭啊！",
    };
    render() {
        return <Cmp1 msg={this.state.msg}>{this.state.msg}21645645645</Cmp1>;
    }
}

export default App7;
