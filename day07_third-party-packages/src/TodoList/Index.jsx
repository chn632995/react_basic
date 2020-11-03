import React, { Component, Fragment } from "react";

import Header from "./Header";
import To from "./To";
import Do from "./Do";

import "./assets/style.css";

class Index extends Component {
    render() {
        return (
            <Fragment>
                <Header></Header>
                <div className="main">
                    <div className="main-w w">
                        <To></To>
                        <Do></Do>
                    </div>
                </div>
                <footer>Copyright &copy; 2020 todolist.cn</footer>
            </Fragment>
        );
    }
}

export default Index;
