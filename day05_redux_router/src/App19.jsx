import React, { Component } from "react";
//引入高阶组件
import HOC from "./Hoc/Hoc_Copyright";

class App19 extends Component {
    render() {
        return (
            <div>
                <h1>网站首页</h1>
                <div>
                    海外网10月29日电当地时间29日上午，韩国最高法院对前总统李明博涉嫌贪污受贿案进行终审宣判，维持二审判决结果，判处78岁的李明博17年有期徒刑，罚款130亿韩元（约合人民币7711万元），追缴57.8亿韩元（约合3429人民币万元）。当天李明博未出庭。目前保释在家的他，将面临再次被收监。
                </div>
            </div>
        );
    }
}

// 使用高阶组件
export default HOC(App19);
