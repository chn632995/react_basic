import React, { Component } from "react";

class App extends Component {
    state = {
        str: "千锋教育",
        obj: {
            y: 1,
        },
        arr: [1, 2, 3],
    };
    componentDidMount() {
        const newState = Object.assign({}, this.state);
        newState.str = "千锋教育H5学院";
        console.log(newState === this.state);
        console.log(newState,this.state);
    }
    render() {
        return <div></div>;
    }
}

export default App;
