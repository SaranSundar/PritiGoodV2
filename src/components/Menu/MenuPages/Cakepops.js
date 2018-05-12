import React, {Component} from 'react';

class Cakepops extends Component {

    render() {
        return (
            <div className="MenuPages">
                <div className="MenuPages-container">
                    <h1 className="MenuPages-title">Cakepops</h1>
                    <h3>(Crumbled cake mixed with frosting, hand rolled into ball and dipped in chocolate)</h3>
                    <div className="MenuPages-column-wrapper">
                        <div className="MenuPages-column">
                            <h2 className="MenuPages-flavor">Vanilla</h2>
                            <h2 className="MenuPages-flavor">Chocolate</h2>
                            <h2 className="MenuPages-flavor">Strawberry</h2>
                            <h2 className="MenuPages-flavor">Birthday Cake</h2>
                            <h2 className="MenuPages-flavor">Carrot</h2>
                        </div>
                        <div className="MenuPages-column">
                            <h2 className="MenuPages-flavor">German Chocolate</h2>
                            <h2 className="MenuPages-flavor">Lemon</h2>
                            <h2 className="MenuPages-flavor">Pistachio</h2>
                            <h2 className="MenuPages-flavor">Red Velvet</h2>
                            <h2 className="MenuPages-flavor">Cinnamon Roll</h2>
                        </div>
                    </div>
                    <h1 className="MenuPages-arrangements-title">Cakepop Arrangements</h1>
                    <div className="MenuPages-arrangement-column-wrapper">
                        <div className="MenuPages-arrangement-column">
                            <img className="MenuPages-arrangement-image" src="/img/bakery/8.jpeg"
                                 alt="One of our delicious cakepop arrangments!"/>
                        </div>
                        <div className="MenuPages-arrangement-column">
                            <img className="MenuPages-arrangement-image" src="/img/bakery/9.jpeg"
                                 alt="One of our delicious cakepop arrangments!"/>
                        </div>
                        <div className="MenuPages-arrangement-column">
                            <img className="MenuPages-arrangement-image" src="/img/bakery/11.jpeg"
                                 alt="One of our delicious cakepop arrangments!"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cakepops;
