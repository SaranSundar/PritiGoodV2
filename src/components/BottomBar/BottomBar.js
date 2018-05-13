import React, {Component, Fragment} from 'react';
import "./BottomBar.css"

class BottomBar extends Component {
    render() {
        return (
            <Fragment>
                {/*<div id="top"><a href="top"></a>Top</div>*/}
                <div className="BottomBar" id="bottom">
                    <div className="bottomRow-leftSide">
                        <a href="https://www.facebook.com/pritigood1" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-square socialMediaIcons"></i>
                        </a>
                    </div>
                    <div className="bottomRow-rightSide">
                        <input placeholder="EMAIL ADDRESS"/>
                        <button className="button">SUBSCRIBE</button>
                    </div>
                    <div className="copyRight">
                        <span>Copyright © PritiGood 2018 - <a href="https://gallery.rajsundarphotography.com/">Raj Sundar Photography (518-665-8341)</a></span>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default BottomBar;
