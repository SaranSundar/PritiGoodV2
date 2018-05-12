import React, {Component} from 'react';
import "./Menu.css";
import './MenuPages/MenuPages.css';
import {NavLink, Route, Switch} from "react-router-dom";
import MenuLanding from "./MenuPages/MenuLanding";
import Cakepops from "./MenuPages/Cakepops";
import Desserts from "./MenuPages/Desserts";
import Cupcakes from "./MenuPages/Cupcakes";
import Specials from "./MenuPages/Specials";
import Cookies from "./MenuPages/Cookies";
import cookieImg from "./MenuImages/cookie.svg";
import cupcakeImg from "./MenuImages/cupcake.svg";
import cakepopImg from "./MenuImages/cakepop.svg";
import oreoImg from "./MenuImages/oreo.svg";

class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <div className="mainMenu">
                    <h1>MENU</h1>
                </div>
                <ul className="menuItems">
                    <NavLink activeClassName={"selected"} exact={true} to="/Menu/Desserts">
                        <div className="centerDivs">
                            <img className="cakeImage" src={oreoImg}/>
                            <li>Desserts</li>
                        </div>
                    </NavLink>
                    <NavLink activeClassName={"selected"} exact={true} to="/Menu/CakePops">
                        <div className="centerDivs">
                            <img className="cupcakeImage" src={cakepopImg}/>
                            <li>Cake Pops</li>
                        </div>
                    </NavLink>
                    <NavLink activeClassName={"selected"} exact={true} to="/Menu/Cookies">
                        <div className="centerDivs">
                            <img className="cookieImage" src={cookieImg}/>
                            <li>Cookies</li>
                        </div>
                    </NavLink>
                    <NavLink activeClassName={"selected"} exact={true} to="/Menu/Cupcakes">
                        <div className="centerDivs">
                            <img className="cupcakeImage" src={cupcakeImg}/>
                            <li>Cupcakes</li>
                        </div>
                    </NavLink>
                </ul>
                <Switch>
                    <Route path="/menu/specials" component={Specials}/>
                    <Route path="/menu/cookies" component={Cookies}/>
                    <Route path="/menu/cupcakes" component={Cupcakes}/>
                    <Route path="/menu/cakepops" component={Cakepops}/>
                    <Route path="/menu/desserts" component={Desserts}/>
                    <Route path="/menu" component={MenuLanding}/>
                </Switch>
            </div>
        );
    }
}

export default Menu;
