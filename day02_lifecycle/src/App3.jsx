// 引入React
import React, { Component } from "react";

// 事件处理程序
// function clickHandler(event) {
//     console.log("海纳百川有容乃大，壁立千仞无欲则刚。");
//     console.log(event);
//     console.log(event.nativeEvent);
//     console.log(event.target);
//     console.log(event.target.innerHTML);
// }

// 函数组件
// const App3 = () => {
//     return <button onClick={clickHandler}>老林说</button>;
// };

// 类组件
class App3 extends Component {
    // 事件处理程序
    clickHandler(username, event) {
        console.log("海纳百川有容乃大，壁立千仞无欲则刚。");
        // console.log(event);
        // console.log(event.nativeEvent);
        // console.log(event.target);
        // console.log(event.target.innerHTML);
        console.log(username);
        console.log(event);
    }

    render() {
        return (
            // <button onClick={this.clickHandler.bind(this, "zhangsan")}>
            //     老林说
            // </button>
            <button onClick={(event) => this.clickHandler("zhangsan", event)}>
                老林说
            </button>
        );
    }
}

// 导出
export default App3;
