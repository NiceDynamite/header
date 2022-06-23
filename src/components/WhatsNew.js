import React from "react";

export default class WhatsNew extends React.Component {
    render() {
        return (
            <div className="nav-new-container nav-item">
                <a href="/" className="nav-new">What's New</a>
                <div className="arrow-holder">
                    <i className="arrow-down"></i>
                </div>
            </div>
        )
    }
}