// 受控组件
// 用户信息修改

import React, { Component } from "react";

class App14 extends Component {
    state = {
        userinfo: {
            username: "zhangsan",
            mobile: "13800138000",
            email: "zhangsan@hahaha.com",
            gender: "女",
            edm: true,
        },
    };
    render() {
        // 获取初始的数据
        let { username, mobile, email, gender, edm } = this.state.userinfo;
        return (
            <div>
                <div>
                    <input
                        type="text"
                        value={username}
                        name="username"
                        onChange={this.changeHandler.bind(this)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={mobile}
                        name="mobile"
                        onChange={this.changeHandler.bind(this)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={email}
                        name="email"
                        onChange={this.changeHandler.bind(this)}
                    />
                </div>
                <div>
                    <input
                        type="radio"
                        value="男"
                        name="gender"
                        checked={gender === "男" ? true : false}
                        onChange={this.changeHandler.bind(this)}
                    />
                    男
                    <input
                        type="radio"
                        value="女"
                        name="gender"
                        checked={gender === "女" ? true : false}
                        onChange={this.changeHandler.bind(this)}
                    />
                    女
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="edm"
                        checked={edm ? true : false}
                        onChange={this.changeHandler.bind(this)}
                    />
                    接受电子邮件营销
                </div>
                <div>
                    <button onClick={this.submitForm.bind(this)}>提交</button>
                </div>
            </div>
        );
    }
    changeHandler(e) {
        // console.log(e.target.value);
        let value = e.target.value;
        let name = e.target.name;
        let type = e.target.type;
        this.setState((state) => {
            if (type === "checkbox") {
                state.userinfo[name] = !state.userinfo[name];
                // if(state.userinfo[name]){
                //     state.userinfo[name] = false;
                // }else{
                //     state.userinfo[name] = true;
                // }
            } else {
                state.userinfo[name] = value;
            }
            return state;
        });
    }
    submitForm(){
        console.log(this.state.userinfo);
    }
}

export default App14;