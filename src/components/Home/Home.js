import React, {Component} from 'react';
import "./Home.css"
import SVGAnimation from "../SVGAnimation/SVGAnimation";
import Scroll from 'smooth-scroll';
import {Link} from "react-router-dom";

class Home extends Component {
    componentDidMount() {
        let scroll = new Scroll('a[href*="#"]');
    }


    render() {
        return (
            <div className="Home">
                {/*<div className="Home-Hero divShadowOverlay">*/}
                {/*/!*<img className="Home-Hero" src="./img/bg.jpg"/>*!/*/}
                {/*/!*<SVGAnimation className="Home-SVG" strokeColor="#FFFFFF" fillColor="white"/>*!/*/}
                {/*</div>*/}
                <div className="hero-image darken-overlay">
                    <div>
                        <SVGAnimation className="hero-text" strokeWidth={0} strokeColor="#FFFFFF" fillColor="white"/>
                        <p className="hero-text hero-text-p">Sweets meant for your sweets</p>
                        <Link to="#bottom">
                            <img src={"/downArrow.svg"} alt="Scroll Down" className="arrow-down" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
