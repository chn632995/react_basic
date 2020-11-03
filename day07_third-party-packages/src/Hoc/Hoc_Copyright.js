import React, { Component, Fragment } from "react";

const withCopyright = (Cmp) => {
    // 返回新组件
    return class Hoc extends Component {
        // 如果有状态就写状态
        render() {
            return (
                <Fragment>
                    <Cmp></Cmp>
                    <div>&copy; 2020 - 千峰教育</div>
                </Fragment>
            );
        }
    };
};

export default withCopyright;
