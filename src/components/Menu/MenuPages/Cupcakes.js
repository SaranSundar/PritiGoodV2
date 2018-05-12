import React, {Component} from 'react';

class Cupcakes extends Component {
    render() {
        return (
            <div className="MenuPages">
                <div className="MenuPages-container">
                    <h1 className="MenuPages-title">Cupcakes</h1>
                    <div className="MenuPages-column-wrapper">
                        <div className="MenuPages-column">
                            <h2 className="MenuPages-flavor">Pumpkin Gingerbread Muffins</h2>
                        </div>
                        <div className="MenuPages-column">
                            <h2 className="MenuPages-flavor">Chocolate Bark</h2>
                        </div>
                    </div>
                    <h1 className="MenuPages-arrangements-title">Cupcake Arrangements</h1>
                    <div className="MenuPages-arrangement-column-wrapper">
                        <div className="MenuPages-arrangement-column">
                            <img className="MenuPages-arrangement-image" src="/img/bakery/14.jpeg" alt="One of our delicious cupcake arrangments!" />
                            <h3>(Birthday cupcakes!)</h3>
                        </div>
                        <div className="MenuPages-arrangement-column">
                            <img className="MenuPages-arrangement-image" src="/img/Cupcake2.jpeg" alt="One of our delicious cupcake arrangments!" />
                            <h3>(Small pieces of cake layered in between frosting in a retro pushpop container)</h3>
                        </div>
                        <div className="MenuPages-arrangement-column">
                            <img className="MenuPages-arrangement-image" src="/img/bakery/6.jpeg" alt="One of our delicious cupcake arrangments!" />
                            <h3>(Cupcakes and frosting layered inside a mason jar)</h3>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Cupcakes;
