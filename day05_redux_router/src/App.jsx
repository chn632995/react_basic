// 引入react
// import React from "react";
import React,{Component} from "react";

// 类组件
class App extends Component {
    render() {
        return <div>这是第一个类组件</div>;
    }
}

// 导出
export default App;

// 函数组件
// 方式1：标准写法
// function App() {
//     return <div>这是第一个函数组件</div>;
// }

// 方式2：箭头函数
// const App = () => {
//     return <div>这是第一个函数组件</div>;
// };

// export default App;

// 方式3：直接导出
// export default () => {
//     return <div>这是第一个函数组件</div>;
// };
