import React, { Component, Fragment } from "react";
import { CSSTransition } from "react-transition-group";
// import "./assets/css/app.css";
import "./assets/css/animate.min.css";

class App26 extends Component {
    // 控制元素是否显示的开关
    state = {
        isShow: true,
    };
    // 给到事件，用于控制开关的切换
    clickHandler = () => {
        this.setState(() => {
            return {
                isShow: !this.state.isShow,
            };
        });
    };
    render() {
        return (
            <Fragment>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={300}
                    classNames={{
                        enter: "animate__animated",
                        enterActive: "animate__fadeInDown",
                        exit: "animate__animated",
                        exitActive: "animate__fadeOutDown",
                    }}
                    unmountOnExit
                >
                    <div>玩转react transition</div>
                </CSSTransition>
                <button onClick={this.clickHandler}>显示/隐藏</button>
            </Fragment>
        );
    }
}
export default App26;
