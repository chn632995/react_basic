import React, { Component, Fragment } from "react";
import { Link, Route, withRouter, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Cmp16 from "./Components/Cmp16";
import Cmp17 from "./Components/Cmp17";
import "./assets/css/animate.min.css";

class App28 extends Component {
    render() {
        return (
            <Fragment>
                <ul>
                    <li>
                        <Link to="/nowplaying">正在热映</Link>
                    </li>
                    <li>
                        <Link to="/comingsoon">即将上映</Link>
                    </li>
                </ul>
                <TransitionGroup>
                    <CSSTransition
                        timeout={1000}
                        classNames={{
                            enter: "animate__animated",
                            enterActive: "animate__fadeInDown",
                            exit: "animate__animated",
                            exitActive: "animate__fadeOutDown",
                        }}
                        unmountOnExit
                        key={this.props.location.pathname}
                    >
                        <Switch>
                            <Route path="/nowplaying" component={Cmp16}></Route>
                            <Route path="/comingsoon" component={Cmp17}></Route>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        );
    }
}

export default withRouter(App28);
