// 导入
import React, { Component, Fragment } from "react";
import { Link, Route } from "react-router-dom";

// 导入路由规则需要使用的组件
import Home from "./Components/Cmp11";
import News from "./Components/Cmp12";
import About from "./Components/Cmp13";

class App21 extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <Fragment>
                <div>
                    <h1>导航区域</h1>
                    <ul>
                        <li>
                            <Link to="/home">家</Link>
                        </li>
                        <li>
                            <Link to="/news/1030?publishDate=20201030">新闻</Link>
                        </li>
                        <li>
                            <Link to="/about">关于</Link>
                        </li>
                    </ul>
                </div>
                {/* 路由规则 */}
                <Route path="/home" component={Home}></Route>
                <Route path="/news/:id" component={News}></Route>
                <Route path="/about" component={About}></Route>
                {/* <Route path="/about"><About/></Route> */}
            </Fragment>
        );
    }

    
}

export default App21;
