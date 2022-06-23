import React from "react";

export default class Pickup extends React.Component {
    render() {
        return (
            <div className="nav-pickup-container nav-item">
                <a href="/" className="nav-pickup">Pickup & Delivery</a>
                <div className="arrow-holder">
                    <i className="arrow-down"></i>
                </div>
            </div>
        )
    }
}