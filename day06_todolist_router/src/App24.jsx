// 重定向路由
import React, { Component } from "react";
import { Link, Route, Redirect, Switch, withRouter } from "react-router-dom";

import Cmp11 from "./Components/Cmp11";
import Cmp12 from "./Components/Cmp12";
import Cmp13 from "./Components/Cmp13";
import NotFound from "./Components/404";

class App24 extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Link to="/home" tag="li">去xxx</Link>
                <button onClick={this.goUrl}>去CMP13</button>
                <Switch>
                    <Route path="/home" component={Cmp11}></Route>
                    <Route path="/news" component={Cmp12}></Route>
                    <Route path="/about" component={Cmp13}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </div>
        );
    }
    goUrl = () => {
        this.props.history.push({
            pathname: "/about",
        });
    };
}

export default withRouter(App24);
