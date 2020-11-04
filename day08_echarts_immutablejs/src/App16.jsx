import React, { Component } from "react";

import Cmp8 from "./Components/Cmp8";

class App16 extends Component {
    constructor(props) {
        super(props);
        this.getXiaoxi = this.getXiaoxi.bind(this);
        this.setXiaoxi = this.setXiaoxi.bind(this);
    }

    state = {
        xiaoxi: "两岸进入准战争状态？国台办回应",
    };

    render() {
        return (
            <div>
                <Cmp8 chengxu={this.getXiaoxi} chengxu2={this.setXiaoxi}></Cmp8>
            </div>
        );
    }

    getXiaoxi() {
        return this.state.xiaoxi;
    }

    setXiaoxi(msg) {
        this.setState(() => {
            return {
                xiaoxi: msg,
            };
        });
    }
}

export default App16;
