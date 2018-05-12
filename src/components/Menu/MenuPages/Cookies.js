import React, {Component} from 'react';

class Cookies extends Component {
    render() {
        return (
            <div className="MenuPages">
                <div className="MenuPages-container">
                    <h1 className="MenuPages-title">Cookies</h1>
                    <div className="MenuPages-column-wrapper">
                        <div className="MenuPages-column">
                            <h2 className="MenuPages-flavor">Toffee</h2>
                            <h2 className="MenuPages-flavor">Chocolate Chip</h2>
                            <h2 className="MenuPages-flavor">Frosted Sugar Cookie</h2>
                        </div>
                        <div className="MenuPages-column">
                            <h2 className="MenuPages-flavor">Peanut Butter</h2>
                            <h2 className="MenuPages-flavor">White Chocolate Cranberry</h2>
                        </div>
                    </div>
                    <h1 className="MenuPages-arrangements-title">Specialty Cookies</h1>
                    <div className="MenuPages-arrangement-column-wrapper">
                        <div className="MenuPages-arrangement-column">
                            <img className="MenuPages-arrangement-image" src="/img/Oreo.jpeg" alt="One of our delicious cookie arrangments!" />
                            <h3>(Golden chocolate covered oreos)</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cookies;
