import React from "react";

export default class Deals extends React.Component {
    render() {
        return (
            <div className="nav-deals-container nav-item">
                <a href="/" className="nav-deals">Deals</a>
                <div className="arrow-holder">
                    <i className="arrow-down"></i>
                </div>
            </div>
        )
    }
}