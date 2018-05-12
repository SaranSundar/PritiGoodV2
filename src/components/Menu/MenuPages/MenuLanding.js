import React, {Component} from 'react';
import {Link} from "react-router-dom";

class MenuLanding extends Component {
    render() {
        return (
            <div className="containerMenu">
                <div className="item">
                    <img src="img/Oreo.jpeg"/>
                    <div className="item__overlay colorTurquoise">
                        <span>SPECIALS</span>
                        <Link to="/Menu/Specials">
                            <button>VIEW SPECIALS</button>
                        </Link>
                    </div>
                </div>
                <div className="item">
                    <img src="img/Dessert.jpeg"/>
                    <div className="item__overlay colorWhite">
                        <span>DESSERTS</span>
                        <Link to="/Menu/Desserts">
                            <button>VIEW DESSERTS</button>
                        </Link>
                    </div>
                </div>
                <div className="item">
                    <img src="img/CakepopPink.jpeg"/>
                    <div className="item__overlay colorPink">
                        <span>CAKE POPS</span>
                        <Link to="/Menu/CakePops">
                            <button>VIEW CAKE POPS</button>
                        </Link>
                    </div>
                </div>
                <div className="item">
                    <img src="img/Cookie.jpg"/>
                    <div className="item__overlay colorTurquoise">
                        <span>COOKIES</span>
                        <Link to="/Menu/Cookies">
                            <button>VIEW COOKIES</button>
                        </Link>
                    </div>
                </div>
                <div className="item">
                    <img src="img/Cupcake2.jpeg"/>
                    <div className="item__overlay colorPink">
                        <span>CUPCAKES</span>
                        <Link to="/Menu/Cupcakes">
                            <button>VIEW CUPCAKES</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuLanding;
