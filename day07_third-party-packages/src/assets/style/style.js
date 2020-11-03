// 需要使用styled-components去写css样式
import styled from "styled-components";

// 开始定义样式（按需导出）
const Title = styled.div`
    font-size: 110px;
    color: pink;
    font-family: 华文行楷;
    background-color: black;
`;

const Button = styled.button`
    font-size: 20px;
    border: 1px solid red;
    border-radius: 3px;
`;
// 一个继承 Button 的新组件, 重载了一部分样式
// 继承会合并与父的样式，但是如果遇到样式冲突（相同），会以自己的为准
const Button2 = styled(Button)`
    color: blue;
    border-color: yellow;
`;

// 动态参数传递
const Input = styled.input`
    color: ${(props) => props.inputColor || "red"};
`;

// 导出
export { Title, Button, Button2, Input };
