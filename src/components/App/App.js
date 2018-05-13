import React, {Component, Fragment} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import "./App.css"
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import Menu from "../Menu/Menu";
import BottomBar from "../BottomBar/BottomBar";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";

class App extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <Switch>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/menu" component={Menu}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/" exact component={Home}/>
                    <Redirect to="/"/>
                </Switch>
                <BottomBar/>
            </Fragment>

        );
    }
}

export default App;
