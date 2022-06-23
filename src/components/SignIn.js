import React from "react";
import { CgProfile } from 'react-icons/cg'

export default class SignIn extends React.Component {
    render() {
        return (
            <div className="sign-in nav-item">
                <i className="icon"><CgProfile /></i>
                <a href="/" className="nav-sign-in">Sign in</a>
                <div className="arrow-holder">
                    <i className="arrow-down"></i>
                </div>
            </div>
        )
    }
}