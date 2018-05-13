import React, {Component} from 'react';
import "./Contact.css"
import Scroll from 'smooth-scroll';
import {Link} from "react-router-dom";
import phone from "./phone.svg";

class Contact extends Component {
    componentDidMount() {
        let scroll = new Scroll('a[href*="#"]');
    }

    submit(){
        alert("Message Sent");
    }

    render() {
        return (
            <div className="contact">
                <div className="contact-wrapper">
                    <div className="name">
                        <h1>Name</h1>
                        <input type="text" className="contact-input" placeholder="Your name..."/>
                    </div>
                    <div className="email">
                        <h1>Email</h1>
                        <input type="text" className="contact-input" placeholder="Your email..."/>
                    </div>
                    <div className="phone">
                        <h1>Phone Number</h1>
                        <input type="text" className="contact-input" placeholder="Your phone number..."/>
                    </div>
                    <div className="message">
                        <h1>Leave your message below!</h1>
                        <input type="text" className="contact-input" placeholder="Type your message!"/>
                    </div>
                    <div className="submit">
                        <input type="submit" value="Submit" onClick={this.submit}/>
                    </div>
                </div>
                <div className="contact-phone-wrapper">
                    <div className="level">
                        <img className="phone-icon" src={phone} alt="Call me at this number!" />
                        <h2 className="phone-number">Call me at 214-223-5333</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
