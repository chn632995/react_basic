import React, { Component } from "react";

class App5 extends Component {
    // 方式一：通过构造函数的形式
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         cityId: 0,
    //         count: 0,
    //     };
    // }
    // 方式二：常规方式
    state = {
        cityId: 10010,
        count: 0,
    };
    handler() {
        this.state.count = 200;
    }
    render() {
        // return <div>{this.state.cityId}</div>;
        return <button onClick={this.handler.bind(this)}>改变count的值</button>;
    }
}

export default App5;
