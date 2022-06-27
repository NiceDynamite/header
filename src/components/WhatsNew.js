import React from "react";

export default class WhatsNew extends React.Component {
    render() {
        return (
            <div className="nav-new-container nav-item">
                <a href="/" className="nav-new">What's New
                    <div className="arrow-holder">
                        <i className="arrow"></i>
                    </div>
                </a>
            </div>
        )
    }
}