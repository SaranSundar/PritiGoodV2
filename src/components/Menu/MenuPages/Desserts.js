import React, {Component} from 'react';

class Desserts extends Component {
    render() {
        return (
            <div className="MenuPages">
                <div className="MenuPages-container">
                    <h1 className="MenuPages-title">Desserts</h1>
                    <div className="MenuPages-column-wrapper">
                        <div className="MenuPages-column">
                            <h2 className="MenuPages-flavor">Cheesecake shooters</h2>
                            <h2 className="MenuPages-flavor">Fruit pizza</h2>
                        </div>
                        <div className="MenuPages-column">
                            <h2 className="MenuPages-flavor">Mini fruit pizza</h2>
                            <h2 className="MenuPages-flavor">Candy kabob</h2>
                        </div>
                    </div>
                    <h1 className="MenuPages-arrangements-title">Specialty Desserts</h1>
                    <div className="MenuPages-arrangement-column-wrapper">
                        <div className="MenuPages-arrangement-column">
                            <img className="MenuPages-arrangement-image" src="/img/dessert1.jpg" alt="One of our delicious cookie arrangments!" />
                            <h3>(Chocolate covered oreos)</h3>
                        </div>
                        <div className="MenuPages-arrangement-column">
                            <img className="MenuPages-arrangement-image" src="/img/dessert2.jpg" alt="One of our delicious dessert arrangments!" />
                            {/*<h3>(Golden chocolate covered oreos)</h3>*/}
                        </div>
                        <div className="MenuPages-arrangement-column">
                            <img className="MenuPages-arrangement-image" src="/img/dessert3.jpg" alt="One of our delicious dessert arrangments!" />
                            {/*<h3>(Golden chocolate covered oreos)</h3>*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Desserts;
