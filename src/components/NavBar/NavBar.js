import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import "./NavBar.css"

class NavBar extends Component {


    render() {
        return (
            <div className="NavBar card card-1">
                <header>
                    <nav id="menuToggle">
                        <input type="checkbox"/>
                        <span/>
                        <span/>
                        <span/>
                        <ul id="menu">
                            <Link to="/">
                                <li>
                                    <i className="fa fa-birthday-cake logo" aria-hidden="true"></i>
                                </li>
                            </Link>
                            <Link to="/About">
                                <li>ABOUT</li>
                            </Link>
                            <NavLink activeClassName={"selected"} exact={true} to="/Menu">
                                <li>MENU</li>
                            </NavLink>
                            <Link to="/Gallery">
                                <li>GALLERY</li>
                            </Link>
                            <Link to="/Contact">
                                <li>CONTACT</li>
                            </Link>
                            {/*<div className="rightSide">*/}
                                {/*<Link to="/Cart">*/}
                                    {/*<li>*/}
                                        {/*<i className="fas fa-shopping-cart logo"></i>*/}
                                    {/*</li>*/}
                                {/*</Link>*/}
                            {/*</div>*/}
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}


export default NavBar;
