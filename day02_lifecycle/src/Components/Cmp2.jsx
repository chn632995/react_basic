import React, { Component } from "react";
import PropTypes from "prop-types";

function Cmp2(props) {
    return (
        <div>
            {props.flag}--{props.num}
        </div>
    );
}

Cmp2.propTypes = {
    flag: PropTypes.string,
    num: PropTypes.number.isRequired,
};

// class Cmp2 extends Component {
//     static propTypes = {
//         // 属性：规则
//         flag: PropTypes.string,
//         num: PropTypes.number.isRequired
//     };
//     render() {
//          return <div>{this.props.flag}--{this.props.num}</div>;
//     }
// }


export default Cmp2;
