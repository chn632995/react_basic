import React, { Component } from "react";

class Cmp13 extends Component {
    render() {
        return (
            <div>
                <button onClick={this.goUrl.bind(this)}>去新闻</button>
                <h1>关于页面</h1>
            </div>
        );
    }

    goUrl() {
        // 编程式导航
        this.props.history.push({
            pathname: "/news/123",
            search: "from=about",
            state: {
                uname: "admin",
                date: "2020.10.30",
            },
        });
        // this.props.history.go(-1)
    }
}
export default Cmp13;
